<script>
import axios from 'axios';
import { store } from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue';
  export default {
    components:{
      Header,
      Main,
      Footer
    },
    methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  }
</script>

<template>
  <Header />
  <Main />
  <Footer />
  <button @click="scrollToTop" class="scroll-to-top "><i class="fa-solid fa-up-long"></i></button>

</template>



<style lang="scss" >
@use './assets/scss/main.scss';
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 0;
  z-index: 9999;
  background-color: #41C4FF;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.scroll-to-top:hover {
  background-color: #41C4FF;
}
</style>