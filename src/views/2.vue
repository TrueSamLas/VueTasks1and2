<script setup>
import { ref } from 'vue'

const isVisible = ref(false)

const show = () => {
    isVisible.value = true
}

const hide = () => {
    isVisible.value = false
}
</script>

<template>
    <div class="main">
        <button @click="show">
            <p>Показать</p>
        </button>
        <button @click="hide">
            <p>Скрыть</p>
        </button>
        <p v-if="isVisible">
            Lorem ipsum dolor sit 
            amet consectetur adipisicing 
            elit. Vel perferendis 
            praesentium corrupti? 
            Facere, repudiandae 
            saepe minima ab veniam 
            eos quod optio exercitationem 
            alias soluta necessitatibus 
            fugit sunt consectetur 
            deserunt animi.
        </p>
    </div>
</template>

<style>
*{
    transition: all 0.5s ease-in-out;
}
</style>