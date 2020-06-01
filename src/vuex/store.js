import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
    //定义状态
    state:{
        user:localStorage.getItem('user').replace(/\"/g, ""),
        isLogin:"",

    },
    mutations:{
        newAuthor(state,msg){
            state.user=msg;
            localStorage.setItem("user",JSON.stringify(msg))
            console.log(msg)      
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