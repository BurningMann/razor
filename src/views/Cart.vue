<template>
  <div class="product_wrapper">
    <div class="product_wrapper__main_img_box">
      <img src="@/assets/pc-img.png" alt="">
    </div>
    <div class="product_wrapper__stats_box"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .product_wrapper{
    display: flex;
    flex-wrap: wrap;
    &__main_img_box{
      width: 50%;
    }
    &__stats_box{
      width: 50%;
    }
  }
</style>