<template>
    <div >
        <h2 >学校姓名：{{name | mySlice}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="test">点我测试一个hello方法</button>
    </div>
</template>


<script>
// 引入一个  mixin   混合
import { mixin, mixin2 } from '../mixin';
// import { plugins } from '../plugins';

    export default{
        name:'School',
        data(){
            console.log(this)
            return{
                name:'尚硅谷atguigu',
                address : '北京昌平',
            }
            
        },
      mixins:[mixin,mixin2],
      mounted() {
          console.log('你好11111111111111')
     },
     methods: {
        test(){
         this.hello()
        }
     },
       

    }



</script>
