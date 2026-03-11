<script>
import Background1 from '../utils/background1.vue'
</script>

<template>
    <Background1 />
    <div class="content">
        <h1>Contacto</h1>
        <p>Para consultas, colaboraciones o cualquier otra información, no dudes en contactarnos a través de los siguientes medios:</p>
    </div>
</template>

<style scoped>
.content {
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: calc(100vh - 60px);
    position: relative;
    z-index: 1;
}
</style>