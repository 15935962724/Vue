<template>
    <div class="child">
      <h3>我是App组件</h3>
      {{ sum }}
    </div>
  </template>
  
  <script>
import { ref } from 'vue';

  export default {
      name:'Child',
      async  setup(props) {
        let sum = ref(0)
        // return{
        //   sum
        // }
        let P = new Promise((resovle,reject)=>{
          setTimeout(() => {
            return resovle(sum)
          }, 3000);
        })
        return await P //等到p成功
      }
  }
  </script>
  <style>
    .child{
      background-color: skyblue;
      padding: 10px;
    }
  </style>