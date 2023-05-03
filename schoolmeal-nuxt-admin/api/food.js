/**
 * Mocking client-server processing
 */
const _foods = {
  "леща" : {
    'id' : 1,
    'name' : "леща",
    'рrice' : 2.00,
    'size': 200,
    'size_metric': "gr"
  },
  "боб" : {
    'id' : 2,
    'name' : "боб",
    'рrice' : 2.00,
    'size': 200,
    'size_metric': "gr"
  },
  "таратор" : {
    'id' : 3,
    'name' : "таратор",
    'рrice' : 1.80,
    'size': 200,
    'size_metric': "gr"
  },
  "пиле с картофи" : {
    'id' : 4,
    'name' : "пиле с картофи",
    'price' : 4.50,
    'size': 250,
    'size_metric': "gr"
  }
}

export default {
  getAllFood(cb) {
    if ( !localStorage.foods ) {
        localStorage.foods = JSON.stringify(_foods)
    }
    setTimeout(() => {cb(JSON.parse(localStorage.foods))}, 1000)
  },
  addFood(cb, food) {
    _foods[food.name] = food

    localStorage.foods = JSON.stringify(_foods)
    setTimeout(() => cb(food), 1000)
  },
  addFood(userId, coupons, cb) {
    console.log(userId)
    console.log(coupons)
    setTimeout(() => cb({'orderId':_orderId, 'orderedCoupons':coupons}), 1000)
  }
}
