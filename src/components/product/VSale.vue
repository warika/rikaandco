<template lang="html">
  <b-container>
    <b-row>
      sale
      <!-- <b-col md="3" v-for=" n in 5">

      </b-col> -->
    </b-row>
  </b-container>
</template>

<script>
export default {

  methods:{
    openItem(){
      this.$router.push('/product/detail/1')
    }
  }
}
</script>

<style lang="css">
</style>
