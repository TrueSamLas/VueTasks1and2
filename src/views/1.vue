<script setup>
import { ref } from 'vue'

const vs = ref(false)

const toggle = () => {
    vs.value = !vs.value
}
</script>

<template>
    <div class="main">
        <button @click="toggle">
            <p v-if="vs">Скрыть</p>
            <p v-else>Показать</p>
        </button>
        <p v-if="vs">
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

<style scoped>
/* Ваши стили здесь */
</style>