
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false;

//创建vm
new Vue({
el:"#app",
render:h => h(App)

})

