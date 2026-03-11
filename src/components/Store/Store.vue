<script setup>
import Header from './Header.vue';
import background2 from '../utils/background2.vue';
</script>

<template>
    <background2 />
    <Header />
    <div class="principal-page">
        <div class="content">
            <h1>Bienvenido a nuestra tienda online</h1>
            <p>Explora nuestra amplia gama de productos y encuentra lo que necesitas.</p>
            <router-link to="/ecommerce">
                <button class="shop-now-button">Comprar Ahora</button>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.principal-page {
    background: transparent;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    color: var(--primary-color);
}
</style>