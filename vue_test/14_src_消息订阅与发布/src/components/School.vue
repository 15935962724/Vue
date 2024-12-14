<template>
    <div class="demo" >
        <h2 >学校姓名：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>

    </div>
</template>


<script>

import pubsub from 'pubsub-js'

    export default{
        name:'School',
        data(){
            return{
                name:'尚硅谷atguigu',
                address : '北京昌平',
            }
            
        },
        methods:{
            demo(msgName,data){
                console.log('hello消息收到了，',data,this)
            }
        },
        mounted() {
            // console.log('School',this.x)
            // this.$bus.$on('hello',(data)=>{
            //     console.log('我是School组件，我收到了Student组件传过来的数据',data)
            // })
            //订阅一个消息  以下下两种写法
            // this.pubId = pubsub.subscribe('hello',(msgName,dataValue)=>{
            //     console.log(this)
            //     // console.log('有人发布了hello消息，hello消息的回调执行了',msgName,dataValue)

            // })
            this.pubId = pubsub.subscribe('hello',this.demo)
        },
        beforeDestroy(){
            // this.$bus.$off('hello')
            //取消消息
            pubsub.unsubscribe(this.pubId)
        }
       

    }



</script>

<style scoped>
    .demo{

        background-color: skyblue;
        padding: 5px;
    }

</style>




