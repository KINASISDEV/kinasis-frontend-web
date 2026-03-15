<script setup>
import Header from './Header.vue'
import background1 from '../utils/background1.vue';
import Footer from '../utils/Footer.vue';
</script>

<template>
    <background1 />
    <Header />
    <div class="content">
        <div class="tittle-head">
            <div class="logo_kinasis">
                <img src="/general_assets/logo_white.png" class="logo-light"/>
                <img src="/general_assets/logo_dark.png" class="logo-dark"/>
            </div>
            <h1>KINASIS</h1>
        </div>
    </div>
    <Footer />
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
</style>