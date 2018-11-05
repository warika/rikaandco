<template lang="html">

    <b-row>
      <b-col lg="6" md="6" >
        <VProductImage></VProductImage>
      </b-col>
      <b-col lg="6" md="6"  >
        <VProductDetailInfo></VProductDetailInfo>
      </b-col>
    </b-row>

</template>

<script>
import VProductImage from '@/components/product/VProductImage.vue'
import VProductDetailInfo from '@/components/product/VProductDetailInfo.vue'
export default {


  components:{
    VProductDetailInfo,
    VProductImage
  }
}
</script>

<style lang="css">
</style>
