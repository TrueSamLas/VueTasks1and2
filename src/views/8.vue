<script setup>

import { ref } from 'vue';

const items = ref([1, 2, 3, 4, 5]);
const items2 = ref([1, 2, 3]);
const items3 = ref([1, -2, 3, -4, 5]);
const arr = ref(['x', 'y', 'z'])
const obj = ref({
    user1: '100$',
    user2: '200$',
    user3: '300$',
})
const hrefs = ref([
    { href: '1.html', text: 'text1' },
    { href: '2.html', text: 'text2' },
    { href: '3.html', text: 'text3' },
])
const products = ref([
    {
        name: 'product1',
        price: 100,
        quantity: 5
    },
    {
        name: 'product2',
        price: 200,
        quantity: 4
    },
    {
        name: 'product3',
        price: 300,
        quantity: 3
    },
])
const products2 = ref([
    {
        id: 1,
        name: 'product1',
    },
    {
        id: 2,
        name: 'product2',
    },
    {
        id: 3,
        name: 'product3',
    },
])


const addItem = () => {
    items.value.push(items.value.length + 1);
};

const removeFirstItem = () => {
    items.value.shift();
};

const removeLastItem = () => {
    items.value.pop();
};

const removePenultimateItem = () => {
    if (items.value.length > 1) {
        items.value.splice(items.value.length - 2, 1);
    }
};

const sortItems = () => {
    items.value.sort((a, b) => a - b);
};

const reverseItems = () => {
    items.value.reverse();
};



</script>

<template>
    <div class="main">
        <h1>Перебор массивов в Vue</h1>

        <h2>№1</h2>
        <div>
            <div v-for="item in items">{{ item }}</div>
        </div>
        <br><br>

        <h2>№2</h2>
        <div>
            <div v-for="item in items">{{ item ** 2 }}</div>
        </div>
        <br><br>

        <h2>№3</h2>
        <div>
            <ul>
                <li v-for="item in items">{{ item }}</li>
            </ul>
        </div>
        <br><br>

        <h1>Получение ключей при переборе массивов в Vue</h1>
        <h2>№1</h2>
        <div>
            <ul>
                <li v-for="(ar, index) in arr">{{ index }}</li>
            </ul>
        </div>
        <br><br>

        <h1>Перебор объектов в Vue</h1>
        <h2>№1</h2>
        <div>
            <ul>
                <li v-for="(value, key) in obj">{{ value }}</li>
            </ul>
        </div>
        <br><br>

        <h2>№2</h2>
        <div>
            <ul>
                <li v-for="(value, key) in obj">{{ key }} - {{ value }}</li>
            </ul>
        </div>
        <br><br>

        <h2>№3</h2>
        <div>
            <ul>
                <li v-for="(value, key, index) in obj">{{ key }} - {{ value }} - {{ index }}</li>
            </ul>
        </div>
        <br><br>

        <h2>№4</h2>
        <div>
            <ul>
                <li v-for="(value, key, index) in obj">{{ key }} - {{ value }} - {{ index + 1 }}</li>
            </ul>
        </div>
        <br><br>

        <h1>Перебор группы тегов в Vue</h1>
        <h2>№1</h2>
        <div>
            <div v-for="item in items2">
                <p>{{ item }}</p>
                <p class="divider"></p>
            </div>
        </div>
        <br><br>

        <h2>№2</h2>
        <div>
            <ul>
                <li v-for="(item, index) in items2" :key="index">
                    {{ item }}
                <li v-if="index < items.length - 1" class="divider"></li>
                </li>

            </ul>
        </div>
        <br><br>

        <h1>Перебор массива объектов в Vue</h1>
        <h2>№1</h2>
        <div>
            <ul>
                <li v-for="item in hrefs">
                    <a :href="item.href">{{ item.text }}</a>
                </li>
            </ul>
        </div>
        <br><br>

        <h2>№2</h2>
        <div>
            <table>
                <tr v-for="item in products">
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.quantity }}</td>
                </tr>
            </table>
        </div>
        <br><br>

        <h1>Цикл в диапазоне в Vue</h1>
        <div>
            <p v-for="i in 30">
                <span v-for="j in 10"> {{ j }}</span>
            </p>
        </div>
        <br><br>

        <h1>Условия в циклах в Vue</h1>
        <div>
            <p v-for="i in items3">
                <span v-if="i > 0">{{ i }}</span>
            </p>
        </div>
        <br><br>

        <h1>Атрибут key в Vue</h1>
        <div>
            <ul>
                <li v-for="item in products2">
                    {{ item.name }}
                </li>
            </ul>
        </div>
        <br><br>

        <h1>Реактивность массивов в Vue</h1>
        <div>
            <ul>
                <li v-for="(item, index) in items" :key="index">{{ item }}</li>
            </ul>
            <br>
            <button @click="addItem">Добавить пункт</button><br>
            <button @click="removeFirstItem">Удалить первый пункт</button><br>
            <button @click="removeLastItem">Удалить последний пункт</button><br>
            <button @click="removePenultimateItem">Удалить предпоследний пункт</button><br>
            <button @click="sortItems">Сортировать пункты</button><br>
            <button @click="reverseItems">Выстроить в обратном порядке</button><br>
        </div>
        <br>
        <br>
    </div>
</template>

<style scoped></style>