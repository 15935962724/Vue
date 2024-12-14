//该文件用于创建Vuex中最为核心的store

import Vue from "vue"

import Vuex from "vuex"

//使用Vuex插件
Vue.use(Vuex)
//准备actions --  用于响应组件里面的动作
const actions = {
    jia(context,value){
        console.log('actions中的jia被调用了',value)
        context.commit('JIA',value)
    },
    jian(context,value){
        context.commit('JIAN',value)
    },
    jiaOdd(context,value){
        if (context.state.sum % 2) {
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);
    }

}

//mutations --  用于操作(加工)数据
const mutations = {
    JIA:(state,value)=>{
        console.log('mutalons中的JIA被调用了',state.sum,value)
        state.sum += value
    },
    JIAN(state,value){  
        state.sum -= value

    }


}

//state --  用于存储数据
const state = {
    sum:0,//当前的和

}

//创建 并 暴露  store
export default  new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})


