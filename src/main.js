import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
import HeroList from './views/heroes/List.vue';
import WeaponList from './views/weapons/List.vue';
import EquipList from './views/equips/List.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    linkExactActiveClass: 'active',
    routes: [
        { path: '/heroes', component: HeroList },
        { path: '/weapons', component: WeaponList },
        { path: '/equips', component: EquipList }
    ]
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})