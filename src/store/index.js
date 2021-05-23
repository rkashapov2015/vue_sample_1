import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userId: null,
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
  mutations: {
    clearUserId(state) {
      state.userId = null;
    },
    setUserId(state, userId) {
      state.userId = userId;
    },
  },
  actions: {

  },
  modules: {
    users,
  }
})
