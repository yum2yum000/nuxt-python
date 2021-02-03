<template>
    <validation-provider v-slot="{errors}" :name="name" :vid="name" :rules="rules">
     
      <label  class="block mb-2 text-sm font-medium text-gray-600">{{label}}</label>
        <input v-if="controlType === 'input'" :class="$attrs.align" class="hover:outline-none focus:outline-none p-3 w-full h-12 bg-gray-200" :type="inputType" v-bind="$attrs" v-on="{...$listeners,input}" :value="value">
       <textarea v-if="controlType === 'textarea'" :class="$attrs.align" class="hover:outline-none focus:outline-none p-3 w-full h-12 bg-gray-200" :type="inputType" v-bind="$attrs" v-on="{...$listeners,input}" :value="value"></textarea>
        <div v-if="errors && errors.length>0">{{errors[0]}}</div>
    </validation-provider> 
</template>

<script>
 import {ValidationProvider} from 'vee-validate';
export default {
  name: "InputText",
  inheritAttrs:false,
  components:{
            ValidationProvider
        },
    data(){
    return{


    }
  },     
  props:{
    controlType:{
      type:String,
      default:'input'
    },
    inputType:{
      type:String,
      default:'text'
    },
    value:{
      type:String,
      default:''
    },
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
   input(e){
     this.$emit("input",e.target.value)
   }
  }
}
</script>
<style>
.w-50{width: 50%;}
</style>