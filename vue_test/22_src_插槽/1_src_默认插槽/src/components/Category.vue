<template>
    <div class='category'>
        <h3>{{ title }}分类</h3>
        <!-- 定义一个插槽(挖一个坑，等着组件使用者进行填充) -->
        <slot>我是一些默认值，当使用这没有传具体结构时，我会出现</slot>
        
       
    </div>
</template>

<script>

    export default{
        name:'Category',
        props:['title']
    }

</script>

<style scoped>
    
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }

    h3{
        text-align: center;
        background-color: orange;
    }

 


</style>

