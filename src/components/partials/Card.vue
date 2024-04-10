<script>
  export default {
    props: {
      img: String,
      title: String,
      id: Number
    }
  }
</script>

<template >
  <div  >
    <img :src=" img " alt=""  >
    <h5 class="text-center"> {{ title }}</h5>
  </div>
  
</template>


<style lang="scss" scoped>
  div{
    width: 160px;
    height: 180px;
    background-color: #F2F8FC;
    margin-bottom: 90px;
  }img{
    margin-left: 40px ;
    margin-top: 40px;
    margin-bottom: 30px;
  }

  
</style>