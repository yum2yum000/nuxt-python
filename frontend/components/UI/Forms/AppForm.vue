<template>
    <validation-observer v-slot="{ handleSubmit}" ref="validation">
        <form @submit.prevent="handleSubmit(onSubmit)" class="flex flex-wrap">
            <slot></slot>
        </form>
    </validation-observer>
</template>

<script>
    import {ValidationObserver} from 'vee-validate';
    export default {
        name: "AppForm",
        inheritAttrs:false,
        components:{
            ValidationObserver
        },
        props:{
            onSubmit:{
                type:Function,
                required:true
            }
        },
        methods:{
            addError(key,value){
                console.log(key)
                 console.log(value)
                
                this.$refs.validation.setErrors({
                   [key]:value
                })
            },
            reset(){
                this.$refs.validation.reset()
            }
        }
    }
</script>

<style scoped>

</style>