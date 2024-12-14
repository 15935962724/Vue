<template>
    <ul>
        <li :style="{opacity}">欢迎学习Vue</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
    export default {
        name:'News',
        data() {
            return {
                opacity:1,
            }
        },
        // beforeDestroy() {
        //     console.log('News组件即将被销毁')
        //     clearImmediate(this.timer)
        // },
        // mounted() {
        //         console.log('mounted',this)
        //         this.timer =  setInterval(() => {
        //             console.log('&&&&&')
        //             this.opacity -= 0.01
        //             if(this.opacity <= 0) this.opacity = 1
        //         }, 16);
        // },


        //新的(路由)生命周期   激活
        activated() {
                console.log('News被激活了')
                this.timer =  setInterval(() => {
                        console.log('&&&&&')
                        this.opacity -= 0.01
                        if(this.opacity <= 0) this.opacity = 1
                }, 16);
        },
        //失活  or  销毁
        deactivated() {
            console.log('News失活了')       
            console.log('News组件即将被销毁')
            clearInterval(this.timer)       
        },
    }
</script>

<style>


</style>