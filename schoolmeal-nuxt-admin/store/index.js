import food_api from '../api/food'


export default createStore({
    state: {
        foods: undefined,
    },
    mutations: {
        setFoods(state, foods) {
          state.foods = foods;
        },
        addFood(state, food) {
          state.foods[food.name] = food;
        },
    },
    getters: {
        getFoods(state) {
            return state.foods
        },
    },
    actions: {
        loadFoods({commit}) {
            return new Promise((resolve, reject) => {
                food_api.getAllFood(foods => {
                    commit('setFoods', foods)
                    resolve()
                })
            })
        },
        addFood({ commit }, payload) {
            return new Promise((resolve, reject) => {
              food_api.addFood((food) => {
                commit('addFood', food);
                resolve();
              }, payload);
            });
          }
    }
})
