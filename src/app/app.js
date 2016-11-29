import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';

import App from './App.vue';
import Page from './../pages/Page.vue';

import messagesPtBr from './../i18n/vee-validate.pt_BR';

import { routes } from './routes';
import DirectivesLoader from './../directives/directives-loader';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

DirectivesLoader.load(Vue);

Vue.component('app-page', Page);

Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: messagesPtBr
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: createElement => createElement(App)
});
