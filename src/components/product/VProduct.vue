<template lang="html">
  <div class="">
  <b-container>
    <b-row>
      <b-col md="3" v-for="item in filterDress">
         <b-img @click="openItem(item.code)" thumbnail fluid :src="item.image" />
         <p>{{item.name}}</p>
      </b-col>
    </b-row>
  </b-container>
<input v-on:keyup.enter="doSomething">

  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[
        {code:'1', type:'dress', name:'A Dress', image:'img/104926.jpg'},
        {code:'2', type:'dress',name:'B Dress', image:'img/104926.jpg'},
        {code:'3', type:'dress',name:'C Dress', image:'img/104926.jpg'},
        {code:'d004', type:'dress',name:'D Dress', image:'img/104926.jpg'},
        {code:'d005', type:'dress',name:'E Dress', image:'img/104926.jpg'},
        {code:'t001', type:'top', name:'A Top', image:'img/104926.jpg'},
        {code:'t002', type:'top',name:'B Top', image:'img/104926.jpg'},
        {code:'t003', type:'top',name:'C Top', image:'img/104926.jpg'},
        {code:'t004', type:'top',name:'D Top', image:'img/104926.jpg'},
        {code:'t005', type:'top',name:'E Top', image:'img/104926.jpg'},
        {code:'b001', type:'bottom', name:'A Bottom', image:'img/104926.jpg'},
        {code:'b002', type:'bottom',name:'B Bottom', image:'img/104926.jpg'},
        {code:'b003', type:'bottom',name:'C Bottom', image:'img/104926.jpg'},
        {code:'b004', type:'bottom',name:'D Bottom', image:'img/104926.jpg'},
        {code:'b005',type:'bottom',name:'E Bottom', image:'img/104926.jpg'}
      ]
    }
  },

  methods:{
    doSomething(){
      console.log('Hello');
    },
    openItem(code){
      this.$router.push('/product/detail/'+code)
    }

  },
  computed:{
    filterDress(){
      return this.items.filter( v=> v.type == this.$route.params.type)

    }
  }
}
</script>

<style lang="css" scoped>

</style>
