import { firebaseAction } from 'vuexfire'
const state = {
  orders: []
}
const getters = {
  numberOfOrders(state) {
    return state.orders.length
  },
  getOrders(state) {
    return state.orders
  }
}

const mutations = {
  addOrder(state, orders) {
    return state.orders.push(orders)
  }
}

const actions = {
  setOrdersRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('orders', ref)
  })
}

export default {
  state,
  mutations,
  getters,
  actions
}
