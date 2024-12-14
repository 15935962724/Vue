<template>
    <div class="container">
        <Category title="游戏" >
            <template slot-scope="atguigu" >
                <ul>
                    <li v-for="(g,index) in atguigu.games" :key="index">{{ g }}</li>
                </ul>
            </template>
            
        </Category>
        <Category title="游戏" >
            <template slot-scope="{games}" >
                <ol>
                    <li style="color: red;" v-for="(g,index) in games" :key="index">{{ g }}</li>
                </ol>
                <h4>{{ msg }}</h4>
            </template>
        </Category>
        <Category title="游戏" >
            <template slot-scope="atguigu" >
                    <h4 v-for="(g,index) in atguigu.games" :key="index">{{ g }}</h4>
            </template>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category.vue';
    export default {
            name:'App',
            components: {  Category },
        
        
        }
</script>


<style scoped>
    .container,.footer{
        display: flex;
        justify-content: space-around;
    }

    video{
        width: 100%;
    }

    img{
        width: 100%;
    }

    h4{
        text-align: center;
    }


</style>
