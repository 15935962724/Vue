<template>

    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <!-- 将addTodo方法传  组件对象 -->
                <MyHeader @addTodo="addTodo"/>
                <!-- 将数组对象传给组件 -->
                <MyList :todos ='todos'  />  
                <MyFooder :todos ='todos' @checkAllTodo="checkAllTodo" @cleatAllTodo="cleatAllTodo"/>
            </div> 
        </div>
    </div>


</template>
<script>
import pubsub from 'pubsub-js'
import MyFooder from './components/MyFooder.vue'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
    export default {
        name:'App',
        components:{MyFooder,MyHeader,MyList},
        //原始数据
        data() {
                return {
                    todos: JSON.parse(localStorage.getItem('todos'))||[]
                    // [
                        // {id:'001',title:'吃饭',done:true},
                        // {id:'002',title:'睡觉',done:true},
                        // {id:'003',title:'开车',done:false},
                        // {id:'004',title:'烫头',done:true},
                    // ]
                   
                    
                }
            },
        //方法    
        methods: {
            addTodo(todoObj){
                console.log('我是App组件，我收到了数据：',todoObj)
                //往todos 中添加数据
                this.todos.unshift(todoObj)
                
            },
            // 勾选or取消一个todo
            checkTodo(id){
                this.todos.forEach(todo => {
                    if(todo.id===id){
                        todo.done = !todo.done
                    }
                });

            },
            //删除一个todo
            deleteTodo(_,id){
                //过滤调一个todo 重新赋值给todos
                this.todos = this.todos.filter(todo => {
                    return todo.id !== id
                });

            },
            //全选or取消全选
            checkAllTodo(done){
                //过滤调一个todo 重新赋值给todos
                this.todos.forEach(todo => {
                    return todo.done = done
                });

            },
            //清除所有已完成的todo
            cleatAllTodo(done){
                //过滤调一个todo 重新赋值给todos
               this.todos = this.todos.filter(todo => {
                    return !todo.done 
                });

            },
            //更新一个todo
            updateTodo(id,title){
                //过滤调一个todo 重新赋值给todos
                this.todos.forEach(todo => {
                   if(todo.id == id){
                        todo.title = title
                   }
                });

            }


        },  
        //监视
        watch:{
            // todos(value){
            //     localStorage.setItem('todos',JSON.stringify(value))
            // }
            
            //深度监视
            todos:{
                deep:true,
                handler(value){
                    localStorage.setItem('todos',JSON.stringify(value))
                }
            }
        },
        // 钩子
        mounted(){
            this.$bus.$on('checkTodo',this.checkTodo)  //绑定选中事件
            // this.$bus.$on('deleteTodo',this.deleteTodo)  //绑定删除事件
            //订阅消息
            this.pubId = pubsub.subscribe('deleteTodo',this.deleteTodo)

            this.$bus.$on('updateTodo',this.updateTodo)//修改事件
            



        },
        //销毁事件总线
        beforeDestroy(){
            this.$bus.$off('checkTodo',this.checkTodo)  
            this.$bus.$off('updateTodo',this.updateTodo)  
            //销毁消息  
            pubsub.unsubscribe(this.pubId)
        }  

    }
</script>
<style>
            /*base*/
        body {
        background: #fff;
        }

        .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        }

        .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
        }

        .btn-edit{
            color: #fff;
            background-color: skyblue;
            border: 1px solid rgb(73, 148, 199);
            margin-right: 5px;
        }


        .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
        }

        .btn:focus {
        outline: none;
        }

        .todo-container {
        width: 600px;
        margin: 0 auto;
        }
        .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        }

       
</style>