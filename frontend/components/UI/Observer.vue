<template>
  <div class="observer" ref="observer"></div>
</template>

<script>
export default {
  props: ['options'],
  data: () => ({
    observer: null,
  }),
  mounted() {
    const options = this.options || {};
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit("intersect");
      }
    }, options);

    this.observer.observe(this.$refs.observer);
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>