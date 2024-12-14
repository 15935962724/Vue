<template>
    <ul>
        <li>消息id：{{ $route.query.id }}</li>
        <li>消息标题：{{ $route.query.title }}</li>
    </ul>
</template>

<script>
    export default {
        name:'Detail',
        mounted() {
            console.log(this.$route) //能够得到组件相关的路由信息
        },
    }
</script>


<style scoped>

</style>