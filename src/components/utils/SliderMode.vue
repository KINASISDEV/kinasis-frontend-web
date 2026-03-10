<script setup>
import { ref } from 'vue';

const isActive = ref(false);
</script>

<template>
    <div class="toggle-switch">
        <input type="checkbox" id="toggle" class="toggle-input" v-model="isActive" />
        <label for="toggle" class="toggle-label"></label>
    </div>
</template>

<style scoped>
.toggle-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
}

.toggle-input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-label {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 24px;
}

.toggle-label::before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
}

.toggle-input:checked + .toggle-label {
    background-color: #2196F3;
}

.toggle-input:checked + .toggle-label::before {
    transform: translateX(26px);
}

.toggle-input:focus + .toggle-label {
    box-shadow: 0 0 1px #2196F3;
}
</style>