<template>
   
    <div>
              <h2>Home组件内容</h2>
              <div>
                <ul class="nav nav-tabs">
                  <li>
                    <router-link   class="list-group-item" active-class="active" to="/home/news" >News </router-link>
                  </li>
                  <li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                  </li>
                </ul>
                <!-- keep-alive 保持活跃 include 缓存的是组件名，include="News" 代表缓存一个，如果缓存多个请用数组形式 代码如下 :include="['News','Message']" -->
                <keep-alive include="News">  
                    <router-view></router-view>
                </keep-alive>
                
            </div>
    </div>
   
</template>

<script>
export default {
    name:'Home',
    // beforeDestroy(){
    //     console.log('Home组件即将被销毁')
    // },
    // mounted() {
    //     console.log('Home组件挂载完毕了',this)
    //     window.homeRoute = this.$route
    //     window.HomeRouter = this.$router
    // },
}
</script>