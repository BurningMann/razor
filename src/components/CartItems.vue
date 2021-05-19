<template>
  <div class="cart_wrapper__element">
    <div class="img_box"><img src="@/assets/pc-img.png" alt=""></div>
    <div class="info_box">
      <div class="product_name"><span>{{}}</span></div>
      <div class="product_counter_wrapper">
        <div class="minus">-</div>
        <div class="counter">{{}}</div>
        <div class="plus">+</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mame: "CartItem",
  data: () => ({

  }),
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>