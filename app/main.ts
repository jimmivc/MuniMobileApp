import Vue from 'nativescript-vue';
import Main from './components/Main.vue';
import LogIn from './components/LogIn.vue';
import store from "./store";
import * as appSettings from "tns-core-modules/application-settings";

import VueDevtools from 'nativescript-vue-devtools';

if(TNS_ENV !== 'production') {
  // Vue.use(VueDevtools);
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

let skipLogIn = appSettings.getBoolean('skipLogin',false);
console.log(skipLogIn);

new Vue({
  store,
  render: h => h('frame',[h(skipLogIn?Main:LogIn)])
}).$start();
