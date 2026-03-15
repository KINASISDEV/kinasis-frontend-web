<script setup>
import Header from './Header.vue';
import background2 from '../utils/background2.vue';
import filters from './assets/filters.vue';
import Footer from '../utils/Footer.vue';
</script>

<template>
    <background2 />
    <Header />
    <div class="principal-page">
        <div class="content">
            <div class="head">
                <h1 class="tittle">KxP</h1>
                <filters />
            </div>
        </div>
    </div>
    <Footer />
</template>

<style scoped>
.principal-page {
    background: transparent;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: var(--primary-color);
}

.content {
    display: flex;
    align-items: flex-start;
    position: sticky;
    top: 0;
}

.head {
    border-right: 1px solid var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
    width: 15%;
    height: 100%;
    align-items: center;
    text-align: center;
}

.head .tittle {
    font-size: 3rem;
    font-weight: bold;
    margin: 10px;
    padding: 0;
}
</style>