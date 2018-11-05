<template lang="html">
  <b-container>
    <b-row>
      newin
      <!-- <b-col md="3" v-for=" n in 5">
         <b-img @click="openItem" thumbnail fluid src="https://picsum.photos/250/250/?image=54" />
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
