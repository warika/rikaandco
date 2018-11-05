<template lang="html">
  <b-carousel id="carousel1"
        style="text-shadow: 1px 1px 2px #333;"
        controls
        indicators
        thumbnail fluid
        background="#ababab"
        :interval="3000"

        v-model="slide"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd">
    <b-carousel-slide  img-src="https://picsum.photos/1024/480/?image=58">
    </b-carousel-slide>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
    </b-carousel-slide>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
    </b-carousel-slide>
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
    </b-carousel-slide>
  </b-carousel>


</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
   onSlideStart (slide) {
     this.sliding = true
   },
   onSlideEnd (slide) {
     this.sliding = false
   }
}
}
</script>

<style lang="css">
</style>
