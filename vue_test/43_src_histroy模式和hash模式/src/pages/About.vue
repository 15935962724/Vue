<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    // beforeDestroy(){
    //     console.log('About组件即将被销毁')
    // },
    // mounted() {
    //     console.log('About组件挂载完毕了',this)
    //     window.aboutRoute = this.$route
    //     window.aboutRouter = this.$router
    // },
    mounted() {
        console.log('%%',this.$route)
    },
    //通过路由规则，进入该组件时 被调用
    beforeRouteEnter (to, from, next) {
        console.log('app  ==== beforeRouteEnter',to,from)
      //此处配置可用path  也可用name
      if(to.meta.isAuth){  //判断是否需要鉴权
        console.log(localStorage.getItem('school')) 
            if(localStorage.getItem('school') === 'atguigu'){
                    next()//放行
                }else{
                    alert('学校名不对，无权限查看!')
                }
        }else{
            next()
        }

    },
    //通过路由规则，离开该组件时 被调用
    beforeRouteLeave (to, from, next) {
        console.log('app  ==== beforeRouteLeave',to,from)
        next()
    }
}
</script>