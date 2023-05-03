/**
 * Mocking client-server processing
 */
const _couponOptions = {
    "09/01/2023" : {
      "breakfast" : {
        "id": 1,
        "food": [{ "id": 11, "name": "Кроасан с масло", "price": 2.50, "size": 100, "size_metric": "gr" },
        { "id": 12, "name": "Банан", "price": 1.10, "size": 90, "size_metric": "gr" },
        { "id": 13, "name": "Чай", "price": 1.00, "size": 200, "size_metric": "ml" }
        ],
        "date": "09/01/2023",
        "type": "breakfast"
      },
      "lunch" : {
        "id": 2,
        "food": [{ "id": 21, "name": "Супа топчета", "price": 3.50, "size": 200, "size_metric": "ml" },
        { "id": 22, "name": "Пиле с картофи", "price": 5.50, "size": 250, "size_metric": "ml" },
        { "id": 23, "name": "Съомга с грах", "price": 8.50, "size": 280, "size_metric": "ml" },
        { "id": 24, "name": "Боб супа", "price": 2.50, "size": 200, "size_metric": "ml" },
        ],
        "date": "09/01/2023",
        "type": "lunch"
      }
    },
    "10/01/2023" : {
      "breakfast" : {
        "id": 3,
        "food": [{ "id": 11, "name": "Кроасан с масло", "price": 2.50, "size": 100, "size_metric": "gr" },
        { "id": 12, "name": "Банан", "price": 1.10, "size": 90, "size_metric": "gr" },
        { "id": 13, "name": "Чай", "price": 1.00, "size": 200, "size_metric": "ml" }
        ],
        "date": "10/01/2023",
        "type": "breakfast"
      },
      "lunch" : {
        "id": 4,
        "food": [{ "id": 21, "name": "Картофена супа", "price": 3.50, "size": 200, "size_metric": "ml" },
        { "id": 22, "name": "Пиле със зеле", "price": 5.50, "size": 250, "size_metric": "ml" },
        { "id": 23, "name": "Съомга с печени картофи", "price": 8.50, "size": 280, "size_metric": "ml" },
        { "id": 24, "name": "Боб яхния", "price": 2.50, "size": 200, "size_metric": "ml" },
        ],
        "date": "10/01/2023",
        "type": "lunch"
      }
    }
  }
  
export default {
  getCouponOptions(cb) {
    setTimeout(() => {cb(_couponOptions)}, 1000)
  },
}
