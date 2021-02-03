<template>
  <client-only>
    <div class="w-full text-gray-700  dark-mode:text-gray-200 dark-mode:bg-gray-800 bg-brand-blue">
        <div  class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          
            <nav  class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-start md:flex-row">

              <template v-for="(menu) in  menus" >
                <div :key="menu.id" class="flex relative ">
                 <nuxt-link v-if="menu.subMenu.length==0" :to="menu.menuTitle"   class="px-4 pt-menu py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">{{menu.menuTitle}}
               </nuxt-link>
              
              <div v-else  class="relative flex h-14" :key="menu.id" @mouseenter="[setActive(menu),open=true]" @mouseleave="open=false">
                <button   class="flex flex-row items-center w-full px-4 py-2 mt-2 p-5 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                         <nuxt-link :to="localePath(menu.menuTitle)">{{menu.menuTitle}}</nuxt-link>
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
            <div class="flex flex-row items-center justify-between p-4">
               
                <a href="#" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Flowtrail UI</a>
                <side-toggle @sideShow="openSidebar"></side-toggle>
            </div>

            
        </div>
    </div>

  </client-only>
  
</template>

<script>
import NavbarMixin from '@/mixins/NavbarMixin'
export default {
  data(){
    return{
     open:false,
     menuHasImg:-1,
     
    }
  },
  mixins:[NavbarMixin],
  methods:{
    setActive(menu){
    this.dropShow=menu.menuTitle
    this.menuHasImg=menu.subMenu.findIndex(item => item.img != undefined);
    },
    openSidebar(){
      this.$emit('openSidebar')
    }
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

</style>