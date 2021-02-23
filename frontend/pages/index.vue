<template>
  <div>
   <div class="rx-main-search"></div>
   <div class="bg-curve  hidden-sm hidden-md hidden-xs">
     <div class="grid grid-cols-2">
   
  <div class="relative top-200 flex justify-center"> <img  class="h-full w-8/12 object-cover" src="@/assets/images/slide.svg" alt="avatar"> </div>
   <div>
     <div class="transform top-title relative text-xl text-center text-white"><h1>روکسو مرجع آموزش آنلاین</h1><div>«هدف، رویایی با ددلاین مشخص است»</div></div>
      <text-slider class="relative"></text-slider>
   </div>

  
</div>
   </div>
     
  </div>
</template>

<script>
export default {
  name:'home',
  data(){
    return{
      
    }
  }
 
};
</script>
<style>
.rx-main-search {
       min-height: 450px;
    position: relative;
    background: linear-gradient( 
360deg
 ,#5167a6 0,#d5deec 78%);
    background: linear-gradient( 
360deg
 ,#609eec 0,#d1d5db 78%);
}
.bg-curve {
    background-image: url(https://www.roxo.ir/home/images/bg-curve.svg);
    background-size: 100% 250px;
    bottom: 0;
    height: 250px;
    transform: rotateY(
180deg
);
    margin-top: -200px;
}
.top-200{
  top:-220px!important;
}
.top-title{
  top:-100px;
}


</style>