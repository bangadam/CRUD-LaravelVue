require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from "vue-axios";
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App';

import HomeComponent from "./HomeComponent";
import CreateComponent from "./CreateComponent";
import IndexComponent from "./IndexComponent";
import EditComponent from "./EditComponent";

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomeComponent
    },
    {
        name: 'create',
        path: '/create',
        component: CreateComponent
    },
    {
        name: 'posts',
        path: '/posts',
        component: IndexComponent
    },
    {
        name: 'edit',
        path: '/:id/edit',
        component: EditComponent
    },

];

const router = new VueRouter({mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({router}, App)).$mount('#app');

