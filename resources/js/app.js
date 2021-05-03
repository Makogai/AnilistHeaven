

// require('./bootstrap');

// window.Vue = require('vue').default;
// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import routes from './Router/routes';
// import { VueSpinners } from '@saeris/vue-spinners'
// import App from "../assets/js/views/App"

// Vue.use(VueSpinners)
// Vue.use(VueRouter);


// const app = new Vue({
//     el: '#app',
//     router: new VueRouter(routes),
//     // components: {App},
//     // store
// });


require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './Router/index';
import store from './Store/index';
import App from './App.vue'

Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    router,
    store,
    components: { App }
});
