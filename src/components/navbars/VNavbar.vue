<template lang="html">
  <b-navbar toggleable="md" type="dark" variant="info" sticky>

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">NavBar</b-navbar-brand>

  <!-- <b-collapse is-nav id="nav_collapse"> -->

    <b-navbar-nav v-for="item in items">
      <!-- <b-nav-item to="/" exact>home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item> -->
      <!-- <b-nav-item to="/product/newin">NewIn</b-nav-item>
      <b-nav-item to="/product/dress">NewIn</b-nav-item> -->
      <b-nav-item :to="item.to">{{item.text}}</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav >
      <!-- <b-nav-item to="/" exact>home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item> -->
      <!-- <b-nav-item to="/product/newin">NewIn</b-nav-item>
      <b-nav-item to="/product/dress">NewIn</b-nav-item> -->
      <b-nav-item >
         <i class="fa fa-fw fa-envelope"></i> 
      </b-nav-item>
    </b-navbar-nav>


    <!-- Right aligned nav items -->

  <!-- </b-collapse> -->
</b-navbar>

</template>

<script>
export default {
  data(){
    return{
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
