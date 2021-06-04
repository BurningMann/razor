<template>
  <div class="cart_wrapper">
      <CartItems />
  </div>
</template>

<script>
import CartItems from "@/components/CartItems"

export default {
  name: 'Cart',

  components: {
    CartItems
  },

  data: () => ({
    currentProductId: null,
  }),

  computed:{
    
  },

  methods:{
    
  },

  mounted() {
  }

}
</script>

<style lang="scss" scoped>

</style>