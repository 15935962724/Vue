<template>
  <div class="hello">
        <h2>我是hello组件</h2>
       
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['msg','school'],
  mounted() {
    console.log(this)
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-color: orange;
  padding: 10px;
}
</style>
