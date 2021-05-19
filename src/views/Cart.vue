<template>
  <div class="cart_wrapper">
      <!-- <CartItem /> -->
  </div>
</template>

<script>
import CartItem from "@/components/CartItem"

export default {
  name: 'Cart',

  components: {
    CartItem
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