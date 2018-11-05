<template lang="html">
  <div class="">
    <b-container>
      <b-row>
        <b-col lg="12" md="12" >
        <VProductDetailInfo :productcode="filterCode"></VProductDetailInfo>
        </b-col>
      </b-row>
    </b-container>


  </div>
</template>

<script>
// import VProductImage from '@/components/product/VProductImage.vue'
import VProductDetailInfo from '@/components/product/VProductDetailInfo.vue'
export default {
  data(){
    return{
      products:[
        {
          code:'1',
          name:'Make A Pass Top In White',
          price:'450',
          size:['S','M'],
          color:['white','red'],
          description:'cotton 100%'

        },
        {
          code:'2',
          name:'A Make A Pass Top In White',
          price:'450',
          size:['S','M'],
          color:['white','red'],
          description:'cotton 100%'

        }

      ]
    }
  },

  components:{
    VProductDetailInfo
    // ,
    // VProductImage
  },
  computed:{
    filterCode(){
        return this.products.filter( v=> v.code == this.$route.params.id)
    }


  }
}
</script>

<style lang="css">
</style>
