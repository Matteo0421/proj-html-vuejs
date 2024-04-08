<script>
import {store} from '../data/store'
import Card from './partials/Card.vue';
  export default {
    components:{
      Card,
    },
    data(){
      return{
        store
      }
    }
  }
</script>


<template>
 <div>
  <Card v-for=" card in this.store.CardsList"
        :key="card.id"
        :title="card.title"
        :img="card.img"
        />
 </div>
</template>



<style lang="scss" scoped>

</style>