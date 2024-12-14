<template>
    <div >
       <h2>当前求和为{{sum}}</h2>
       <h2>当前求和放大10倍为{{bigSum}}</h2>
       <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
       </select>
       <button @click="increment">+</button>
       <button @click="decrement">-</button>
       <button @click="incrementOdd">当前求和为奇数在加</button>
       <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

    export default{
        name:'Count',
        data() {
            return {
                n:1,//用户选择的数据
            }
        },
        computed: {
            sum(){
                return this.$store.state.sum
            },
            school(){
                return this.$store.state.school
            },
            subject(){
                return this.$store.state.subject
            },
            
            bigSum(){
                return this.$store.getters.bigSum
            },
        },
        methods: {
            increment(){
                //dispatch 是跟Action 对话
                // this.$store.dispatch('jia',this.n)
                //commit 是直接跟Mutations 对话
                this.$store.commit('JIA',this.n)
                
            },
            decrement(){
                this.$store.commit('JIAN',this.n)
            },
            incrementOdd(){
                this.$store.dispatch('jiaOdd',this.n)
            },
            incrementWait(){
                this.$store.dispatch('jiaWait',this.n)
            },
        },
        mounted(){
            const x = mapState({
                sum:'sum',
                school:'school',
                subject:'subject'
            });
          console.log('x',x)
            
        }
       
    }

</script>

<style scoped>

    button{
        margin-left: 5px;
    }

</style>