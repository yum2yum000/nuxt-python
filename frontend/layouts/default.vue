<template>
  <div>
      <nav-bar @openSidebar="show=!show"></nav-bar>
    <side-bar :show="show"></side-bar>
    <Nuxt />
 
  </div>
</template>

<script>

export default {
  data(){
    return{
      show:false
    }
  },
 
}
</script>