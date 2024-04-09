<script>
  export default {
    
  }
</script>

<template>
  <div class="word-container">
    <div class="row">
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
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">1.</div>
    </div>
  </div>
</div>
  </div>
</template>

<style lang="scss" scoped>
.word-container{
  margin: 60px 45px;
}a{
  padding: 30px 20px;
  border: 1px solid #E7E7E7;
  color: #6B5E5E;
}.my-active{
  color: #36C3FF;
  border-left: 10px solid #36C3FF;
}
</style>