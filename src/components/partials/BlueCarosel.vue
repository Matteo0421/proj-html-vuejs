<script>
import { store } from '../../data/store';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
  props: {
    id: Number,
    name: String,
    description: String,
    status: String,
    img: String
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
  <div v-if="store.BlueCarosel" class="swiper-container">
    <swiper
      :pagination="{
        dynamicBullets: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="card in store.BlueCarosel" :key="card.id">
        <div class="slide-carosel d-flex flex-column justify-content-center align-items-center">
          <img :src="card.img" alt="" class="mb-5">
          <p class="mb-4 text-white text-center ">{{ card.descriptiom }}</p>
          <h4 class="mb-3 text-white">{{ card.name }}</h4>
          <span class="text-white">{{ card.status }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>



<style lang="scss" scoped>
.slide-carosel {
  width: 70%;
  margin: 0 auto;
  margin-top: 120px;
  margin-bottom: 120px;
}

img {
  width: 120px;
}

::v-deep .swiper-pagination-bullet {
  background-color: white; /* Imposta il colore del pallino a bianco */
}
</style>
