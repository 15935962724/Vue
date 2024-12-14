<!-- 组件的结构 -->
<template>
    <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<!-- 组件交互相关的代码(数据，方法等) -->
<script>
   export default {
                name:'Student',  //组件名
                data(){
                    return{
                        name:'张三',
                        age:18

                    }
                },
                
            }


</script>









