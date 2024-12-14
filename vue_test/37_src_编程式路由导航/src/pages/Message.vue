<template>
    <div>
        <ul>
            <li v-for="message in messageList" :key="message.id">
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{ message.title }}</router-link> >&nbsp;&nbsp; -->
                <!-- 跳转路由并携带params参数，to的=对象写法 -->
                <router-link :to="{
                    // path:'/home/message/detail',   //如果使用params传参，此处不允许写path,只能使用name
                    name:'xiangqing',   //呼唤路由的名字也能跳转
                    query:{
                        id:message.id,
                        title:message.title
                    }
                }">{{ message.title }}</router-link> >&nbsp;&nbsp;
                <button @click="pushShow(message)">push查看</button>
                <button @click="replaceShow(message)">replace查看</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'Message',
        data() {
            return {
                messageList:[
                    {id:'001',title:'消息001'},
                    {id:'002',title:'消息002'},
                    {id:'003',title:'消息003'},
                ]
            }
        },
        methods: {
            pushShow(message){
                console.log(this.$route)
                this.$router.push({
                    name:'xiangqing',   //呼唤路由的名字也能跳转
                    query:{
                        id:message.id,
                        title:message.title
                    }
                })
            },
            replaceShow(message){
                this.$router.replace({
                    name:'xiangqing',   //呼唤路由的名字也能跳转
                    query:{
                        id:message.id,
                        title:message.title
                    }
                })
            }
        },
    }
</script>

<style>


</style>
