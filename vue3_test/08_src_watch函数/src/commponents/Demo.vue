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
  import { reactive,computed, ref, watch } from 'vue';
  
  export default {
    name: 'Demo',
    /* watch:{
      sum(newValue,oldValue){
        console.log('sum 的值变了')
      }
      sum:{
        immediate:true,  //立即监视的意思
        deep:true,    //深度监视
        handler(newValue,oldValue){
          console.log('sum 的值变了',newValue,oldValue)
        }
      }
      
    }, */

    

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
      // 情况一 ，监视ref 所定义的响应式数据，属于一种行为
     /*  watch(sum,(newValue,oldValue) => {
        console.log('sum的值变了')
      },{immediate:true}) */

      // 情况二,监视ref 所定义的多个响应式数据
      /* watch([sum,msg],(newValue,oldValue) => {
        console.log('sum或msg的值变了',newValue,oldValue)
      },{immediate:true}) */
      /* 
        情况三 ,监视reactive所定义的一个响应式数据，
            1.注意:此处无法获得正确的oldValue
            2.注意:强制开启了深度监视(deep配置无效)
      */
     
      //person 如果用ref 定义监视的时候必须加上 .value
      //reactive 默认开启深度监视
      /* watch(person,(newValue,oldValue) => {
        console.log('person的值变了',newValue,oldValue)
      },{deep:false})  //此处deep的配置无效 */

      //情况四，监视reactive所定义的响应式数据中的某一个数据
      /* watch(()=>person.age,(newValue,oldValue) => {
        console.log('person的age值变了',newValue,oldValue)
      }) */

      //情况五，监视reactive所定义的响应式数据中的某些数据
      /* watch([()=>person.name,()=>person.age],(newValue,oldValue) => {
        console.log('person的name或age值变了',newValue,oldValue)
      }) */

      //特殊情况
      watch(()=>person.job,(newValue,oldValue) => {
        console.log('person的job值变了',newValue,oldValue)
      },{deep:true})  //此处由于监视的是reactive所定义的对象中的某个属性，所以deep配置有效

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
  