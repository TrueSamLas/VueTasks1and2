<script setup>

import { ref } from 'vue';

let res = ref()

const findMultiples = (x, range) => {
    let result = []
    for (let i = 1; i <= range; i++) {
        if (i % x == 0) {
            result.push(i)
        }
    }
    res.value = result
}

</script>

<template>
    <div class="main">
        <h1>Задача с кратным числом</h1>
        <p>
            Напишите функцию multiple(x), которая
            выводит все числа кратный x. X – задаётся
            пользователем.
        </p>
        <br>
        <label for="numberInput">Введите число: </label>
        <input type="number" id="numberInput" v-model="x"><br><br>
        <label for="rangeInput">Введите диапазон (от 1 до N): </label>
        <input type="number" id="rangeInput" v-model="range"><br><br>
        <button @click="findMultiples(x, range)">Найти кратные</button><br><br>
        <p>Числа кратные {{ x }}: {{ res }}</p>
    </div>
</template>

<style scoped></style>