/**
 * Mocking client-server processing
 */
const _coupons = {
  "0000190D04|2023-02-06|lunch" : [{
    'id' : 1,
    'name' : "боб",
    'рrice' : 2.00,
    'size': 200,
    'size_metric': "gr"
  }],
  "0000190D04|2023-02-06|breakfast" : [{
    'id' : 1,
    'name' : "чай",
    'рrice' : 1.00,
    'size': 200,
    'size_metric': "ml"
  }, {
    'id' : 2,
    'name' : "банан",
    'рrice' : 1.00,
    'size': 1,
    'size_metric': "br"
  }],
  "0000190D04|2023-02-06|afterlunch" : [{
    'id' : 1,
    'name' : "бисквитена торта",
    'рrice' : 1.80,
    'size': 100,
    'size_metric': "gr"
  }],
    "cardId|2023-02-06|lunch" : [{
      'id' : 1,
      'name' : "леща",
      'рrice' : 2.00,
      'size': 200,
      'size_metric': "gr"
    }],
    "cardId|2023-02-06|breakfast" : [{
      'id' : 1,
      'name' : "чай",
      'рrice' : 1.00,
      'size': 200,
      'size_metric': "ml"
    }, {
      'id' : 2,
      'name' : "ябълка",
      'рrice' : 1.00,
      'size': 1,
      'size_metric': "br"
    }],
    "cardId|2023-02-06|afterlunch" : [{
      'id' : 1,
      'name' : "бретцел",
      'рrice' : 1.80,
      'size': 100,
      'size_metric': "gr"
    }],
  }
  
export default {
  getCoupon(cb, card, date, couponType) {
    setTimeout(() => {cb(_coupons[`${card}|${date}|${couponType}`])}, 100)
  },
}
