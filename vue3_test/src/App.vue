<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <template v-slot:default >
        <Child/>
      </template>
      <template v-slot:fallback >
        <h3>加载中</h3>
      </template>
      
    </Suspense>
  </div>
</template>

<script>
// import Child from './commponents/Child.vue'//静态引入
import { defineAsyncComponent } from 'vue';
  const Child = defineAsyncComponent(()=> import ('./commponents/Child.vue'))//异步引入

export default {
  components: { Child },
    name:'App',
    
}
</script>
<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>