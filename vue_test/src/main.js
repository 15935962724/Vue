
import Vue from 'vue';

import App from './App.vue';

//完整引入
//引入 ElementUI组件库
// import ElementUI from 'element-ui';
//引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import { Button,Row,DatePicker } from 'element-ui';



//关闭vue的生产提示
Vue.config.productionTip = false
// Vue.use(ElementUI);

Vue.component('el-button', Button);
Vue.component('el-row', Row);
Vue.component('el-date-picker', DatePicker);

//创建vm
new Vue({
    el:"#app",
    render:h => h(App),
})




