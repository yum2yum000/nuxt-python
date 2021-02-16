<template>
<div class="container mx-auto p-8 flex bg-img pb-200">
        <div class="max-w-3xl  w-full mx-auto">
            <h1 class="text-4xl text-center mb-12 font-thin text-white">ورود</h1>

            <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
                <div class="p-8">
                    <app-form :onSubmit="submit" ref="form">
                        <input-text label="نام کاربری" v-model="user.username" name="username" :align="'text-left d-ltr'" rules="required"  class="block w-full p-3 rounded border border-transparent "></input-text>
                        <input-text label="رمز عبور" v-model="user.password"  :inputType="'password'" rules="required" name="password" :align="'text-left d-ltr'"  class="block w-full p-3 rounded border border-transparent "></input-text>
                     <h2 class="text-red-600 mr-5">{{errorMessage}}</h2>
                     <div  class="w-full p-3 text-center">
                          <button class="btn draw-border mt-4">ورود</button>
                        </div>
                    </app-form>
                    
                   
                
      
                    </div>
            </div>
        </div>
    </div>
   
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'Login',
    components: {
    },
    data(){
        return{
           user:{

           }
        }
    },
  methods:{
        submit(){
      this.$store.dispatch('login/onSubmit',{ref:this.$refs.form,user:this.user }).then((res)=>{
          if(res===true){
              this.$router.push({path:'/'})
          }
      })
           
        },
       
    
    },
    computed:{
        ...mapState("login",['errorMessage']),
    }
    
 
    
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