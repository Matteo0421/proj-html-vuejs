<script>
import CaroselCardCourses from './CaroselCardCourses.vue';
  export default {
    components:{
      CaroselCardCourses,
    },
  }
</script>

<template>
  <div class="word-container">
    <div class="row possibilites-tabs">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="my-active text-decoration-none " href="#">What We Do</a>
      <a class="text-decoration-none" href="#">Degree Programme</a>
      <a class="text-decoration-none" href="#">Career Achievements</a>
      <a class="text-decoration-none" href="#">Personal Managment</a>
      <a class="text-decoration-none" href="#">Steps To Succes</a>
      <a class="text-decoration-none" href="#">Knowlendge Transfer</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content position-relative " id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
        <h2>Learning Possibilites</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vero totam sit dolorum dolore. Enim rem, sapiente, odit, cum pariatur accusamus tenetur omnis molestiae sunt provident ratione ullam nemo adipisci sit minus molestias veritatis iste?</p>
        <ul class="list-unstyled">
          <li><i class="fa-solid fa-check" style="color: #39c3ff;"></i> We enrich through learning.</li>
          <li><i class="fa-solid fa-check" style="color: #39c3ff;"></i> Maximizing potential through individual attention.</li>
          <li><i class="fa-solid fa-check" style="color: #39c3ff;"></i> The trusted name for specialized training.</li>
          <li><i class="fa-solid fa-check" style="color: #39c3ff;"></i> People teach. People learn. This is where they connect.</li>
        </ul>
        <img src="../../img/img-secondarie/h12-tabs-icon-1.png" alt="">
      </div>
    </div>
  </div>
    </div>

    <div class="online-container">
      <h3 class="text-center">Popular Online Coursess</h3>
      <p class="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque tenetur, dolores voluptatum voluptatibus cupiditate perferendis reiciendis. Error deleniti, magnam aspernatur dignissimos aut quibusdam quos enim.</p>

      <CaroselCardCourses />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.word-container{
  margin: 60px 45px;
  margin-bottom: 150px;
}a{
  padding: 30px 20px;
  border: 1px solid #E7E7E7;
  color: #6B5E5E;
}.my-active{
  color: #36C3FF;
  border-left: 10px solid #36C3FF;
}h2{
  margin-top: 40px;
}p{
  color: #6B5E5E;
  margin-bottom: 120px;
  margin-top: 40px;
}li{
  color: #6B5E5E;
  margin-bottom: 30px;
}img{
  position: absolute;
  bottom: -25px;
  right: 0;
}

.online-container h3{
  font-size: 2rem;
  margin-top: 120px;
}p{
  color: #6B5E5E;
}
</style>