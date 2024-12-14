# vue3_test

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
See [Configuration Reference](https://cli.vuejs.org/config/).



1.拉开序幕的setup
    1.理解:Vue3.0中一个新的配置项，值为一个函数。
    2.setup是所有Composition API(组合API)“表演的舞台”。
    3.组件中所用到的:数据、方法等等，均要配置在setup中
    4.setup函数的两种返回值:
        1.若返回一个对象，则对象中的属性、方法,在模板中均可以直接使用。(重点关注!)
        2.若返回一个渲染函数:则可以自定义渲染内容。(了解)
    5.注意点:
        1.尽量不要与业ue2.x配置混用
            .Vue2.x配置(data、methos、computed..)中可以访问到setup中的属性、方法。
            .但在setup中不能访问到Vue2.x配置(data、methos、computed...)。
            .如果有重名，setup优先
        2.setup不能是一个async函数，因为返回值不再是retum的对象,而是promise,模板看不到retum对象中的属性。(后期也可以返回一个Promise实例，但需要Supense和异步组件的配合)
2.ref函数
    作用: 定义响应式的数据
    语法:const xxx=ref(initValue)
        创建一个包含响应式数据的引用对象(reference对象,简称ref对象)
        JS中操作数据:xxx.value
        模板中读取数据: 不需要.value，直接:<div>{{xxxx}}</div>
    备注:
        接收的数据可以是:基本类型、也可以是对象类型。
        基本类型的数据:响应式依然是靠 object.defineProperty()的get与 set 完成的。
        对象类型的数据:内部 "求助" 了Vue3.0中的一个新函数-- reactive 函数。    

3.reactive函数
    作用:定义一个对象类型的响应式数据(基本类型不要用它，要用ref函数)
    语法:const代理对象=reactive(源对象)接收一个对象(或数组)，返回一个代理对象(Proxy的实例对象，简称proxy对象)
    reactive定义的响应式数据是“深层次的"。
    内部基于 ES6 的,Proxy 实现，通过代理对象操作源对象内部数据进行操作。

4.Vue3.0中的响应式原理
    vue2.x的响应式
    .实现原理:
         象类型:通过 0bject.defineProperty()对属性的读取、修改进行拦截(数据劫持)
         数组类型:通过重写更新数组的一系列方法来实现拦载。(对数组的变更方法进行了包裹)。
         Object.defineProperty(data,"count",{
            get(){}，
            set(){}
            })
    存在问题:
        。新增属性、删除属性,界面不会更新
        。直接通过下标修改数组，界面不会自动更新，

Vue3.0的响应式
    实现原理:
        .通过Proxy(代理):拦截对象中任意属性的变化,包括:属性值的读写、属性的添加、属性的制除等。
        .通过Refect(反射):对被代理对象的属性进行操作。
        .MDN文档中描述的Proxy与Reflect:
            .Proxy: https:/ldeveloper.mozila.org/zh.CNidocs/Web/JavaScriptReference/Global Objects/Proxy
            .Reflect: https://developer.mozila.org!zh-CNdocs/Web/avaScriptReference/Global Objects/Reflect
            new Proxy(data,{
                    // 拦截读取属性值
                    get(target, prop){
                        return Reflect.get(target,prop)
                    },
                    //拦截设置属性值或添加新属性
                    set(target,prop,value){
                        return Reflect.set(target,prop,value)
                    }
                    //拦截删除属性
                    deleteProperty(target,prop){
                        return Reflect.deleteProperty(target,prop)
                    }
                })
                proxy.name = 'tom'
                
7 计算属性与监视
    1.computed函数
        .与Vue2.x中computed配置功能一致
        .写法
   import { computed } from 'vue';
    setup() {
        ...
      //计算属性----简写(没有烤炉计算属性被修改的情况)
      // person.fullName = computed(()=>{
      //   //函数体
      //   return person.firstName + "-"  + person.lastName
      // })
      //计算属性----完整写法(考虑读和写)
      person.fullName = computed({
          get(){
            return person.firstName + "-"  + person.lastName
          },
          set(value){
            const nameArr = value.split('-')
            person.firstName = nameArr[0]
            person.lastName = nameArr[1]
          }
      })
    }

2.watch函数
        .与Vue2.x中watch配置功能一致
        .两个小“坑”
            .监视reactive定义的响应式数据时:oldValue无法正确获取、强制开启了深度监视(deep配置失效)
            .监视reactive定义的响应式数据中某个属性时:deep配置有效
  // 情况一 ，监视ref 所定义的响应式数据，属于一种行为
     /*  watch(sum,(newValue,oldValue) => {
        console.log('sum的值变了')
      },{immediate:true}) */

      // 情况二,监视ref 所定义的多个响应式数据
      /* watch([sum,msg],(newValue,oldValue) => {
        console.log('sum或msg的值变了',newValue,oldValue)
      },{immediate:true}) */
      /* 
        情况三 ,监视reactive所定义的一个响应式数据，
            1.注意:此处无法获得正确的oldValue
            2.注意:强制开启了深度监视(deep配置无效)
      */
     
      //person 如果用ref 定义监视的时候必须加上 .value
      //reactive 默认开启深度监视
      /* watch(person,(newValue,oldValue) => {
        console.log('person的值变了',newValue,oldValue)
      },{deep:false})  //此处deep的配置无效 */

      //情况四，监视reactive所定义的响应式数据中的某一个数据
      /* watch(()=>person.age,(newValue,oldValue) => {
        console.log('person的age值变了',newValue,oldValue)
      }) */

      //情况五，监视reactive所定义的响应式数据中的某些数据
      /* watch([()=>person.name,()=>person.age],(newValue,oldValue) => {
        console.log('person的name或age值变了',newValue,oldValue)
      }) */

      //特殊情况
      watch(()=>person.job,(newValue,oldValue) => {
        console.log('person的job值变了',newValue,oldValue)
      },{deep:true})  //此处由于监视的是reactive所定义的对象中的某个属性，所以deep配置有效
       
3.watchEffect函数
    .watch的套路是:既要指明监视的属性，也要指明监视的回调。
    .watchEffect的套路是:不用指明监视哪个属性，监视的回调中用到个属性，那就监视个属性，
    .watchEffect有点像computed:
      .但computed注重的计算出来的值(回调函数的返回值)，所以必须要写返回值，
      .而watchEffect更注重的是过程(回调函数的函数体)，所以不用写返回值，
      //watchEffect所指定的回调中用到的效据只要发生变化，则直接重新执行回调。
      watchEffect(()=>{
        const x1 = Sum，value
        const x2= person.age
        console.10g('watchEffect配置的图调执行了")
      })

9.自定义hook函数
    .什么是hook?--本质是一个函数，把setup函数中使用的Composition API进行了封装。
    .类似于vue2.x中的mixin。
    .自定义hook的优势:复用代码,让setup中的逻辑更清楚易懂:

10.toRef
  .作用:创建一个ref对象，其value值指向另一个对象中的某个属性
  .语法:const name =toRef(person,'name')
  .应用:要将响应式对象中的某个属性单独提供给外部使用时、
  .扩展:toRefs与toRef功能一致，但可以批量创建多个ref对象，语法:toRefs(person)

三、其它 Composition APl
  1.shallowReactive与shallowRef
      .shallowset: 只处理基本数据类型的响应式,不进行对象的响应式处理，
      .shallowReactive:只处理对象最外层属性的响应式(浅响应式)。
      .什么时候使用?
        .如果有一个对象数据，结构比较深,但变化时只是外层属性变化 ===>shallowReactive.
        .如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===>shallowRef.
  2.readonly与shallowReadonly
    .readonly:让一个响应式数据变为只读的(深只读)
    .shallowReadonly:让一个响应式数据变为只读的(浅只读)
    .应用场景: 不希望数据被修改时，
  3.toRaw与markRaw
      .toRaw:
        .作用:将一个由reactive 生成的响应式对象转为普通对象。
        .使用场景:用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新
      .markRaw:
        .作用:标记一个对象，使其永远不会再成为明应式对象
        .应用场景:
          1.有些值不应被设置为响应式的，例如复杂的第三方类库等。
          2.当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能.
  4.customRef
    作用:创建一个自定义的ref，并对其依赖项跟踪和更新触发进行显式控制。
    实现防抖效果:
        <script>
          import { ref ,customRef } from 'vue';
          export default {
            name: 'App',
            setup() {
              //自定义一个ref--名为：myRef
              function myRef(value,delay){
                let timer
                return customRef((track,trigger)=>{
                  return {
                      get(){
                        console.log(`有人从myRef中读取数据了,我把${value}给他了`)
                        track()//通知vue追踪value(数据)的改变 (提前和get商量一下，让他问题这个value是有用的)
                        return value
                      },
                      set(newValue){
                        console.log(`有人把myRef中数据改为了:${newValue}`)
                        clearTimeout(timer)  //防抖
                        setTimeout(() => {
                          value = newValue
                          trigger()//通知Vue去重新解析模板  
                        }, delay);
                      }
                  }
                })
              }
              // let keyWaord = ref('hello')//使用vue提供的ref
              let keyWaord = myRef('hello',500)//使用程序员自定义的ref

              return {
                keyWaord
              }
            }
          }
          </script>
  5.provide 与inject
        作用:实现祖与后代组件间通信
        套路:父组件有一个 provide选项来提供数据，后代组件有一个inject 选项来开始使用这些数据
        .具体写法:
        1.祖组件中:
        setup(){
          let car=reactive({name:"奔驰',price:'40万'})provide("car',car)
          2.后代组件中:
          setup(props,context){
          }
          const carinject('car')
          return {
            car
          }
        }

  6.响应式数据的判断
        isRet: 检查一个值是否为一个ref 对象
        isReactive:检查一个对象是否是由reactive创建的响应式代理lsReadonly: 检查一个对象是否是由创建的只读代理readonly戴者PeactiVe
        IsProxy: 检查一个对象是否是由
        readonly 方法创建的代理      


五、新的组件
    1.Fragment
    .在Vue2中: 组件必须有一个根标签
    .在Vue3中:组件可以没有根标签,内部会将多个标签包含在一个Fragment虚拟元素中
    .好处: 减少标签层级,减小内存占用      