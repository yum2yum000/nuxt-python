<template>
   <div v-if="isMobileDevice" class="flex-col w-full md:flex md:flex-row md:min-h-screen"  >
        <div v-if="show" class="flex flex-col flex-shrink-0 w-full text-gray-700 bg-white md:w-64 dark-mode:text-gray-200 dark-mode:bg-gray-800">
         
                <nav  class="bg-gray-300 ease-out motion-safe:animate-spin text-right flex-grow px-4 pb-4 md:block md:pb-0 md:overflow-y-auto">
                <template v-for="(menu) in  menus" >
                <div :key="menu.id" class="flex relative ">
                 
                <nuxt-link v-if="menu.subMenu.length==0" :to="menu.menuTitle"   class="px-4 pt-menu py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">{{menu.menuTitle}}

                </nuxt-link>
              <div v-else  class="relative flex h-14" :key="menu.id" @click="[setActive(menu),open=!open]" >
                <button   class="flex flex-row items-center w-full px-4 py-2 mt-2 p-5 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                         <span>{{menu.menuTitle}}</span>
                         <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': dropShow==menu.menuTitle && open, 'rotate-0': !dropShow==menu.menuTitle && open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>     
                    </button>
                        <div  :class="[(dropShow==menu.menuTitle && open)?'block':'hidden']"  class=" w-200 p-2 mt-36 bg-white  absolute right-0  origin-top-right shadow-lg md:w-48 z-30">
                            <template v-for="(subMenu,index) in menu.subMenu" >
                            <a  v-if="subMenu.img==undefined" :key="index" class="w-48 block px-4 py-2 mt-2 text-sm font-semibold bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                               {{subMenu.name}}
                            </a>
                               
                               
                                <div :key="index" v-else >
                                  <a  class="w-48 flex flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">
                                  <div class="ml-3 p-1 flex flex-grow justify-start">
                                    <p class="text-sm">{{subMenu.name}}</p>
                                  </div>
                                  <div class="bg-teal-500 text-white rounded-lg ">
                                    <img :src="subMenu.img" alt="" class="h-8 w-30 ">
                                  </div>
                                </a>
                                </div>
                              
                        
                           
                            </template>
                    </div>
               </div>
               </div>
                </template>


                </nav>
              
                 </div>
           
            
                   
    </div>
  
</template>

<script>
import isMobile from "@/helpers/isMobileDevice";
import NavbarMixin from '@/mixins/NavbarMixin'
export default {
    props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  mixins:[NavbarMixin],
  data(){
    return{
        open:false,
        isMobileDevice: isMobile,
  
    }
    },
  
  methods:{
      setActive(menu){
    this.dropShow=menu.menuTitle
    },
    hide(){
  this.open=false
    },
    
  }
}
</script>


<style>


</style>