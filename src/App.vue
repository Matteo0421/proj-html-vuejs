<script>
import axios from 'axios';
import { store } from './data/store'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import JumboTron from './components/JumboTron.vue';
  export default {
    components:{
      Header,
      Main,
      JumboTron
    }
  }
</script>

<template>
  <Header />
  <Main />
  <JumboTron />
</template>



<style lang="scss" >
@use './assets/scss/main.scss';
</style>