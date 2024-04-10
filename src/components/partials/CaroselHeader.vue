<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';


  // import required modules
  import { Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
  };
</script>

<template>
  <swiper
    :pagination="{
      dynamicBullets: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="slide-carosel d-flex flex-column justify-content-center align-items-center">
      <img src="../../img/img-secondarie/testimonials-standard-2.png" alt="2" class="mb-4">
      <p class="mb-4 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo praesentium ea dolore esse dicta recusandae nemo fuga mollitia sint nulla incidunt quod ipsam ab omnis eum soluta nostrum doloribus, unde consequatur quam repellat accusamus. Corporis quibusdam voluptatem praesentium amet odio omnis eveniet temporibus reprehenderit, mollitia tenetur magnam voluptas fugiat quos.</p>
      <h5 class="mb-3 text-white">Joan Collins</h5>
      <span class="text-white">STUDENT</span>
    </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-carosel d-flex flex-column justify-content-center align-items-center">
      <img src="../../img/img-secondarie/testimonials-standard-2.png" alt="2" class="mb-4">
      <p class="mb-4 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo praesentium ea dolore esse dicta recusandae nemo fuga mollitia sint nulla incidunt quod ipsam ab omnis eum soluta nostrum doloribus, unde consequatur quam repellat accusamus. Corporis quibusdam voluptatem praesentium amet odio omnis eveniet temporibus reprehenderit, mollitia tenetur magnam voluptas fugiat quos.</p>
      <h5 class="mb-3 text-white">Joan Collins</h5>
      <span class="text-white">STUDENT</span>
    </div>
    </swiper-slide>
  </swiper>
</template>





<style lang="scss" scoped>
.slide-carosel{
  width: 70%;
  margin: 0 auto;
  margin-top: 120px;
  margin-bottom: 120px;
}img{
  width: 120px;
}
::v-deep .swiper-pagination-bullet {
  background-color: white; /* Imposta il colore del pallino a bianco */
}
</style>