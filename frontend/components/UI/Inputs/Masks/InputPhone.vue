<template>
    <validation-provider v-slot="{errors}" :name="name" :vid="name" :rules="rules">
     
      <label  class="block mb-2 text-sm font-medium text-gray-600">{{label}}</label>
        <input :class="$attrs.align" v-model="computedphone" class="hover:outline-none focus:outline-none p-3 w-full h-12 bg-gray-200" type="text" v-bind="$attrs" v-on="{...$listeners}">
       
        <div v-if="errors && errors.length>0">{{errors[0]}}</div>
    </validation-provider> 
</template>

<script>
 import {ValidationProvider} from 'vee-validate';
export default {
  name: "InputPhone",
  inheritAttrs:false,
  components:{
            ValidationProvider
        },
    data(){
    return{
     value:''
    }
  },     
  props:{
    
     label:{
      type:String,
      default:''
    },
    
     name:{
          type:String,
          default:''
            },
            rules:{
                type:String,
                default:''
            },
    

  },
  methods:{
   
  },
  computed:{
     computedphone:{
         get(){
           if(! /^09/.test(this.value))
           {
            return '09'+this.value
           }
        
          return this.value
         },
         set(value){
           if(! /^09/.test(value))
           {
            value='09'
          this.value=value
           }
         
          this.value=value
         }
     }
    },
    watch:{
     computedphone:{
        handler(newValue){
            console.log('newValue',newValue)
         this.$emit("input",newValue)
        },
        deep:true
      }
    },
}
</script>
<style>
.w-50{width: 50%;}
</style>