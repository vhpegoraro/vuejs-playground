import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Page from './../pages/Page.vue';

import { routes } from './routes';
import DirectivesLoader from './../directives/directives-loader';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

DirectivesLoader.load(Vue);

Vue.component('app-page', Page);

new Vue({
  el: '#app',
  router,
  render: createElement => createElement(App)
});
