const state = {
  currentUser: null
}
const getters = {
  currentUser(state) {
    return state.currentUser
  }
}

const mutations = {
  userStatus(state, user) {
    if (user) {
      state.currentUser = user.email
    } else {
      state.currentUser = null
    }
  }
}

const actions = {
  setUser({ commit }, user) {
    return commit('userStatus', user)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
