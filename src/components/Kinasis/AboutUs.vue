<template>
    <Header />
    <div class="content">
        <div class="tittle-head">
            <div class="logo_kinasis">
                <img src="/general_assets/logo_white.png" class="logo-light"/>
                <img src="/general_assets/logo_dark.png" class="logo-dark"/>
            </div>
            <h1>KINASIS</h1>
        </div>
        <div class="slogan-box">
            <h2>Conectamos tu visión con la tecnología.</h2>
        </div>
        <div class="aboutus-box">
            <h2>¿Quiénes somos?</h2>
            <h3> En <a class="specific-text">Kinasis</a> somos un equipo de ingenieros enfocados en transformar ideas en soluciones tecnológicas reales. 
                Diseñamos software, sistemas y plataformas digitales mediante un enfoque metódico que prioriza la calidad, 
                la comunicación y la entrega de resultados alineados a los objetivos de cada cliente.
            </h3>
        </div>
    </div>
</template>

<style scoped>

.content{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    min-height: calc(100vh - 60px);
    padding-top: 28px;
    background: transparent;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    position: relative;
    z-index: 1;
}

.tittle-head {
    --brand-size: clamp(72px, 10vw, 120px);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    background: transparent;
}

.logo_kinasis img {
    width: var(--brand-size);
}

.logo_kinasis .logo-dark {
    display: none;
}

.dark-mode .logo_kinasis .logo-light {
    display: none;
}

.dark-mode .logo_kinasis .logo-dark {
    display: block;
}

.tittle-head h1{
    margin: 0;
    font-size: var(--brand-size);
    line-height: 1;
    font-family: 'Orbitron', sans-serif;
    font-weight: 900;
    color: var(--primary-color);
    text-shadow: 
        0 0 10px var(--primary-color),
        0 0 11px var(--secondary-color);
    letter-spacing: 5px;
}

.tittle-head h2{
    font-size: 30px;
}

.slogan-box {
    margin-top: 5px;
}

.aboutus-box {
    border-radius: 35px;
    max-width: 800px;
    margin-top: 40px;
    padding: 10px 20px;
    text-align: justify;
    transition: all 0.2s ease;
}

.aboutus-box:hover{
    border-radius: 35px;
    transform: translateY(-5px);
    box-shadow: 
        0 10px 28px -18px var(--shadow-color),
        0 0 14px var(--shadow-color);
    transition: all 0.2s ease;
}

.specific-text {
    color: var(--primary-color);
    font-weight: bold;
}

.aboutus-box h2 {
    font-size: 20px;
    margin-bottom: 20px;
    transition: all 0.2s ease;
}

.aboutus-box h2:hover {
    font-size: 21px;
    color: var(--primary-color);
    text-shadow: 
        0 0 2px var(--primary-color),
        0 0 5px var(--secondary-color);
    transition: all 0.2s ease;
}

.aboutus-box h3 {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-color);
    text-shadow: 
        0 0 3px var(--text-color),
        0 0 5px var(--shadow-color);
}
</style>