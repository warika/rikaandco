<template lang="html">
  <b-container>
    <b-row>
      <b-col md="3">
        <router-view name="filter"></router-view>
      </b-col>
      <b-col md="9">
        {{$route.params.type}}
        <router-view></router-view>

      </b-col>
    </b-row>
    
  </b-container>
</template>

<script>

export default {
}
</script>

<style lang="css">
</style>
