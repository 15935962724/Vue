<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- transition 如果加name css也必须加name名字  appear 默认为true -->
            <transition-group
            :appear="true"
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__swing"
            >
                <h1 v-show="!isShow" key="1">你好啊</h1>
            </transition-group>
       
    </div>
</template>

<script>
import 'animate.css'
        export default{
                name:'Test3',
                data() {
                    return {
                        isShow:true
                    }
                },
            
        }


</script>

<style scoped>

    h1{
        background-color: orange;
        /* transition: 1s linear; */
    }




</style>

