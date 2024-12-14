
import Vue from 'vue';

import App from './App.vue';

//引入VueResource插件
import VueResource from 'vue-resource';

//引入vuex 插件
import Vuex from 'vuex';

//引入store插件 
import store from './store/index.js';

//默认引入store文件夹下的index.js 如果没有index.js就报错,建议写全,因为不写全，我的电脑回报错
// import store from './store';

//关闭vue的生产提示
Vue.config.productionTip = false;

//使用插件
Vue.use(VueResource)

//创建vm
new Vue({
    el:"#app",
    render:h => h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus = this  //安装全局事件总线
    }


})

