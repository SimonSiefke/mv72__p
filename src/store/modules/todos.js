import { firebaseAction } from 'vuexfire'
const state = {
  todos: [],
}
const getters = {
  getTodos(state) {
    return state.todos
  },
}

const mutations = {
  addOrder(state, orders) {
    return state.orders.push(orders)
  },
}

const actions = {
  setTodosRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('todos', ref)
  }),
}

export default {
  state,
  mutations,
  getters,
  actions,
}
