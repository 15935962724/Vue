
import Vue from 'vue';

import App from './App.vue';

import {mixin,mixin2} from './mixin';

//引入插件
import plugins from './plugins';

Vue.config.productionTip = false;

// Vue.mixin(mixin)
// Vue.mixin(mixin2)


//应用（使用） 插件
Vue.use(plugins,1,2,3)
//创建vm
new Vue({
    el:"#app",
    render:h => h(App)

})

