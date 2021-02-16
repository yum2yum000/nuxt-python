import Vue from 'vue'
const getDefaultState = ()=>{
    return{
   
            errorMessage:''
        
    }
}

export const state =  getDefaultState

export const mutations={
    SET_ERROR_MESSAGE(state,payload){
        console.log(payload)
        state.errorMessage=payload
    },
}

export const actions={
onSubmit({commit,dispatch},payload){
    const ref=payload.ref
    const userData=payload.user

    const onError=(response)=>{
        if(response.status===400){
            const errorMessage="نام کاربری یا رمز عبور اشتباه می باشد"
            commit('SET_ERROR_MESSAGE',errorMessage)
            
        }
    }
    const cc={
        ref,
        onError       
    }
    return this.$api._post('users/login/',userData,{cc}).then((response)=>{
     if(response){
         console.log('response',response)
         const {token}= response
         console.log('token',token)
        dispatch('auth/saveToken',{token},{root:true})
        return true
     }
    })
}


}