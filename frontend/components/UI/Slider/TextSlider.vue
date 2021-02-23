<template>

    <transition-group name="fade" tag="div">
      <div  class="text-center" v-for="i in [currentIndex]" :key="i">
        <h3 class="text-white text-base relative top-15 meh text-center d-inline-block transform">{{currentTitle}}</h3>
      </div>
    </transition-group>


</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      titles: [
       '  در گیلان طراحی سایت',
       'آموزش شطرنج'
        
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 3000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentTitle: function() {
      return this.titles[Math.abs(this.currentIndex) % this.titles.length];
    }
  }
};
</script>

<style>

.meh{
 display: inline-block;
  width:200px;
  position: absolute;
  left:35%;
  
}
 .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.top-15{
  top:-55px;
}
</style>