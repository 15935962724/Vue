<template>
    <h1>当前求和的值为：{{ sum }}</h1>
    <button @click="sum++">点我加1</button>
    <br>
    <h2>当前的信息为：{{ msg }}</h2>
    <button @click="msg+='!'">修改信息</button>
    <br>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.j1.salary }}K</h2>
    <button @click="person.name+='`'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
</template>
  
  <script>
  import { reactive,computed, ref, watch,watchEffect } from 'vue';
  
  export default {
    name: 'Demo',

    

    setup() {
      let sum = ref(0)
      let msg = ref('你好啊')
      let person = reactive({
        name:'张三',
        age:18, 
        job: {
          j1:{
            salary:20
          }
          
        }
      })
      
      //监视基础数据类型 不能加  .value
      /* watch(sum,(newValue,oldValue)=>{
          console.log('sum的值变化了',newValue,oldValue)
      },{immediate:true}) */


      // watchEffect所指定的回调中用到的效据只要发生变化，则直接重新执行回调。
      watchEffect(()=>{
        const x1 = sum.value
        const x2 = person.job.j1.salary
        console.log('watchEffect所指定的回调执行了')

      })
    
      return {
        sum,
        msg,
        person
      }
    }
  }
  </script>
  
  <style>
  
  
  </style>
  