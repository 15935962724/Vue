<template>
    <ul>
        <li>消息id：{{ $route.params.id }}</li>
        <li>消息标题：{{ $route.params.title }}</li>
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