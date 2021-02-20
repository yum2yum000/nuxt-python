import qs from 'qs'
import {handleResponse,handleErrors} from '@/helpers/responseHelper'

const createInstance=({$axios,store,...context})=>{
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
    
    api._post=function (url,body,config={}){
        const {cc,...requestConfig}=config
        return api.post(url,body,requestConfig).then((response)=>{
            console.log('response',response)
            return handleResponse(response,cc)
        }).catch((e)=>{
            handleErrors(e,cc,context)

        })

    }

    api._get=function (url,config={}){
        const {cc,...requestConfig}=config
        return api.get(url,requestConfig).then((response)=>{
            console.log('response',response)
            return handleResponse(response,cc)
        }).catch((e)=>{
            handleErrors(e,cc,context)
        })

    }

    api._put=function (url,body,config={}){
        console.log('123456')
        const {cc,...requestConfig}=config
        return api.put(url,body,requestConfig).then((response)=>{
            console.log('response',response)
            return handleResponse(response,cc)
        }).catch((e)=>{
            handleErrors(e,cc,context)
        })

    }
    return api;
}

export default function (context, inject) {
    // Create a custom axios instance
    const {store}=context
    const api=createInstance(context)
    const auth=createInstance(context)
   auth.onRequest((config) => {
        config.headers.Authorization = 'Token ' + store.getters['auth/getToken']
      })
    // Inject to context as $api
    inject('api', api)
    inject('auth', auth)
}
