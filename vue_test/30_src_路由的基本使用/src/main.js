
import Vue from 'vue';

import App from './App.vue';

//引用Router插件
import VueRouter from 'vue-router';

import router from './router';


//关闭vue的生产提示
Vue.config.productionTip = false

Vue.use(VueRouter)


//创建vm
new Vue({
    el:"#app",
    render:h => h(App),
    router:router
})




