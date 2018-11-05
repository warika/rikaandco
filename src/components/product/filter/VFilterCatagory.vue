<template lang="html">
  <div class="">
    <b-list-group v-for="item in items">
      <router-link :to="item.to">{{item.text}}</router-link>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data(){
    return {
      items:[
        {to:'/product/newin',text:'NewIb'},
        {to:'/product/sale',text:'Sale'},
        {to:'/product/dress',text:'Dress'},
        {to:'/product/top',text:'Top'},
        {to:'/product/bottom',text:'Bottom'}
        ]
    }
  }
}
</script>

<style lang="css">
</style>
