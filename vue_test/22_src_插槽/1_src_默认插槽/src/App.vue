<template>
    <div class="container">
        <Category title="美食" >
             <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        </Category>
        <Category title="游戏" >
            <ul>
                <li v-for="(g,index) in games" :key="index">{{ g }}</li>
            </ul>
        </Category>
        <Category title="电影" >
            <video controls="controls" src="https://vdept3.bdstatic.com/mda-qhtg894h7xxjm4pd/cae_h264/1724849462039052026/mda-qhtg894h7xxjm4pd.mp4?v_from_s=hkapp-haokan-hbf&auth_key=1729321325-0-0-46bcfc55b8c7a9a0e5e91cc422f465cd&bcevod_channel=searchbox_feed&cr=0&cd=0&pd=1&pt=3&logid=0125557771&vid=5499598794509332034&klogid=0125557771&abtest=" ></video>
            
        </Category>
    </div>
</template>

<script>
import Category from './components/Category.vue';
    export default {
    components: {  Category },
        name:'App',
        data() {
            return {
                foods:['火锅','烧烤','小龙虾','牛排'],
                games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
                films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
            }
        },
        }
</script>


<style scoped>
    .container{
        display: flex;
        justify-content: space-around;
    }

    video{
        width: 100%;
    }

    img{
        width: 100%;
    }

</style>
