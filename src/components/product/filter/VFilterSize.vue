<template lang="html">
  <div class="">
    <b-list-group v-for="item in items">
       <b-form-checkbox >{{item}}</b-form-checkbox>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data(){
    return {
      items:[
        'Free size',
        'S',
        'M',
        'L',
        'XL'
      ]
    }
  }
}
</script>

<style lang="css">
</style>
