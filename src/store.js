import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(VueAxios, axios);
export default new Vuex.Store({
  state: {
    phones: [],
  },
  mutations: {
    GET_DATA(state, res) {
      if (state.phones.length === 0) {
        for (let i = 0; i < res.data.phones.length; i += 1) {
          state.phones.push(res.data.phones[i]);
        }
      }
    },
    REMOVE_PHONE(state, index) {
      state.phones.splice(index, 1);
    },
  },
  actions: {
    getData({ commit }) {
      axios.get('https://output.jsbin.com/fotokir.json')
        .then((res) => {
          commit('GET_DATA', res);
        });
    },
    removePhone({ commit }, index) {
      commit('REMOVE_PHONE', index);
    },
  },
  getters: {
    phones: state => state.phones,
  },
});
