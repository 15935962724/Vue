<template>
    <li >
        <label>
            <!-- 以下通过@click  和v-model都能实现功能 -->
            <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/>
            <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，以为修改了props -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo,$event)" ref="inputTitle">
        </label>
        
        
        <button class="btn btn-danger" @click="handleDelete(todo.id)" >删除</button>
        <button class="btn btn-edit" v-show="!todo.isEdit" @click="handEdit(todo)"  >编辑</button>
    </li>          
</template>

<script>
import pubsub from 'pubsub-js'
    export default {
            name:'MyItem',
            // 声明 接收todo对象
            props:['todo'],
            
            methods: {
                handleCheck(id){
                    console.log(id)
                    //通知App组件将对应的todo对象的done值取反
                    // this.checkTodo(id)
                    this.$bus.$emit('checkTodo',id)
                },
                // 删除
                handleDelete(id){
                    if(confirm('确定删除吗')){
                        console.log(id)
                        //通知app删除对应的todos
                        // this.deleteTodo(id)
                        // this.$bus.$emit('deleteTodo',id)
                        //发布消息
                        pubsub.publish('deleteTodo',id)
                    }
                    
                },
                //编辑
                handEdit(todo){
                    if(todo.hasOwnProperty('isEdit')){
                        todo.isEdit = true
                    }else{
                        console.log('@')
                        this.$set(todo,'isEdit',true)
                    }
                    //nextTick所指定的回调会在Dom节点更新完毕之后 在执行(官方解释：在下一次Dom更新结束后执行其指定的回调)
                    this.$nextTick(function(){
                        this.$refs.inputTitle.focus() //点击编辑的时候让输入框获取焦点
                    })
                  
                    
                },
                //输入框失去焦点回调(真正执行修改逻辑)
                handleBlur(todo,e){
                    todo.isEdit = false;
                    console.log('updateTodo',todo.id,e.target.value)
                    if (!e.target.value.trim()) {
                            alert('输入不能为空！')
                        return;
                    }
                    this.$bus.$emit('updateTodo',todo.id,e.target.value)
                },
                
            },

    }
</script>

<style scoped>
        /*item*/
        li {
            list-style: none;
            height: 36px;
            line-height: 36px;
            padding: 0 5px;
            border-bottom: 1px solid #ddd;
        }

        li label {
            float: left;
            cursor: pointer;
        }

        li label li input {
            vertical-align: middle;
            margin-right: 6px;
            position: relative;
            top: -1px;
        }

        li button {
            float: right;
            display: none;
            margin-top: 3px;
        }

        li:before {
            content: initial;
        }

        li:last-child {
            border-bottom: none;
        }

        li:hover{
            background-color: #ddd;
        }

        li:hover button{
            display: block;
        }

</style>
