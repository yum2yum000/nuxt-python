import qs from 'qs' 

export default function ({ $axios}, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        headers: {
            common: {
                Accept: 'application/json'
            }
        },
        paramsSerializer:(params)=>{
            return qs.stringify(params,{arrayFormat:'brackets'})
        }
    })

    // Set baseURL to something different
    api.setBaseURL('http://127.0.0.1:8000')

    api._post=function(url,body,config={}){
        const {cc,...requestConfig}=config
        api.post(url,body,requestConfig). 
        then((response)=>{
            console.log(response)
            return response
        }).catch((e)=>{
            if(e?.response?.status==400){
                const data=e.response.data
                console.log(data)
                for(const key in data){
                    if(key=='password')
                   {
                    cc.ref.addError(key,'رمز عبور معتبر نمی باشد')
                   }
                   else{
                    cc.ref.addError(key,data[key])
                   }
                }
               
            }
        })

    }
    

    // Inject to context as $api
    inject('api', api)
}