import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        count: 0,
        loggedIn: false,
    },
    mutations:{
        loggedIn(state, payload){
            state.loggedIn = payload;
        },
    },
    actions: {},
    getters: {
        loggedIn: state => {
          return state.loggedIn
        }
      }
})

export default store;
