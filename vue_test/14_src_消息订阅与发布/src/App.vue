<template>
    <div class="app">
       
       
        <h1 class="app">{{ msg }}</h1>
        <School/>
        <Student/>
    </div>
</template>
<script>

import Student from './components/Student.vue';
import School from './components/School.vue';
School
    export default {
        name:'App',
        components:{Student,School},
        data() {
            return {
                msg:'你好啊'
            }
        },
    }
</script>
<style scoped>
    .app{

        background-color: red;

    }
</style>