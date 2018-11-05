<template lang="html">
  <div class="">
    <b-row>
      <b-col lg="6" md="6">
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

      </b-col>
      <b-col lg="6" md="6">
        <b-card :header="productcode[0].name"
                header-tag="header">
            <p class="card-text">Price</p>
            <h5>450THB</h5>
            <span>Size</span>

            <VFilterSize></VFilterSize>
            <span>Color</span>
            <VFilterColor></VFilterColor>
          <b-button  variant="primary" href="">
              Add To Bag
          </b-button>
          <b-button  variant="primary" href="">
              Add To Whichlist
          </b-button>
        </b-card>
        <p v-b-toggle.collapseA>Details</p>


         <b-collapse id="collapseA" class="mt-1">


         </b-collapse><br>

         <p v-b-toggle.collapseB>Size Chart</p>
         <b-collapse id="collapseB" class="mt-1">

         </b-collapse><br>

      </b-col>
    </b-row>

{{productcode}}

    </div>

</template>

<script>
import VFilterSize from '@/components/product/filter/VFilterSize.vue'
import VFilterColor from '@/components/product/filter/VFilterColor.vue'
export default {
  props: ['productcode'],
  data(){
    return{

    }
  },
  components:{
    VFilterSize,
    VFilterColor
  }
}
</script>

<style lang="css">
</style>
