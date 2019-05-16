import Vue from 'nativescript-vue';
import Main from './views/Main.vue';
import LogIn from './views/LogIn.vue';
import store from "./store";
import * as appSettings from "tns-core-modules/application-settings";
require('nativescript-platform-css');
import DateTimePicker from 'nativescript-datetimepicker/vue'

import VueDevtools from 'nativescript-vue-devtools';
import CreateEvent from "./views/CreateEvent.vue";


if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
Vue.use(DateTimePicker);

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

let skipLogIn = appSettings.getBoolean('skipLogin',false);
console.log(skipLogIn);

new Vue({
  store,
  // render: h => h('frame',[h(skipLogIn?Main:LogIn)])
  render: h => h('frame',[h(CreateEvent)])
}).$start();
