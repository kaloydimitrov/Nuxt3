<template>
    <img
        v-if="loading"
        src="https://i.imgur.com/JfPpwOA.gif"
      >
    <ul v-else>
    Дата <input type="date" v-model="menuDate"/> 
    

    <!-- <select class="form-control" v-model="selected">
    <option v-for="item in items" :value="item.val" :key="item.id">
     {{ item.val }}
    </option>
  </select> -->
    <select v-model="menuType">
      <option value="breakfast">закуска</option>
      <option value="lunch">обяд</option>
      <option value="afterlunch">следобяд</option>
    </select>
    <select v-model="food">
      <option v-for="food in foods" v-bind:key="food.name">
     {{ food.name }} {{ food.size }} {{ food.size_metric }} - {{ money(food.рrice)}} </option>
    </select>
    <button @click="addFood()">Добави Храна</button>
    
  <br/>
  <ul>
    <li v-for="(menu, day) in menus" :key="day">
        <b>{{ getDayOfWeek(day) }}</b> {{ getMonthYear(day) }}
        <ul v-for="(foodList, menuType)  in menu" :key="menuType">
        <li><b>{{ getMenuType(menuType) }}</b></li>
        <span v-for="(foodContainer, food) in foodList" :key="food.id">
          <button @click="decreaseFood(food, day, menuType)">-</button>
            {{ foodContainer.name }} {{ foodContainer.size }} {{ foodContainer.size_metric }} - {{ money(foodContainer.рrice) }}.
            <br/>
          </span>
        </ul>
      </li>
    </ul>
    <!-- Menu can be full and changed to empty, so save button should be always visible-->
    <!-- <span v-if="this.menus != undefined && Object.keys(this.menus).length > 0 "> -->
    <span>
      <button @click="saveMenu()">Запази</button>
    </span>
    <!-- <img
        v-if="loading"
        src="https://i.imgur.com/JfPpwOA.gif"
      >
    <ul v-else>
        <li v-for="(food, foodName) in foods" :key="foodName">
            <b>{{ foodName }}</b>
            <span>
            &nbsp;-&nbsp;{{ food.price }} лв. {{ food.size }} {{ food.size_metric }}
            </span>
        </li>
    </ul> -->

    <!-- <select class="form-control" v-model="selected">
    <option v-for="item in items" :value="item.val" :key="item.id">
     {{ item.val }}
    </option>
  </select> -->
  </ul>
</template>

<script>
import menu from '../api/menu';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

//TODO:make plugins
const weekday = ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота', 'Неделя']
const month = ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември']
const menuTypeInBG = { 'breakfast': 'Закуска', 'lunch': 'Обяд', 'after_lunch': 'следобедна закуска' }

const digitsRE = /(\d{3})(?=\d)/g
export default {
  data() {
    return {
      loading: false,
      menuType: "breakfast",
      menuDate: "2023-02-06",
      food: undefined,
      menus:  (localStorage.menus) ? JSON.parse(localStorage.menus) : {} 
      // size: undefined,
      // size_metric: undefined
    }
  },
  computed: {
    foods() {
      return this.$store.getters.getFoods
    },
    
  },
  created() {
    this.loading = true
    this.$store.dispatch('loadFoods')
      .then(() => this.loading = false)
  },
  methods: {
    addFood(){
        if ( ! this.menus[this.menuDate] ) {
          this.menus[this.menuDate] = {}
        }

        
        if ( ! this.menus[this.menuDate][this.menuType] ) {
          this.menus[this.menuDate][this.menuType] = {}
        }

        this.menus[this.menuDate][this.menuType][this.food] = this.foods[this.food]
        // this.$store.dispatch('addFood', 
        // {'name': this.name, 'price': this.price, 'size': this.size, 'size_metric': this.size_metric})
    },
    decreaseFood(food, day, menuType) { 
      delete this.menus[day][menuType][food]
      if ( Object.keys(this.menus[day][menuType]).length == 0  ) {
        delete this.menus[day][menuType]
      }
      if ( Object.keys(this.menus[day]).length == 0  ) {
        delete this.menus[day]
      }
    },
    saveMenu() {
      localStorage.menus = JSON.stringify(this.menus)
    },
    getDayOfWeek(day) {
      const date = dayjs(day, 'YYYY-MM-DD')
      return weekday[date.day()  - 1]
    },
    getMonthYear(day) {
      const date = dayjs(day, 'YYYY-MM-DD')
      return date.date() + " " + month[date.month()] + " " + date.year()
    },
    getMenuType(menuType) {
      return menuTypeInBG[menuType]
    },   
    money (value, currency, decimals) {
    value = parseFloat(value)
    if (!isFinite(value) || (!value && value !== 0)) return ''
    currency = currency != null ? currency : 'лв'
    decimals = decimals != null ? decimals : 2
    var stringified = Math.abs(value).toFixed(decimals)
    var _int = decimals
        ? stringified.slice(0, -1 - decimals)
        : stringified
    var i = _int.length % 3
    var head = i > 0
        ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
        : ''
    var _float = decimals
        ? stringified.slice(-1 - decimals)
        : ''
    var sign = value < 0 ? '-' : ''
    return sign  + head +
        _int.slice(i).replace(digitsRE, '$1,') +
        _float + currency
    }
  }
}
</script>

<style scoped>
div {
  text-align: left;
}
table {
  width:100%;
}
td {
  vertical-align: top;
  width:50%;
}

ul {
    text-align: left;
}
</style>
