<script>
  export default {
    props: {
      id: Number,
      img: String,
      title: String,
      author: String,
      descriptiom: String,
      number: Number,
      profession: String,
    }
  }
</script>

<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img :src=" img " alt="" class="card-img-top"  >
      <div class="card-body">
        <h5 class="mt-3">{{ title }}</h5>
        <span>{{ author }}</span>
        <p class="card-text mt-3"> {{ descriptiom }}</p>
      <div class="user-font">
        <span ><i class="fa-solid fa-user me-2"></i> {{ number }}</span>
        <span class="ms-4"><i class="fa-solid fa-tag me-2"></i>{{ profession }}</span>
      </div>
  </div>
</div>
  </div>
</template>


<style lang="scss" scoped>
.card{
  margin-right: 40px;
}span, p, .user-font{
  color: #A7A7A7;
}
</style>

