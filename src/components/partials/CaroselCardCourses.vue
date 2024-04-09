<script>
import CardCourses from './CardCourses.vue';
import { store } from '../../data/store';

  export default {
    components:{
      CardCourses
    },
  }
</script>

<template>
  <div>
    <CardCourses v-for=" card in store.CardsListCorses"
        :key="card.id"
        :title="card.title"
        :img="card.img"
  />
  </div>
</template>


<style lang="scss" scoped>

</style>