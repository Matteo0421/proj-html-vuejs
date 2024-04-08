<script>
  export default {
    props: {
      img: String,
      title: String,
      id: Number
    }
  }
</script>

<template>
  <div>
    <img :src=" img " alt="">
    <h3>{{ title }}</h3>
  </div>
</template>


<style lang="scss" scoped>

</style>