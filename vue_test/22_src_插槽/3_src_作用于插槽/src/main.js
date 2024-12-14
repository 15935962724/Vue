
import Vue from 'vue';

import App from './App.vue';

//引入插件
import VueResource from 'vue-resource';

//关闭vue的生产提示
Vue.config.productionTip = false;

//使用插件
Vue.use(VueResource)

//创建vm
new Vue({
    el:"#app",
    render:h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this  //安装全局事件总线
    }


})

