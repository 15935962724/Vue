<template>
    <div >
        <h2 @click="showName">学校姓名：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>


<script>
// 引入一个  mixin   混合
// import { mixin, mixin2 } from '../mixin';
    export default{
        name:'School',
        data(){
            console.log(this)
            return{
                name:'尚硅谷',
                address : '北京昌平',
                x:666
            }
            
        },
    //   mixins:[mixin,mixin2],
      mounted() {
          console.log('你好11111111111111')
     },
       

    }



</script>
