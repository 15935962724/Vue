//该文件专门用于创建整个应用的路由器

import VueRouter  from 'vue-router';
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

import Vue from 'vue';

//创建 并 暴露一个路由器
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News,
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            // props的第一种写法，值为对象，该对象中的所有key  value都会已props的形式传给Detail组件
                                // props:{a:1,b:'你好'}
                            // props的第二种写法，值为布尔值，若布尔为真，就会把给路由组件收到的所有params参数，以props的形式传给Detail组件
                                // props:true
                            // props的第三种写法，值为函数
                                // props($route){
                                //     return {id:$route.query.id,title:$route.query.title}
                                // }
                                // props({query}){//接收参数 直接拿到结构赋值
                                //     return {id:query.id,title:query.title}
                                // }
                                props({query:{id,title}}){ //接受参数，结构赋值的连续性，语义化不明确，不推荐此写法
                                    return {id:id,title:title}
                                }
                        }
                    ]
                },
            ]
        }

    ]
})


