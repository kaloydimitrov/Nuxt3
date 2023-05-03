<template>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
    <ul v-else>
        <li v-for="(food, foodName) in foods" :key="foodName">
            <b>{{ foodName }}</b>
            <span>
                &nbsp;-&nbsp;{{ food.price }} лв. {{ food.size }} {{ food.size_metric }}
            </span>
        </li>

    Име <input v-model="foodName" />
    Цена <input v-model="price" @keypress="isNumber($event)" />
    Кол.<input v-model="size" @keypress="isNumber($event)" />
    &nbsp;
    <!-- <select class="form-control" v-model="selected">
    <option v-for="item in items" :value="item.val" :key="item.id">
     {{ item.val }}
    </option>
  </select> -->

    <select v-model="size_metric">
        <option>gr</option>
        <option>ml</option>
        <option>br</option>
    </select>
    <br />
    <button @click="addFood()">Добави Храна</button>
    <br />
</ul>
</template>

<script>
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

//TODO:make plugins
const weekday = ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота', 'Неделя']
const month = ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември']
const couponTypeInBG = { 'breakfast': 'Закуска', 'lunch': 'Обяд', 'after_lunch': 'следобедна закуска' }

const digitsRE = /(\d{3})(?=\d)/g
export default {    
    data() {
        return {
            loading: false,
            foodName: undefined,
            price: undefined,
            size: undefined,
            size_metric: undefined
        }
    },
    computed: {
        foods() {
            return this.$store.getters.getFoods
        }
    },
    created() {
        this.loading = true
        this.$store.dispatch('loadFoods')
            .then(() => this.loading = false)
    },
    methods: {
        addFood() {
            this.$store.dispatch('addFood',
                { 'name': this.foodName, 'price': this.price, 'size': this.size, 'size_metric': this.size_metric })
        },
        isNumber: function (evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();;
            } else {
                return true;
            }
        }
    },
}
</script>

<style scoped>
div {
    text-align: left;
}

table {
    width: 100%;
}

td {
    vertical-align: top;
    width: 50%;
}

ul {
    text-align: left;
}
</style>
