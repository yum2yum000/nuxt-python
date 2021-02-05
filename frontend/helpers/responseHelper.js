export const handleResponse=(response,cc)=>{
    console.log('ccc',cc)
    if(response){
        if(cc.fullResponse){
            return response
        }
        else{
            return response.data
        }
    }
}


export const handleErrors=(e,cc,{error})=>{
    if(e?.response?.status===403)
    {
        const data=e.response.data
      
        for(let key in data){
            if(key=='password')
            {
             cc.ref.addError(key,'رمز عبور معتبر نمی باشد')
            }
            else{
             cc.ref.addError(key,data[key])
            }
        }


    } else if(e?.response?.status===400){
        const data=e.response.data
        console.log('data',data)
        error({statusCode:500,message:data})
    }



}