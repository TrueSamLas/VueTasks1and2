<script setup>

import { ref } from 'vue';

let res = ref()

const findHypotenuse = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number' || a <= 0 || b <= 0) {
        res.value = -1;
        return;
    }
    const hypotenuse = Math.sqrt(a * a + b * b);
    res.value = Math.round(hypotenuse * 100) / 100;
}

</script>

<template>
    <div class="main">
        <h1>Задача нахождением гипотенузы</h1>
        <p>
            Напишите функцию для определения длины
            гипотенузы прямоугольного треугольника
            с помощью теоремы Пифагора. В качестве
            аргументов функция должна принимать длины
            катетов в виде двух положительных чисел.
            Возвращаемым значением должна быть длина
            гипотенузы, округленная с точностью до сотых.
            В случае передачи аргументов недопустимого типа
            или диапазона функция должна возвращать -1.
            Выведите на экран результаты вызовов функции
            для положительных и отрицательных значений
            аргументов.
        </p>
        <br>
        <label for="numberInput">Введите 1-й катет: </label>
        <input type="number" id="numberInput" v-model="catheter1"><br><br>
        <label for="rangeInput">Введите 2-й катет:  </label>
        <input type="number" id="rangeInput" v-model="catheter2"><br><br>
        <button @click="findHypotenuse(catheter1, catheter2)">Найти гипотенузу</button><br><br>
        <p>Гипотенуза равна: {{ res }}</p>
    </div>
</template>

<style scoped></style>