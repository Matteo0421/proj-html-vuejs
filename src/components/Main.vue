<script>
import {store} from '../data/store'
import Card from './partials/Card.vue';
import MiddleMain from './partials/MiddleMain.vue';
import BlueCarosel from './partials/BlueCarosel.vue';
import EndMain from './partials/EndMain.vue';
  export default {
    components:{
      Card,
      MiddleMain,
      BlueCarosel,
      EndMain
    },
    data(){
      return{
        store
      }
    }
  }
</script>


<template>
<div class="main-container">
  <div class="card-container d-flex justify-content-evenly ">
  <Card v-for=" card in this.store.CardsList"
        :key="card.id"
        :title="card.title"
        :img="card.img"
        />
 </div>

 <MiddleMain />
 <BlueCarosel />
 <EndMain />
</div>
</template>



<style lang="scss" scoped>
 .card-container{
  margin-top: 55px;
 }
</style>