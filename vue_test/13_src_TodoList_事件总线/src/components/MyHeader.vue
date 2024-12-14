<template>

        <div class="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认"  @keyup.enter="add"/>
        </div>
   
</template>

<script>

import {nanoid} from 'nanoid'

    export default {
            name:'MyHeader',
            // props:['addTodo'],
            methods: {
                add(e){
                    //校验数据是否为空
                    if(!e.target.value.trim()){
                        alert('数据不能为空')
                         e.target.value=''
                        return;
                    }
                    //将用的的输入包装成一个todo对象
                    // console.log(e.target.value)
                    const todoObj = {id:nanoid(),title:e.target.value,done:false}
                    // console.log(todoObj)
                    // 绑定自定义事件
                    this.$emit('addTodo',todoObj)
                    //清空数据
                    e.target.value=''

                }
            },
    }
</script>

<style scoped>
        /*header*/
        .todo-header input {
            width: 560px;
            height: 28px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 4px 7px;
        }

        .todo-header input:focus {
            outline: none;
            border-color: rgba(82, 168, 236, 0.8);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
        }

</style>
