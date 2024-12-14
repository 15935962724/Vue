<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo v-if="isShowDemo" />
  <hr>
  <Test></Test>
</template>

<script>
import { ref } from 'vue';
import Demo from './commponents/Demo';
import Test from './commponents/Test.vue';
export default {
  name: 'App',
  components:{Demo,Test},
  setup() {
    let isShowDemo = ref(true)
    return {
      isShowDemo
    }
  }

  
}
</script>

<style>


</style>
