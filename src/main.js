import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
import router from './routers';
import Myhttp from './plugins/MyHttp';
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:3001/';
Vue.prototype.$http = axios;
new Vue({
    el: '#app',
    render: h => h(App),
    router
})
