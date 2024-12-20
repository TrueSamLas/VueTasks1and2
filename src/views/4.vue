<script setup>

import { ref } from 'vue';

let result = ref(0)

const sum_range = (start, end) => {
    if (start > end) {
        [start, end] = [end, start]
    }
    let sum = 0
    for (let i = start; i <= end; i++) {
        sum += i
    }
    result.value = sum
}

</script>

<template>
    <div class="main">
        <h1>Задача с функцией суммирования</h1>
        <p>
            Напишите функцию sum_range(start, end), которая суммирует все целые числа от значения start до величины end
            включительно. Если пользователь задаст первое число большее чем второе, просто поменяйте их местами.
        </p>
        <br>
        <form action="">
            <label for="start">Введите значение от: </label> 
            <input type="number" id="start" name="start" v-model="start" /> <br>
            <label for="end">Введите значение до: </label>
            <input type="number" id="end" name="end" v-model="end" />
            <button type="submit" @click.prevent="sum_range(start, end)">Рассчитать</button>
        </form>
        <p>Результат: {{ result }}</p>
    </div>
</template>

<style scoped></style>