<!-- # vue_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/). -->

# 笔记

# 脚手架文件结构:址
        |-- node modules
        |--public
        |       favicon.ico:页签图树
                index.html:主页面
        |--Src
            |--assets:存放静态资源
                |-- L1ogo.png
            |--component:存放组件
                |-- Helloworld.vue
            |--App.vue:汇总所有组件
            |--main.js:入口文件
        |--·gitignore:git版本管制忽略的配置babel.config.js:babel的配置文件package.json:应用包配置文件README.md:应用描述文件
        |--package-lock.json:包版本控制文件





# ref属性
        1.被用来给元素或子组件注册引用信息(id的替代者)
        2.应用在htm1标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)
        3.使用方式:
            打标识:<h1 ref="xxx">.....</h1>或<School ref="xxx"></School>
            获取:this.$refs.xxx


# #配置项props
    功能:让组件接收外部传过来的数据
        (1).传递数据:
                <Demo nÃme="xxx"/>
        (2).接收数据:
                第一种方式(只接收):
                    props:['name"]
                第二种方式(限制类型):
                    props:{
                    name : Number
                第三种方式(限制类型、限制必要性、指定默认值):props: {
                    name:f
                    type:String，//类型required:true，//必要性default:'老王’//默认值
    备注:props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。


## mixin(混入)
    功能:可以把多个组件共用的配置提取成一个混入对象
    使用方式:
        第一步定义混合，例如:
            data(){....}methods:{....}
        第二步使用混入，例如:
            (1).全局混入:Vue.mixin(xxx)
            (2).局部混入:mixins:['xxx']



## 插件
        功能:用于增强Vue
        本质:包含insta11方法的一个对象，instal1的第一个参数是vue，第二个以后的参数是插件使用者传递的数据。
        定义插件:
            对象.install=function(Vue,options){
                //1.添加全局过滤器
                Vue.filter(...·)

                //2.添加全局指令
                Vue.directive(....)

                //3.配置全局混入(合)
                Vue.mixin(....)

                //4.添加实例方法
                Vue.prototype.$myMethod =function(){...}
                Vue.prototype.$myProperty =xxxx
            }
                他用插件:Vue.use()

## scoped样式
作用:让样式在局部生效，防止冲突。写法:<style scoped>


## 总结TodoList案例
    1.组件化编码流程:
        (1).拆分静态组件:组件要按照功能点拆分，命名不要与htm1元素冲突。
        (2).实现动态组件:考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用:
            1).一个组件在用:放在组件自身即可。
            2)，一些组件在用:放在他们共同的父组件上(<span style="color:red">状态提升</span>)
    (3).实现交互:从绑定事件开始_

    2.props适用于:
        (1).父组件 ==>子组件 通信
        (2).子组件 ==>父组件 通信(要求父先给子一个函数)
    3.使用v.model时要切记:v-model绑定的值不能是props传过来的值，因为props是不可以修改的!
    4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

## 组件的自定义事件
    1.一种姐件问通信的方式，适用于子组件 ===>父组件
    2.使用场景:A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件(事件的回调在A中)。
    3.绑定自定义事件:
        1.第一种方式，在父组件中:<Demo @atguigu=“test”/>或<Demo v-on:atguigu="test"/>
        2.第二种方式，在父组件中:
        <Deno ref "demo />
        ....
        nounted(){
            this.$rofs.xxx.son('atguigu',this.test
            )
        3.若想让自定义事件只能触发一次，可以使用 once 修饰符，或 $once 方法
    4.触发自定义事件: this.$emit('atsuigu',效据)
    5.解绑自定义事件 this.$off('atguigu')
    6.组件上也可以绑定原生DOM事件，需要使用 native 修饰符
    7.注意:通过 this.$refs.x.$on('atguigu',固调)绑定自定义事件时，回调要么配置在methods中，要么用前头函数，否则this指向会出问题!






## 方法一
    在vue.config.js中添加如下配置:
    devServer :{
        proxy:"http://localhost:5000
    }
    说明:
    1.优点:配置简单，请求资源时直接发给前端(8080)即可。
    2.缺点:不能配置多个代理，不能灵活的控制请求是否走代理，
    3.工作方式:若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器(优先匹配前端资源)
## 方法二
    编写vue.config.js配置具体代理规则:
    // const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave:false  //关闭语法检查
// })


module.exports = {
    devServer: {
      proxy: {
        '/atguigu': {  //匹配所有以 '/atguigu'开头的请求路径 
          target: 'http://localhost:5000',//代理目标的基础路径
          pathRewrite:{'^/atguigu':''},//匹配正则表达式
          ws: true,       //用于支持   websocket
          changeOrigin: true   //用于控制请求头中的host值      
        },
        '/demo': {  //请求前缀
          target: 'http://localhost:5001',//代理目标的基础路径
          pathRewrite:{'^/demo':''},//匹配正则表达式
          ws: true,       //用于支持   websocket
          changeOrigin: true   //用于控制请求头中的host值      
        },
      }
    }
}


    <!-- change0rigin设置为true时，服务器收到的请求头中的host为:1ocalhost:5000
    change0rigin设置为false时，服务器收到的请求头中的host为:localhost:8000
    change0rigin默认值为true -->

    说明:
    1.优点:可以配置多个代理，且可以灵活的控制请求是否走代理
    2.缺点:配置路微繁琐，请求资源时必须加前缀,





## 7.模块化+命名空间
    1.目的:让代码更好维护，让多种数据分类更加明确。
    2.修改 store.js
        const countAbout ={
            namespaced:true,//开启命名空间
            state:{x:1}
            mutations:{...}，
            actions:{...},
            getters:{
                bigSum(state){
                    return state.sum*10
                }
            }
            const personAbout =namespaced:true，//开启命名空间
            state:{ ...}，
            mutations:{..},
            actions:{...}
        }
        const store = new Wuex.Store({modules:
            countAbout,
            personAbout
        }
    
    3.开启命名空间后，组件中读取state数据:
        //方式一:自己直接读取
        this.$store.state.personAbout.list
        //方式二:借助mapstate读取:
        ...mapState('countAbout",['sum','school','subject'])
        4.开启命名空间后，组件中读取getters数据:
        //方式一:自己直接读取
        this.$store.getters!"personAbout/firstPersonlame"//方式二:借助mapGetters读取:
        ...mapGetters("countAbout",['bigSum"])
        5.开启命名空间后，组件中调用dlspatch
        //方式一:自己直接dispatch
        this.$store.dispatch("personAbout/addPersonwang",person)
        //方式二:借助mapActions:
        ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
        6.开启命名空间后，组件中调用commit
        //方式一:自己直接commit
        this.$store.commit(personAbout/ADD_PERSON",person)

## 路由
    1.理解:一个路由(route)就是一组映射关系(yey-value)，多个路由需要路由器(router)进行管理。
    2.前端路由:key是路径，value是组件。
1.基本使用
    1.安装vue-router，命令:npmi vue-router
    2.应用插件:Vue.use(VueRouter)
    3.编写router配置项:
    //号|入VueRouter
    import VueRouter from "vue-router"
    //引入Luyou 组件
    import About from '../components/About'
    import Home from  '../components/Home'
    //创建router实例对象，去管理一组一组的路由规则
    const router = new VueRouter({
    routes:[
        {
            path:"/about",
            component :About
        },
        {
            path:’/home",
            component :Hose
        }
    ]
    })
//暴露router
export default router

4.实现切换(active-class可配置高亮样式)
<router-link active-class= 'active' to="/about">About</router-link>
5.指定展示位置
<router-view></router-view>



2.几个注意点
    1.路由组件通常存放在 pages一般组件通常存放在 coeponents 文件夹,
    2.通过切换，"隐藏 了的路由组件，默认是被销毁掉的，需要的时候再去挂载
    3.每个组件都有自己的 $route 属性，里面存储着自己的路由信息,
    4.整个应用只有一个router，可以通过组件的 $router 属性获取到。

4.路由的query参数
    1.传递参数
        <!--跳转并携带query参数，to的字符串写法-->
        <router-link :to="/home/message/detail?id=666&tit1e=你好">跳转</router-link>
        <!--跳转并携带query参数，to的对象写法-->
        <router-link
        :to="{
        path:"/home/message/detail"
        query:f
        id:666,
        title:"你好"
        >跌转</router-link>
    2. 接收参数:
        $route.query.id
        $route.query.title+



5.命名路由
    1.作用:可以简化路由的跳转。
    2.如何使用
        1.给路由命名:
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
                            name:'xiangqing',//给路由命名
                            path:'detail',
                            component:Detail
                        }
                    ]
                },
            ]
        }
        2.简化跳转:
            <1--简化前，需要写完整的路径-->
            <router-link to="/demo/test/welcome">跳转</router-link>
            <!--简化后，直接通过名字跳转 -->
            <router-link :to="{name:'hello'}">跌转</router-link>
            <!--  简化写法配合传递参数  -->
            <router-link :to="{
                    name:'xiangqing',   
                    query:{
                        id:message.id,
                        title:message.title
                    }
                }">跳转</router-link> >


6.路由的params参数
    1.配置路由，声明接收params参数
        {
            path:"/home",
            component :Home,
            children:[
                path:"news",
                component :News
                children:[
                    {
                        name:"xiangqing",
                        path:'detai1/:id/:title"，//使用占位符声明按收params参数
                        component:Detail
                    }

                ]
            }
        }
    2.传递参数
        <!--跳转并携带params参数，to的字符串写法-->
        <router-link :to="/home/message/detail/666/你好">跌转</router-link>
        <!--跳转并携带params参数，to的对象写法-->
        <router-link
        :to="{
                name:"xiangging ,
                params:{
                    id:666,
                    title:"你好
                }
        }
        >跳转</router-link>
        特别注意:路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置!
    3.接收参数:
        $route.params.id
        $route.params.title


7.路由的props配置作用:让路由组件更方便的收到参数
    name:"xiangqing 
    path:"detail/:id"
    component :Detail.
    //第一种写法:props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detai1组件// props:{a:980}
    //第二种写法:props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detai1组件// props:true
    //第三种写法:props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detai1组件props(route){return
    id:route.query.id,
    title:route.query.title}

8.<router-link>的replace属性
    1.作用:控制路由跳转时操作浏览器历史记录的模式
    2.浏览器的历史记录有两种写入方式:分别为push和 replace，push 是追加历史记录，replace 是替换当前记录。路由跳转时候默认为 push
    3.如何开启replace模式:<router-link replace.......>News</router-link>

9.编程式路由导航
    1.作用:不借助<router-1ink>实现路由跳转，让路由跳转更加灵活
    2.具体编码:
        //$router的两个API
        this.$router.push({
            name:xiangqing
            params:
            id:xxx,
            title:xxx
        })
        this.$router.replace(
            name:"xiangqing",
            params :
            id:xxx,
            title:xxx
        })

            this.$router.back()  //前进
            this.$router.forward()  //后退
            this.$router.go(2)   //可前进也可后退
10.缓存路由组件
    1.作用:让不展示的路由组件保持挂载，不被销毁，
    2.具体编码:
    <keep alive include="News">
    <router-view>
        </router-view>
    </keep-alive>


11.两个新的生命周期钩子
    1.作用:路由组件所独有的两个钩子，用于捕获路由组件的激活状态
    2.具体名字:
        1.activated 路由组件被激活时触发
        2.deactivated 絡由组件失活时触发,    

12.路由守卫
    1.作用:对路由进行权限控制
    2.分类:全局守卫、独享守卫、组件内守卫
    3.全局守卫:
        //全局前置守卫:初始化时执行、每次路由切换前执行
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

    4.//全局后置守卫:初始化时执行、每次路由切换后执行

        router.afterEach((to,from,next)=>{
            console.log('后置路由守卫',to,from,next)
                document.title = to.meta.title || '硅谷系统'
            
        })


    5.组件内守卫:
        //进入字卫:通过路由规则，进入该组件时被调用
        beforeRouteEnter(to,from,next){} 
        //离开守卫:通过路由规则，离开该组件时被调用
        beforeRouteLeave(to,from,next){}


13.路由器的两种工作模式
    1.对于一个ur来说，什么是has值?--#及其后面的内容就是hash值，
    2.hash值不会包含在 HTTP 请求中，即:hash值不会带给服务器,
    3.hash模式:
        1.地址中永远带着#号，不美观。
        2.若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。
        3.兼容性较好.
    4.history模式:
        1.地址干净，美观。
        2.兼容性和hash模式相比略差
        3.应用部署上线时需要后端人员支持，解决剧新页面服务端404的问题,   