<script setup>

const three_args = (arg1, arg2, arg3) => {
    let str = '';
    if (arg1!='None' || arg2!='None' || arg3!='None'){
        str = 'В аргументах есть None'
    }
    if (arg1 && arg2 && arg3){
        str = `Переданы аргументы: var1 = ${arg1}, var2 = ${arg2}, var3 = ${arg3}.`
    } else if(arg1 && arg2 && !arg3) 
    { 
        str = `Переданы аргументы: var1 = ${arg1}, var2 = ${arg2}.`
    } else if( arg1 && !arg2 && !arg3){
        str = `Переданы аргументы: var1 = ${arg1}.` 
    }
    alert(str)
}

</script>

<template>
    <div class="main">
        <h1>Задача с 3-мя аргументами</h1>
        <p>Создайте функцию three_args(), которая принимает 1, 2 или 3 строго ключевых параметра. В результате ее работы на страницу выводятся значения переданных переменных, но только если они не равны None. Например такой вывод: Переданы аргументы: var1 = 2, var3 = 10.</p>
        <br>
        <form action="">
            <label for="var1">Первый аргумент: </label>
            <input type="text" id="var1" name="var1" v-model="var1"/> <br>
            <label for="var2">Второй аргумент: </label> 
            <input type="text" id="var2" name="var2" v-model="var2"/> <br>
            <label for="var3">Третий аргумент: </label>
            <input type="text" id="var3" name="var3" v-model="var3"/> <br>
            <button type="button" @click="three_args(var1, var2, var3)">Рассчитать</button>
        </form>
    </div>
</template>

<style scoped></style>