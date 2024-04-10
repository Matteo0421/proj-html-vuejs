<script>
import {store} from '../data/store'
  export default {
    data(){
      return{
        store
      }
    },
    components:{
    },
  }
</script>

<template>
  <body>
    <div class="d-flex word-container">
    <ul class="first-list  list-unstyled col-3">
      <li><img  class="mb-3" src="../img/footer-logo-1.png" alt=""></li>
      <li class="mb-5">Providing Life Changing Experiences Throuht Education. Class that fit Your Busy Life. closer to Home</li>
      <li><i class="fa-solid fa-phone"></i> 1-677-124-44227</li>
      <li><i class="fa-regular fa-clock"></i> Mon - Sat 8.00 - 18.00</li>
    </ul>

    <ul class="second-list  list-unstyled col-3">
      <li>
        <h4 class="mb-3 text-white">Popular Courses</h4>
      </li>
      <li>
        <div>
         <h5>Business English</h5>
         <span>Preston Marshall</span>
        </div>
      </li>
      <li>
        <div>
         <h5>Social Computing</h5>
         <span>David Sanders</span>
        </div>
      </li>
      <li>
        <div>
         <h5>Business English</h5>
         <span>Jennie King</span>
        </div>
      </li>
    </ul>

    <ul class="list-unstyled third-list  col-3">
      <li>
        <h4 class="mb-3 text-white">Support</h4>
      </li>
      <li>User Dashboard</li>
      <li>Contact Us</li>
      <li>FAQ</li>
      <li>Course Offer</li>
      <li>Events</li>
    </ul>

    <ul class="list-unstyled fourth-list col-3">
      <li>
        <h4 class="mb-3 text-white">Flexible Learning</h4>
      </li>
      <li>
        <img src="../img/img-secondarie/footer-img-1.png" alt="">
      </li>
    </ul>
  </div>
  </body>
</template>


<style lang="scss" scoped>
body{
  background-color: black;
}.word-container{
  margin: 60px 60px;
}ul{
  margin-top: 120px;
}li img{
  width: 135px;
}li{
  font-size: 0.8rem;
  color: #BABABA;
  margin-bottom: 15px;
}h5{
  margin-bottom: 0;
  font-size: 1.1rem;
}
</style>