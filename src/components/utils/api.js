const URL_API = import.meta.env.VITE_API_URL;

function buildMemberPhotoSrc(prefix) {
    const safePrefix = String(prefix || '').trim();
    if (!safePrefix) return '';

    const qs = new URLSearchParams({ prefix: safePrefix });
    return `${URL_API + "members/getImageMemberS3"}?${qs.toString()}`;
}

function normalizeMembers(payload) {
    const safeMembers = Array.isArray(payload) ? payload : [];

    return safeMembers.map((member) => ({
        ...member,
        photoSrc: buildMemberPhotoSrc(member?.foto)
    }));
}

export async function getMembers(isAdmin) {
    const endpoint = URL_API + 'members' + (isAdmin ? '?admin=true' : '?admin=false');

    try {
        const response = await fetch(endpoint, { method: 'GET', mode: 'cors' });
        const payload = await response.json();
        const safeMembers = normalizeMembers(payload);

        return {
            members: isAdmin ? safeMembers : [],
            notMembers: isAdmin ? [] : safeMembers,
            error: null
        };
    } catch (error) {
        console.error(error);
        return {
            members: [],
            notMembers: [],
            error: 'No se pudo cargar el equipo en este momento.'
        };
    }
}

export async function getAllMembers() {
    const endpoint = URL_API + 'data/allImages';
    const qs = new URLSearchParams({ prefix: 'members-images/founders/' });
    
    try {
        const response = await fetch(`${endpoint}?${qs.toString()}`, { method: 'GET', mode: 'cors' });
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        const payload = await response.json();
        return {
            images: Array.isArray(payload?.images) ? payload.images : [],
            error: null
        };
    } catch (error) {
        console.error(error);
        return {
            images: [],
            error: 'No se pudieron cargar las imágenes en este momento.'
        };
    }
}
