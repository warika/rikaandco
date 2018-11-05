<template lang="html">
  <div class="">


    <p v-b-toggle.collapseA>Category</p>

     <!-- elements to collapse -->
     <b-collapse id="collapseA" class="mt-1">
       <VFilterCatagory></VFilterCatagory>
     </b-collapse><br>

     <p v-b-toggle.collapseB>Size</p>
     <b-collapse id="collapseB" class="mt-1">
       <VFilterSize></VFilterSize>
     </b-collapse><br>

     <p v-b-toggle.collapseC>Color</p>
     <b-collapse id="collapseC" class="mt-1">
       <VFilterColor></VFilterColor>
     </b-collapse>
  </div>
</template>

<script>
import VFilterCatagory from '@/components/product/filter/VFilterCatagory.vue'
import VFilterSize from '@/components/product/filter/VFilterSize.vue'
import VFilterColor from '@/components/product/filter/VFilterColor.vue'
export default {
  components:{
    VFilterCatagory,
    VFilterSize,
    VFilterColor
  }
}
</script>

<style lang="css">
</style>
