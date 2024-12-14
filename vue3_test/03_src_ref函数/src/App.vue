<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作种类：{{ job.type }}</h2>
  <h2>薪水：{{ job.salary }}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'App',
  //此处只是测试一下素拓，暂时不考虑响应式的问题
  setup() {
    //数据
    let name = ref('张三');
    let age = ref(18);
    let job  = ref({
      type:'前端工程师',
      salary:'30k'
    })

    function changeInfo(){
      // name.value = '李四',
      // age.value = 19
      job.value.type = 'UI设计师',
      job.value.salary = '60K'
    }

    //返回一个对象(常用)
    return {
      name:name,
      age:age,
      job:job,
      changeInfo
    }


  }
}
</script>

<style>


</style>
