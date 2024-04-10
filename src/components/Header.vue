<script>
import {store} from '../data/store'
import Navbar from './partials/Navbar.vue';
import CaroselHeader from './partials/CaroselHeader.vue';
  export default {  
    data(){
      return{
        store,
      }
    },
    components: {
    Navbar,
    CaroselHeader
  },

    
  }
</script>


<template>
<body>
<Navbar />

<CaroselHeader />

</body>
</template>



<style lang="scss" scoped>

body{
  background-image: url(../img/course-9-f-img.jpg);
  background-size: cover;  
  height: 770px;
}
body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 770px;
  background-color: rgba(0, 0, 0, 0.3); 
}
</style>