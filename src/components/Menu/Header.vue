<script setup>
import { ref } from 'vue';
import SliderMode from '../utils/SliderMode.vue';

const isActive = ref(false);
</script>

<template>
    <a href="#">
        <h3>Sobre Nosotros</h3>
    </a>
    <a href="#">
        <h3>Tienda en linea</h3>
    </a>
    <a href="#">
        <img src="/general_assets/logo_gh.png"/>
    </a>
    <a href="#">
        <img src="/general_assets/logo_ln.png"/>
    </a>
    <a href="#">
        <h3>Contacto</h3>
    </a>
    <SliderMode />
</template>

<style scoped>
</style>