<script>
import {store} from '../data/store'
import Navbar from './partials/Navbar.vue';
  export default {  
    data(){
      return{
        store,
      }
    },
    components: {
    Navbar
  },

    
  }
</script>


<template>
<body>
<Navbar />

</body>
</template>



<style lang="scss" scoped>

body{
  background-image: url(../img/course-9-f-img.jpg);
  background-size: cover;  
  height: 600px;
}
body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); 
}
</style>