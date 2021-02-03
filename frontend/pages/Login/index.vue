<template>
<div class="container mx-auto p-8 flex">
        <div class="max-w-md w-full mx-auto">
            <h1 class="text-4xl text-center mb-12 font-thin">ورود</h1>

            <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
                <div class="p-8">
                    <app-form :onSubmit="submit">
                        <input-text label="ایمیل" v-model="form.email" class="block w-full p-3 rounded border border-transparent "></input-text>
                        
                    </app-form>
                    
                </div>
                
                <div class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                    <a href="#" class="font-medium text-indigo-500">Create account</a>

                    <a href="#" class="text-gray-600">Forgot password?</a>
                </div>
            </div>
        </div>
    </div>
   
</template>

<script>
export default {
    name:'Login',
    data(){
        return{
            form:{
                email:''
            }
        }
    },
    methods:{
        submit(){
            console.log('ff')
        }
    }
 
    
}
</script>


<style>

</style>