
import { reactive ,onMounted,onBeforeUnmount } from "vue"
//实现
export default function (){

    //实现鼠标打点相关的 数据
    let point = reactive({
        x:0,
        y:0
      })

      //实现鼠标打点相关的方法
      function savnePoint(event){
            point.x = event.pageX
            point.y = event.pageY
            console.log(event.pageX,event.pageY)

          }

      //实现鼠标打点相关的生命周期钩子
      onMounted(() => {
          window.addEventListener('click',savnePoint)
      })

      //卸载这个函数
      onBeforeUnmount(() => {
          window.removeEventListener('click',savnePoint)
      })

      return point
}


