<template>
    <div class="pr-4 pt-3">
        <input type="file" @change="onFileChanged" style="display:none" ref="fileInput" accept="image/*">
        <button class="primary btn-img btn--radius-2" @click.prevent="onPickFile">انتخاب عکس</button>
        <div v-if="imageUrl" class="mt-2 relative text-left ">
         
         <img  :src="imageUrl" height="150" class="w-48 top-0 left-0" @load="load">
         <span class="removeImg cursor-pointer top-0" @click=" removeImgPreview">
             <fa :icon="fas.faTimes"/>
        </span>
        </div>

        <slot v-if="loading" name="preloader" />
        <div v-if="error">فرمت فایل ارسالی معتبر نمی باشد.</div>
           
    </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
export default {
    props:{
    imgLoading:{
         type:Boolean,
         default:true
     }
    },
    data(){
        return{
         loading: false,
         imageUrl :null,
         error:false
        }
    },
    methods:{
        load(e){
            this.loading=false
        },
        onFileChanged(event){
            this.error=false
             
                   const file = event?.target?.files[0]
                if(file){
                    this.loading=true
                    let filename=file.name
                
                if(filename.lastIndexOf('.')<=0 || file.type.substr(0, 5)!='image'){
                    // this.error='فرمت مناسب انتخاب کنید'
                    console.log('55')
                    this.imageUrl=null
                    this.loading=false
                    this.error=true
                }
               
                  else{
                      this.imageUrl = URL.createObjectURL(file)
                  this.$emit('fileChanged',file)
                  }
                }
             
              
              
    },
            onPickFile(){
                this.$refs.fileInput.click()

            },
            removeImgPreview(){
               this.imageUrl=null
                this.$emit('removeImg')

            },
    },
    computed: {
      fas () {
         return fas
      },}
}
</script>


<style>
.btn-img{
    padding:5px;
    color:white!important;
    background: linear-gradient(
315deg
, #c0c1c4 40%, rgb(178 178 178) 100%)!important;
}
.btn-img:focus{
    border:0;
    outline:0
}

    .removeImg{
        position: absolute;
        color: red;

    }
</style>