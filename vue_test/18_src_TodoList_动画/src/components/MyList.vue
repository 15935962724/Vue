<template>
    <ul class="todo-main">
        <transition-group name = 'todo' :appear="true">
            <MyItem  v-for = 'todoObj in todos' :key="todoObj.id" :todo="todoObj"  />
        </transition-group>
    </ul>
</template>

<script>
import MyItem from './MyItem.vue';
    export default {
            name:'MyList',
            components:{ MyItem },
            props:['todos',]
   
   }
</script>

<style scoped>
/*main*/
        .todo-main {
            margin-left: 0px;
            border: 1px solid #ddd;
            border-radius: 2px;
            padding: 0px;
        }

        .todo-empty {
            height: 40px;
            line-height: 40px;
            border: 1px solid #ddd;
            border-radius: 2px;
            padding-left: 5px;
            margin-top: 10px;
        }


          /* vue规定动画进入时的css名字 */
          .todo-enter-active{
            animation: atguiguenter 1s linear;
        }
        /* vue规定动画离开时的css名字 */   
        .todo-leave-active{
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
                transform: translateX(100%);
            }
            to{
                transform: translateX(0);
            }
        }


</style>
