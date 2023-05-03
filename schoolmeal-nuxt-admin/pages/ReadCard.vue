<script>
import coupons_api from '../api/coupons'

export default {
  data() {
    return {
      coupon: "",
      couponDate: "2023-02-06",
      couponType: "breakfast"
    }
  },
  created() {
    addEventListener('copy', (event) => { console.log(event)});
  },
  methods: {
    getCouponByScannedCard() {
      navigator.clipboard.readText().then((clippedText)=>{
        // if ( clippedText == "Coupon") {
        //   this.coupon = "Поръчали сте баница" + clippedText;
        // } else {
        //   this.coupon = "Поръчали сте боза" + clippedText;
        // }
        coupons_api.getCoupon(coupon => {
                    this.coupon = coupon
                }, clippedText == '0000190D04' ? clippedText : 'cardId', this.couponDate, this.couponType)
                // }, clippedText.substring(1, 2) == '0' ? clippedText : 'cardId', this.couponDate, this.couponType)
        // this.coupon = clippedText; 
      })
    }
  },
  name: 'couponsById',
  components: {
    // AccountNavigation,
    // // Sidebar,
    // CardNavigation
},
}

</script>
<template>
  <div id="couponsById">
    По карта 0000190D04 има купони
    <div id="couponId">
      Дата <input type="date" v-model="couponDate"/> 
      <select v-model="couponType">
        <option value="breakfast">закуска</option>
        <option value="lunch">обяд</option>
        <option value="afterlunch">следобяд</option>
      </select>
      <!-- On key press? -->
      <button @click="getCouponByScannedCard()"  @keypress.enter="getCouponByScannedCard()">Купони по карта</button>
      <ul v-if="coupon">
        <li v-for="food in coupon" v-bind:key="food.id">
        {{ food.name }} {{ food.size }} {{ food.size_metric }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 100px;
}

</style>
