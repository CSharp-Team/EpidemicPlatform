import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
    //定义状态
    state:{
        user:'yang',
        isLogin:"",

    },
    mutations:{
        newAuthor(state,msg){
            state.user=msg;      
        },
        isLogin(state,msg){
            state.isLogin=msg;
            localStorage.setItem("isLogin",msg);
        },
        dispUser(state){
            console.log(state.user)
        }
    }
})

export default store