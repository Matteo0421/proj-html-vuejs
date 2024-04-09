<script>
  export default {
    props: {
      id: Number,
      img: String,
      title: String,
      author: String,
      description: String,
      number: Number,
      profession: String,
    }
  }
</script>

<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img :src=" img " alt="" class="card-img-top"  >
      <span>{{ author }}</span>
      <div class="card-body">
      <p class="card-text"> {{ description }}</p>
      <div class="user-font">
        <span><i class="fa-solid fa-user"></i> {{ number }}</span>
        <span><i class="fa-solid fa-tag"></i>{{ profession }}</span>
      </div>
  </div>
</div>
  </div>
</template>


<style lang="scss" scoped>

</style>

