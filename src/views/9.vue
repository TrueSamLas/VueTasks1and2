<script setup>

import { ref } from 'vue';

let res = ref()

let mrs1 = ref()
let mrs2 = ref()
let mrs3 = ref()

const countStr = () => {
    const str = 'Python - это Питон!';
    let count = 0;

    for (let char of str) {
        count++;
    }

    res.value = count;
}

const summList = () => {
    const arr = [1, '2', 3, 4, '5'];
    let sum = 0;

    for (let item of arr) {
        sum += parseInt(item);
    }

    res.value = sum;
}

const evenNumbers = () => {
    const numbers = new Set([12, 33, 24, 7, 19]);
    let result = [];
    for (let num of numbers) {
        if (num % 2 == 0) {
            result.push(num);
        }
    }

    res.value = result;
}

const calculateSumOfCubes = (limitInput) => {
    const n = parseInt(limitInput);

    if (isNaN(n) || n > 100) {
        alert("Пожалуйста, введите число от 1 до 100.");
        return;
    }

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i ** 3;
    }

    res.value = `Сумма кубов от 1 до ${n}: ${sum}`;
}

const onlyLettersAndNumbers = () => {
    const arr = ['a', '1', 'b', '2', 'c', '3'];
    const letters = [];
    const numbers = [];

    for (let item of arr) {
        if (isNaN(item)) {
            letters.push(item);
        } else {
            numbers.push(item);
        }
    }

    mrs1.value = letters;
    mrs2.value = numbers; 
}

const massiveCounts = () => {
    const arr = [3, 4, 1, 1, 5, 1];
    const totalElements = arr.length;
    let countOnes = 0;
    let firstIndexOne = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            countOnes++;
            if (firstIndexOne === -1) {
                firstIndexOne = i;
            }
        }
    }

    mrs1.value = `Количество всех элементов: ${totalElements}`;
    mrs2.value = `Количество единиц: ${countOnes}`;
    mrs3.value = `Индекс первого вхождения единицы: ${firstIndexOne}`;
}

const massiveSumm = () => {
    const arr = [3, -54, 25, 8, 0];
    let sum = 0;
    let max = arr[0];
    let min = arr[0];

    for (let num of arr) {
        sum += num;
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }

    const difference = max - min;

    mrs1.value = `Сумма элементов: ${sum}`; // -18
    mrs2.value = `Разность максимального и минимального значений: ${difference}`; // 79
}

const massiveSort = () => {
    const arr = [3, 2, 3, 2, 1, 4];
    arr.sort((a, b) => b - a);
    arr.push(arr.length);

    mrs3.value = arr.join(', '); // 4, 3, 3, 2, 2, 1, 6
}

</script>

<template>
    <div class="main">
        <h1>Циклы</h1>
        <div>
            <h2>1</h2>
            <div>
                <p>Посчитайте количество символов в строке 'Python - это Питон!', использовав счетчики на основе циклов
                    for</p>
                <button @click="countStr">Рассчитать</button>
                <p>{{ res }}</p>
            </div>
            <br><br>

            <h2>2</h2>
            <div>
                <p>Найдите сумму всех элементов списка [1, '2', 3, 4, '5'], предварительно приводя строки к целым числам
                </p>
                <button @click="summList">Рассчитать</button>
                <p>{{ res }}</p>
            </div>
            <br><br>

            <h2>3</h2>
            <div>
                <p>Дано множество целых чисел {12, 33, 24, 7, 19}. Выведите на экран только четные числа</p>
                <button @click="evenNumbers">Рассчитать</button>
                <p>{{ res }}</p>
            </div>
            <br><br>

            <h2>4</h2>
            <div>
                <p>Вычислить и вывести на экран сумму кубов натуральных чисел от 1 до n включительно. Верхний предел
                    должен вводиться с клавиатуры и не должен превышать числа 100.</p>
                <input type="number" v-model="n">
                <button @click="calculateSumOfCubes(n)">Рассчитать</button>
                <p>{{ res }}</p>
            </div>
            <br><br>
            <br><br>
        </div>


        <h1>Массивы</h1>
        <div>
            <h2>1</h2>
            <div>
                <p>Дан массив ['a', '1', 'b', '2', 'c', '3']. Разбейте его на два массива: только с буквами и только с числами. Сам массив затем удалите, а новые массивы выведите на экран, каждый на отдельной строке.</p>
                <button @click="onlyLettersAndNumbers">Результат</button>
                <p>{{ mrs1 }} <br> {{ mrs2 }}</p>
            </div>
            <br><br>

            <h2>2</h2>
            <div>
                <p>Дан массив [3, 4, 1, 1, 5, 1]. Выведите на экран: количество всех элементов в массиве, количество единиц в массиве, индекс первого вхождения единицы в массив.</p>
                <button @click="massiveCounts">Результат</button>
                <p>{{ mrs1 }} <br> {{ mrs2 }} <br> {{ mrs3 }}</p>
            </div>
            <br><br>

            <h2>3</h2>
            <div>
                <p>Дан список неповторяющихся целых чисел [3, -54, 25, 8, 0]. Выведите на экран: сумму его элементов, разность максимального и минимального значений. </p>
                <button @click="massiveSumm">Результат</button>
                <p>{{ mrs1 }} <br> {{ mrs2 }}</p>
            </div>
            <br><br>

            <h2>4</h2>
            <div>
                <p>Дан список целых чисел [3, 2, 3, 2, 1, 4]. Расположите числа в порядке убывания их значений, а затем добавьте в конец списка его длину. Выведите измененный список на экран.</p>
                <button @click="massiveSort">Результат</button>
                <p>{{ mrs3 }}</p>
            </div>
            <br><br>
        </div>
    </div>
</template>

<style scoped></style>