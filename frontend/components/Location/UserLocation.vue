<template>


 <div >
   <div v-if="$fetchState.pending"><img class="w-full"  src="@/assets/images/image-loader.gif" /></div>
  
   <div v-else class="flex p-3 border-light-gray-100 border-opacity-25 md:w-2/3 sm:w-full relative top-60 z-500">
     
            <multiselect  placeholder="جستجوی آدرس"
                                             v-model="adress"
                                             :options="options"
                                             :selectLabel=" label"
                                             :hide-selected="true"
                                             selectedLabel="انتخاب شده"
                                             deselectLabel="حذف"
                                             label="address"
                                             track-by="address"
                                             openDirection="bottom"
                                             :showNoOptions="false"
                                             :optionHeight="7"
                                             @search-change="service"
                                             @select="getCordinate"
                                             :internalSearch="false"
                                             :closeOnSelect="true"
                                             :preserveSearch="true" >
                                    <template slot="noResult" class="text-right">گزینه‌ای یافت نشد</template>

                                </multiselect>
     </div>
<l-map 
      :zoom="zoom"
      :options="mapOptions"
      :center="center"    
      style="height: 500px; width: 100%"
    >
   
      <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
        :token="token"
        layer-type="base"
      />
      
      <l-marker
         @click="addMarker"
    
        :visible="true"
        :draggable="true"
        :lat-lng.sync="position"
       
        
      >
        <l-popup content="مکان" />
        <l-tooltip content="مکان" />
      </l-marker>
  
     
    </l-map>
    
 </div>

 
</template>

<script>
import { latLngBounds,latLng } from 'leaflet';
fetchOnServer:false

export default {
  name: 'Example',
  components: {
   
  },
  async fetch(){
   await this.fetchProvider()
   this.$emit('hideSkelton',false)
  },
  
  data() {
    return {
       value: "",
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP", $isDisabled: true }
      ],
      center: [35.635869336294625, 51.3500976562500],
      opacity: 0.6,
      token: 'your token if using mapbox',
      mapOptions: {
      
        zoomSnap:true,
      },
      zoom: 12,
      minZoom: 1,
      maxZoom: 20,
      zoomPosition: 'topleft',
      attributionPosition: 'bottomright',
      layersPosition: 'topright',
      attributionPrefix: 'Vue2Leaflet',
      imperial: false,
      Positions: ['topleft', 'topright', 'bottomleft', 'bottomright'],
      tileProviders: this.tileProviders,
       position: { lat: 35.635869336294625, lng:51.3500976562500 },
       currentAdress:'',
       gettingLocation:false,
       search:'',
       options: [
                ],
       searchData:true,
      label:'',
      adress: null,
      cordinate:''
      
   
    };
  },
    mounted() {
  this.position={ lat: 35.635869336294625, lng:51.3500976562500 }
      },
  watch:{
           adress:function(value){
             
             this.position={ lat: value.geom.coordinates[1], lng: value.geom.coordinates[0] }
               this.center = latLng(value.geom.coordinates[1], value.geom.coordinates[0]);
             console.log(this.position)
            
              
            },
        },
  methods: {
    fetchProvider(){
     this.tileProviders=[
  {
    name: 'OpenStreetMap',
    visible: true,
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  }
];

    },
    getLocation(){
    let search=this.search
    console.log(this.search)
  this.service(search)
    },
    show(item) {
      console.log(item)
    },
    addMarker(event) {
    this.$axios.$get(`https://api.neshan.org/v2/reverse?lat=${event.latlng.lat}&lng=${event.latlng.lng}`,{headers:{
     'Api-Key':'service.rdleiG7JNb00Zkrh57VDYSwTLCfEWxXVOlcJkTly'}
   })
   .then(res=>{
      this.currentAdress=res
      console.log('123',this.currentAdress)
     this.$emit('adress', this.currentAdress)
   }).catch(e=>console.log(e.response))

    },
    service(search){
     if(search.length>1){
       this.$axios.post(`https://map.ir/search/v2/autocomplete`,{text:search},{headers:{
         'Content-Type': 'application/json',
     'x-api-key':'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjkyMjY1ZTQzNjQzNTNmNzgwYWU4Y2RjNTI3M2YwOWVkMTZkNWE1ODA4MjdmYjY3MzMwNjBjMWNkZDg2NzQyMmRmZGQ5YTdiMmYzM2Y1N2YzIn0.eyJhdWQiOiIxMjU3NyIsImp0aSI6IjkyMjY1ZTQzNjQzNTNmNzgwYWU4Y2RjNTI3M2YwOWVkMTZkNWE1ODA4MjdmYjY3MzMwNjBjMWNkZDg2NzQyMmRmZGQ5YTdiMmYzM2Y1N2YzIiwiaWF0IjoxNjEyMDg1Mjg3LCJuYmYiOjE2MTIwODUyODcsImV4cCI6MTYxNDg1MDA4Nywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.MeAQn-E4P8Oh6o47dym7TiGdQ--gVB-a5vp8gUahRnMr_Mn7qV4NS7JdU2P-fqhCDXCXK5hCZP9x5_9rH5AlpiAjwRy8QYV_nbTK4Mso8QadumY3owX1UhxL5YvDhM9W0wj92pdNSP_cGGZmzw56Qom_UWX3x6WEG-9EE_DyLQk3fGVqCH-x679PvUXthMtTxUvz0-kalBsIrOocrzin3E43gVjG44Hiro1gdHojQNCcpd_EypF5Rn2V7OyeHxnfahxQvoAqLNlGUIfY5aOHj_QIl3mp4tY3sSk87PJ_r6Y6BII5MJgUk3DhIezOpi1uPkV_a4Dm3YeVWNH5IuPl_A'}
   }).then(res=>{
     this.options=res.data.value
     this.zoom=18
     this.currentAdress=this.options
     
   }).catch((e)=>{
     console.log(e.response)
   })}
    },
     onSelect(option, id) {
      console.log(option, id);
    },
    getCordinate(selectedAdress){
     console.log('44',selectedAdress)
     this.$emit('adress', selectedAdress)
    }
   
  },
};
</script>

<style>
.top-60{
  top:60px;
}
.z-500{
  z-index: 500;
}
.multiselect__select{
  display:none!important;
}
.multiselect__tags {
    text-align: right!important;;
    padding: 8px 11px 0 8px!important;
    
}
.multiselect__option{
  text-align: right;
}
</style>
