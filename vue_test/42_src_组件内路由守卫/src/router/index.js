//该文件专门用于创建整个应用的路由器

import VueRouter  from 'vue-router';
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Detail from '../pages/Detail.vue'

import Vue from 'vue'
//创建 并 暴露一个路由器
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'关于',isAuth:true}
            
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页',isAuth:true},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{
                        title:'新闻',
                        isAuth:true
                    },
                    //独享路由只有前置路由守卫，没有后置路由守卫
                    /* beforeEnter:(to,from,next)=>{  //组件内路由守卫
                        console.log('前置路由守卫',to,from)
                        //此处配置可用path  也可用name
                        if(to.meta.isAuth){  //判断是否需要鉴权
                            if(localStorage.getItem('school') === 'atguigu'){
                                    next()//放行
                                }else{
                                    alert('学校名不对，无权限查看!')
                                }
                        }else{
                            next()
                        }
                
                    }, */
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{
                        title:'消息',
                        isAuth:true
                    },
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            meta:{
                                title:'详情',
                                isAuth:true
                            },
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

//加一个路由守卫   在每一次路由切换之前都会帮你调用一个函数
//全局前置路由守卫-- 初始化的时候被调用，每次路由切换之前被调用
/*
router.beforeEach((to,from,next)=>{
        console.log('前置路由守卫',to,from)
        // document.title = to.meta.title || '硅谷系统'
        // if(localStorage.getItem('school') === 'atguigu'){
        //     next()//放行
        // }
        //此处配置可用path  也可用name
        if(to.meta.isAuth){  //判断是否需要鉴权
            if(localStorage.getItem('school') === 'atguigu'){
                    next()//放行
                }else{
                    alert('学校名不对，无权限查看!')
                }
        }else{
            next()
        }


    })

*/

//加一个路由守卫   在每一次路由切换之前都会帮你调用一个函数
//全局后置路由守卫-- 初始化的时候被调用，每次路由切换之后被调用
/* router.afterEach((to,from,next)=>{
        console.log('后置路由守卫',to,from,next)
        document.title = to.meta.title || '硅谷系统'
    
})
 */
export default router

