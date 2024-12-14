<template>
    <div class="demo" >
        <h2 >学校姓名：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>

    </div>
</template>


<script>

    export default{
        name:'School',
        data(){
            return{
                name:'尚硅谷atguigu',
                address : '北京昌平',
            }
            
        },
        mounted() {
            // console.log('School',this.x)
            this.$bus.$on('hello',(data)=>{
                console.log('我是School组件，我收到了Student组件传过来的数据',data)
            })
        },
        beforeDestroy(){
            this.$bus.$off('hello')
        }
       

    }



</script>

<style scoped>
    .demo{

        background-color: skyblue;
        padding: 5px;
    }

</style>




