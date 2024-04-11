<script>
import CardCourses from './CardCourses.vue';
import { store } from '../../data/store';
// Importa i componenti Swiper Vue.js
import { Swiper, SwiperSlide } from 'swiper/vue';

// Importa gli stili di Swiper
import 'swiper/css/bundle'; // Importa tutti gli stili di Swiper

  export default {
    components: {
      Swiper,
      SwiperSlide,
      CardCourses
    },
    setup() {
      return {
        store
      };
    },
  }
</script>

<template>
  <div class="swiper-container">
    <swiper :watchSlidesProgress="true" :slidesPerView="3" class="mySwiper">
      <swiper-slide v-for=" card in store.CardsListCorses" :key="card.id">
        <CardCourses 
        :key="card.id"
        :title="card.title"
        :img="card.img"
        :author="card.author"
        :descriptiom="card.descriptiom"
        :number="card.number"
        :profession="card.profession"
  />
      </swiper-slide>
    </swiper>
  </div>
</template>





<style lang="scss" scoped>
.swiper-container {
  width: 80%;
  margin: 0 auto;
}

.swiper-slide {
  width: auto !important; 
}



</style>