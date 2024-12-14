
export default {

    install(Vue,x,y,z){
        // console.log('@@install',Vue)
        console.log(x,y,z)
        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })
    
    
    
        //定义全局指令
        Vue.directive('fbind',{
            //指令与元素绑定时 （一上来）
            bind (el, binding, vnode) {
                el.value = binding.value 
            },
            //指令与元素插入页面时
            inserted (el, binding, vnode) {
                el.focus()
            },
            //指令所在的模板被重新解析时
            update (el, binding, vnode, oldVnode) {
                el.value = binding.value 
                el.focus()
            },
        })

        //定义混入
        Vue.mixin({
            
            data() {
                return {
                    x:100,
                    y:200
                }
            },
        
        })

        //给Vue原型上添加一个方法(vm和vc就都能用了)
        Vue.prototype.hello = ()=>{ alert('你好啊')}


    }

    

}

