import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        count: 0,
        loggedIn: false,
        loggedUser: "",
        isAdmin: false,
    },
    mutations:{
        loggedIn(state, payload){
            state.loggedIn = payload;
        },
        loggedUser(state, payload){
            state.loggedUser = payload;
        },
        isAdmin(state, payload){
            state.isAdmin = payload;
        },
    },
    actions: {},
    getters: {
        loggedIn: state => {
          return state.loggedIn
        },
        loggedUser: state => {
          return state.loggedUser
        },
        isAdmin: state => {
          return state.isAdmin
        }
      }
})

export default store;
