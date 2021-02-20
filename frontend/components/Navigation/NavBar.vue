<template>
  <client-only>
    <div class="w-full text-gray-700  dark-mode:text-gray-200 dark-mode:bg-gray-800 bg-brand-blue">
        <div  class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          
            <nav  class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-start md:flex-row">

              <template v-for="(menu) in  menus" >
                <div :key="menu.id" class="flex relative ">
                 <nuxt-link v-if="menu.subMenu.length==0" :to="menu.route"   class="px-4 pt-menu py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">{{menu.menuTitle}}
               </nuxt-link>
              
              <div v-else  class="relative flex h-14" :key="menu.id" @mouseenter="[setActive(menu),open=true]" @mouseleave="open=false">
                <button   class="flex flex-row items-center w-full px-4 py-2 mt-2 p-5 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                      <nuxt-link :to="localePath(menu.route)">{{menu.menuTitle}}</nuxt-link>
                         <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': dropShow==menu.menuTitle && open, 'rotate-0': !dropShow==menu.menuTitle && open}" class="inline w-4 h-4 ml-1 transition-transform duration-200 transform "><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>     
                    </button>
                        <div  :class="[(dropShow==menu.menuTitle && open)?'block':'hidden',menuHasImg==-1?'w-9':'w-600 flex flex-wrap']"  class=" w-400 p-2 mt-36 bg-white  absolute right-0 w-full  origin-top-right rounded-md shadow-lg md:w-48 z-30">
                            <template v-for="(subMenu,index) in menu.subMenu" >
                            <a  v-if="subMenu.img==undefined" :key="index" class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                               {{subMenu.name}} 
                            </a>
                               
                               
                                <div :key="index" v-else class="w-50">
                                  <a  class="flex flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                                  <div class="ml-3 p-5 flex flex-grow justify-start">
                                    <p class="text-sm">{{subMenu.name}}</p>
                                  </div>
                                 
                                  <div class="bg-teal-500 text-white rounded-lg ">
                                    <img :src="subMenu.img" alt="" class="h-14 w-30 ">
                                  </div>
                                  
                                </a>
                                </div>
                              
                        
                           
                            </template>
                    </div>
               </div>
               </div>
                </template>

             
                
            </nav>
            <div class="flex flex-row-reverse items-center justify-between ">
               
                <div class="flex justify-center ">
  <!-- Dropdown -->
 <template v-if="!showName">
  
     <nuxt-link to="/login" class="flex"> <img  class="flex h-full w-7 object-cover" src="@/assets/images/login.png" alt="avatar"> 
    <span class="mr-1">ورود</span></nuxt-link>
    
       <nuxt-link to="/register" class="flex mr-5">
         <img  class="h-full w-7 object-cover" src="@/assets/images/register.png" alt="avatar"> 
      <span class="mr-1"> ثبت نام</span>
       </nuxt-link>
 </template >
  <div v-else class="relative dropdown ">
    <span v-if="showName" class="absolute position-user">{{showName}}</span>
    <button class="block w-35 h-35 ml-1 rounded-full overflow-hidden focus:outline-none" >
      <img  v-if="showImg" class="h-full w-full object-cover" :src="getUrl+showImg" alt="avatar">
      <img  v-else class="h-full w-full object-cover" src="@/assets/images/default.jpg" alt="avatar">
      
    </button>
    
    <!-- Dropdown Body -->
    <div class="absolute right-0 w-24 margin-2  bg-white border rounded shadow-xl dropdown-menu">   
      
      <nuxt-link to="/profile" class="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white">پروفایل</nuxt-link>
      
        <hr>
  
    <button @click="logout" class="transition-colors w-full duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-500 hover:text-white focus:outline-none">    
      خروج
    </button>
  </div>
  <!-- // Dropdown Body -->
  </div>
  <!-- // Dropdown -->
</div>
                <side-toggle @sideShow="openSidebar"></side-toggle>
            </div>

            
        </div>
    </div>

  </client-only>
  
</template>

<script>
import NavbarMixin from '@/mixins/NavbarMixin'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
     open:false,
     menuHasImg:-1,
     
    }
  },
  mixins:[NavbarMixin],
   computed:{
        ...mapGetters("profile",['getDisplayName']),
        fas () {
         return fas
      },
      showName(){
        return this.getDisplayName?.username?.substr(0, 4);
      },
      showImg(){
         return this.getDisplayName.avatar
      },
      getUrl(){
        return this.$baseUrl
      }
    },
  methods:{
    logout(){
    this.$store.dispatch('auth/logout')
    },
    setActive(menu){
    this.dropShow=menu.menuTitle
    this.menuHasImg=menu.subMenu.findIndex(item => item.img != undefined);
    },
    openSidebar(){
      this.$emit('openSidebar')
    },
    
  }
    
}
</script>


<style>
.pt-menu{
  padding-top:17px;
}
.w-600{
  width: 600px;
}
.w-50{
  width: 50%;
}
.dropdown-menu {
  display: none;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
.margin-2{
  margin-top: 1px;
}
.position-user{
    left:-30px;
    top: 25%; 
}
@media(max-width:800px){
  .position-user{
    left:40px!important;
    top: 25%; 
}
}
.w-35{
  width:35px;
}
.h-35{
  height:35px;
}
</style>