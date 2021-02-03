<template>
  <div>
   
    <nav-bar @openSidebar="show=!show"></nav-bar>
    <side-bar :show="show"></side-bar>
  </div>
</template>

<script>
export default {
  name:'home',
  data(){
    return{
      show:false
    }
  }
 
};
</script>