import HeroList from '../views/heroes/List.vue';
import Vue from 'vue';
import WeaponList from '../views/weapons/List.vue';
import EquipList from '../views/equips/List.vue';
import VueRouter from 'vue-router';
import HeroAdd from '../views/heroes/Add.vue';
import HeroEdit from '../views/heroes/Edit.vue';
Vue.use(VueRouter);
const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        { path: '/', redirect: '/heroes' },
        { path: '/heroes', component: HeroList },
        { path: '/weapons', component: WeaponList },
        { path: '/equips', component: EquipList },
        { path: '/heroes/add', component: HeroAdd },
        { path: '/heroes/edit/:id', component: HeroEdit, props: true }
    ]
});
export default router;
