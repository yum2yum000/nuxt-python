
import Vue from 'vue'
const getDefaultState=()=>{
    return{
        identity:{}
        
    }
   }
   
   export const state=getDefaultState

   export const getters={
       getDisplayName(state){
        return state.identity?.user || ''
       }
   }

   export const mutations={
    SET_IDENTITY(state,payload){
        Vue.set(state,'identity',payload)
    }
   }

   export const actions={
       fetchIdentity({commit}){
           const cc={goTologin:false}
           return this.$auth._put('/users/profile/',{update:''},{cc}).then((response)=>{
               if(response){
                commit('SET_IDENTITY',response)
               }
           })
       }
   }