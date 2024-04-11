<script>
import { store } from '../../data/store';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
  props: {
    id: Number,
    title: String,
    description: String,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      store,
      modules: [Pagination],
    };
  },
};
</script>

<template>
  <div v-if="store.HeaderCarosel">
    <swiper
      :pagination="{
        dynamicBullets: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="card in store.HeaderCarosel" :key="card.id">
        <div class="slide-carosel d-flex flex-column justify-content-center align-items-center">
          <h1 class="text-center text-white">{{ card.title }}</h1>
          <p class="text-center mt-5 text-white">{{ card.description }}</p>
          <button class=" my-btn-2 text-white mt-4">REGISTER NOW</button>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>


<style lang="scss" scoped>
.slide-carosel{
  width: 70%;
  margin: 0 auto;
  margin-top: 120px;
  margin-bottom: 120px;
}h1{
  font-size: 3rem;
  margin-top: 50px;
}.my-btn-2{
  background-color: #41C4FF;
  border: none;
  padding: 20px 35px;
}


:deep(.swiper-pagination-bullet) {
  background-color: white; /* Imposta il colore del pallino a bianco */
}
</style>
