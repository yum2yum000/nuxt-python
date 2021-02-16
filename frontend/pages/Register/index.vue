<template>
<div class="container mx-auto p-8 flex bg-img pb-200">
        <div class="max-w-3xl  w-full mx-auto">
            <h1 class="text-4xl text-center mb-12 font-thin text-white">ثبت نام</h1>

            <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
                <div class="p-8">
                    <app-form :onSubmit="submit" ref="form">
                        <input-text label="نام کاربری" v-model="user.username" name="username" :align="'text-left d-ltr'" rules="required"  class="block w-50 p-3 rounded border border-transparent "></input-text>
                        <input-text label="رمز عبور" v-model="user.password"  :inputType="'password'" rules="required|includeLetter" name="password" :align="'text-left d-ltr'"  class="block w-50 p-3 rounded border border-transparent "></input-text>
                        <input-text label="ایمیل" v-model="user.email" name="email" :align="'text-left d-ltr'" rules="required|email" class="block w-50 p-3 rounded border border-transparent "></input-text>
                        <input-text label="نام" v-model="user.first_name" class="block w-50 p-3 rounded border border-transparent "></input-text>
                        <input-text label="نام خانوادگی" v-model="user.last_name" class="block w-50 p-3 rounded border border-transparent "></input-text>
                        <input-phone label="تلفن" v-model="user.phone" name="phone" :align="'text-left d-ltr'"  class="block w-50 p-3 rounded border border-transparent "></input-phone>
                        <div class="w-full pr-3">
                          <input-text label="آدرس" controlType="textarea" v-model="user.bio"  name="bio" class="pr-5 hover:outline-none focus:outline-none p-1"></input-text>
                         <template v-if="loadSkelton" >
                           <div class="mt-9"></div>
                       <vue-skeleton-loader  :height="200" > </vue-skeleton-loader>
                         </template>
                        
   
                         <client-only >
                         <location @hideSkelton="hideSkelton" @adress="getAdress"></location> 
                          </client-only>
                           </div>
                      <input-file :imgLoading="imgLoading" :imageUrl="imageUrl" @fileChanged="fileChanged" class="mt-5" @removeImg="removeImg">
                      <img class="w-48" slot="preloader" src="@/assets/images/image-loader.gif" />
                      </input-file>
                      {{errorMessage}}
                          

                        <div  class="w-full p-3 text-center">
                          <button class="btn draw-border mt-4">ثبت نام</button>
                        </div>
                        
      
                      
               
               
                    </app-form>
                
      
                    </div>
            </div>
        </div>
    </div>
   
</template>

<script>
import { extend } from 'vee-validate';

extend('includeLetter', value => {
   const containsLetter = /[A-Za-z]/.test(value)
                        return containsLetter
});

export default {
    name:'Register',
    components: {
    location: function() {
      if(process.client)
      {
        return import('@/components/Location/UserLocation.vue')
        }
        }
  },
    data(){
        return{
           user:{
                    first_name:'',
                    last_name:'',
                    username:'',
                    password:'',
                    bio:'',
                    email:'',
                    adres:'',
                    avatar:'',
                    phone:'',
                },
                 imageUrl:'',
                 imgLoading:false,
                 formData : '',
                 loadSkelton:true,
                 errorMessage:''
        }
    },
    watch:{
     computedphone:{
        handler(v){
         
         console.log(v)
        },
        deep:true
      }
    },
    mounted(){
    this.formData=new FormData()
    },
    computed:{
     
    },
    methods:{
      hideSkelton(payload){
       this.loadSkelton=payload
      },
        submit(){
          this.formData.append('update', 'data')
                this.formData.append('last_name',this.user.last_name)
                this.formData.append('username',this.user.username)
                this.formData.append('password',this.user.password)
                this.formData.append('first_name',this.user.first_name)
                this.formData.append('email',this.user.email)
                this.formData.append('bio',this.user.bio)
                this.formData.append('adres',this.user.adres)
               
                this.$api._post('/users/',this.formData,{cc:{ref:this.$refs.form,fullResponse:'fullResponse'}}).then((res)=>{
                if(res!==undefined){
                  if(res.status==200 && res.data.username ){
                    this.errorMessage=res.data.username
                  }
                  else{
                    this.user=[]
                   this.$refs.form.reset()
                 this.$router.push({path:'/'})
                  }
                  
                }
                })
           
        },
       getAdress(address){

        this.user.bio= address.address?address.address:address.formatted_address
        
        },
        fileChanged(file){
         this.formData.append('avatar', '')
         this.formData.append('avatar', file, file.name)
        },
        removeImg(){
           this.formData.delete('avatar')
        }
        
    
    },
    
 
    
}
</script>


<style>
.bg-img{
   background-image:url('../../assets/images/register.jpg');
   background-size:cover;
}
.pb-200{
  padding-bottom:200px;
}
.draw-border {
  box-shadow: inset 0 0 0 4px #58afd1;
  color: #58afd1;
  transition: color 0.25s 0.0833333333s;
  position: relative;
}
.draw-border::before, .draw-border::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: "";
  pointer-events: none;
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  right: 0;
}
.draw-border::before {
  border-bottom-width: 4px;
  border-left-width: 4px;
}
.draw-border::after {
  border-top-width: 4px;
  border-right-width: 4px;
}
.draw-border:hover {
  color: #fca5a5;;
}
.draw-border:hover::before, .draw-border:hover::after {
  border-color: #fca5a5;
  transition: border-color 0s, width 0.25s, height 0.25s;
  width: 100%;
  height: 100%;
}
.draw-border:hover::before {
  transition-delay: 0s, 0s, 0.25s;
}
.draw-border:hover::after {
  transition-delay: 0s, 0.25s, 0s;
}

.btn {
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1.5;
  padding: 1em 2em;
  letter-spacing: 0.05rem;
}
.btn:focus {
  outline: 2px dotted #fee2e2;
}
.w-96{
  width:96%;
}

</style>