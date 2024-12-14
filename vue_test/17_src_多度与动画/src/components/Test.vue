<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- transition 如果加name css也必须加name名字  appear 默认为true -->
            <transition name="hello" :appear="true">
                <h1 v-show="isShow">你好啊</h1>
            </transition>
       
    </div>
</template>



<script>

        export default{
                name:'Test',
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
    }
    /* vue规定动画进入时的css名字 */
    .hello-enter-active{
        animation: atguiguenter 1s linear;
    }
    /* vue规定动画离开时的css名字 */   
    .hello-leave-active{
        animation: atguiguleave 1s linear reverse;
    }

    /* 进入时的关键帧 */
    @keyframes atguiguenter {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0px);
        }
    }
    /* 离开时的关键帧 */
    @keyframes atguiguleave {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }


</style>

