<template>
    <ul>
        <!-- <li>消息id：{{ $route.params.id }}</li>
        <li>消息标题：{{ $route.params.title }}</li> -->
        <li>a:{{ id }}</li>
        <li>b:{{ title }}</li>
    </ul>
</template>

<script>
    export default {
        name:'Detail',
        props:['id','title',],
        // 以下配合  path:'detail'   写法无需占位符,
        // computed:{
        //     id(){
        //         return this.$route.query.id
        //     },
        //     title(){
        //         return this.$route.query.id
        //     }
        // },
        mounted() {
            console.log(this.$route) //能够得到组件相关的路由信息
        },
    }
</script>


<style scoped>

</style>