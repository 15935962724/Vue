<template>
    <div class="student">
        <h2 >学生姓名：{{name}}</h2>
        <h2 >学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把我学生名给School组件</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
    export default{
        name:'Student',
        data(){
            return{
                name:'张三',
                sex : '男',
            }
            
        },
        methods: {
            sendStudentName(){
                // this.$bus.$emit('hello',this.name)
                //发布消息
                pubsub.publish('hello',666)
            }
        },
        // mounted() {
        //     console.log('Student',this.x)
        // },
       
    }



</script>

<style  scoped>

    .student {
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
       

     }
     

</style>







