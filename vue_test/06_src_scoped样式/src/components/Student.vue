<template>
    <div class="demo">
        <h2 class="title">学生姓名：{{name}}</h2>
        <h2 class="qwe">学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    export default{
        name:'Student',
        data(){
            return{
                name:'张三',
                sex : '男',
            }
            
        },
       
    }



</script>

<style scoped>

    .demo {
        background-color: rgb(67, 197, 41)
        /* .qwe {
            font-size: 40px;
        } */

     }
     .qwe {
            font-size: 40px;
        }

</style>







