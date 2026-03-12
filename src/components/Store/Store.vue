<script setup>
import Header from './Header.vue';
import background2 from '../utils/background2.vue';
</script>

<template>
    <background2 />
    <Header />
    <div class="principal-page">
        <div class="content">
            <div class="head">
                <h1 class="tittle">KxP</h1>
            </div>
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
    height: 100vh;
    color: var(--primary-color);
}

.head .tittle {
    font-size: 3rem;
    font-weight: bold;
    margin: 10px;
    padding: 0;
}
</style>