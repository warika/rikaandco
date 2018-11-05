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
        'White',
        'Black',
        'Red',
        'Pink',
        'Green',
        'Yellow',
        'Brown',
        'Purple',
        'Blue',
        'Deep Blue'

      ]
    }
  }
}
</script>

<style lang="css">
</style>
