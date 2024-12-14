<template>
  <input type="text" v-model="keyWaord">
  <h3>{{ keyWaord }}</h3>
</template>

<script>
import { ref ,customRef } from 'vue';
export default {
  name: 'App',
  setup() {
    //自定义一个ref--名为：myRef
    function myRef(value,delay){
      let timer
      return customRef((track,trigger)=>{
         return {
            get(){
              console.log(`有人从myRef中读取数据了,我把${value}给他了`)
              track()//通知vue追踪value(数据)的改变 (提前和get商量一下，让他问题这个value是有用的)
              return value
            },
            set(newValue){
              console.log(`有人把myRef中数据改为了:${newValue}`)
              clearTimeout(timer)  //防抖
              setTimeout(() => {
                value = newValue
                trigger()//通知Vue去重新解析模板  
              }, delay);
              
            }

         }
      })
    }


    // let keyWaord = ref('hello')//使用vue提供的ref
    let keyWaord = myRef('hello',500)//使用程序员自定义的ref

    return {
      keyWaord
    }
  }

  
}
</script>

<style>


</style>
