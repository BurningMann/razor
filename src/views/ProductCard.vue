<template>
  <div class="product_wrapper">
    <div class="product_wrapper__main_img_box">
      <img src="@/assets/pc-img.png" alt="">
    </div>
    <div class="product_wrapper__stats_box">
      <div class="stats_wrapper">
        <div class="conf_wrapper">
          <p>Выберите тип конфигуратора:</p>
          <div class="conf_element">
            <span class="conf_title">ПРОЦЕССОР:</span>
            <p class="conf_name">{{getProduct.cpu.name}}</p>
          </div>
          <div class="conf_element">
            <span class="conf_title">ОПЕРАТИВНАЯ ПАМЯТЬ:</span>
            <p class="conf_name">{{getProduct.ram}}</p>
          </div>
          <div class="conf_element">
            <span class="conf_title">ВИДЕОКАРТА:</span>
            <p class="conf_name">{{getProduct.gpu.name}}</p>
          </div>
          <div class="conf_element">
            <span class="conf_title">СИСТЕМНЫЙ SSD:</span>
            <p class="conf_name">{{getProduct.ssd}}</p>
          </div>
          <div class="conf_element">
            <span class="conf_title">НАКОПИТЕЛЬ 2:</span>
            <p class="conf_name">{{getProduct.sdd}}</p>
          </div>
          <div class="conf_element">
            <span class="conf_title">ГАРАНТИЯ:</span>
            <p class="conf_name">{{getProduct.garancy}}</p>
          </div>
        </div>
      </div>
      <router-link 
        tag="div"
        to="/cart"
        class="to_cart_btn"
        v-if="this.$store.state.productsInCart.includes(getProduct.id)"
      >
        Товар в корзине 
      </router-link>
      <div class="to_cart_btn" v-else @click="CardAdd(getProduct.id)">Добавить в корзину</div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'ProductCard',
  components: {
  },
  data: () => ({
    currentProductId: null,
  }),
  computed:{
    ...mapGetters([
      "PRODUCTS"
    ]), 
    getProduct(){
      let currentProduct = {}
      this.PRODUCTS.forEach((element) => {
        if(element.id == this.currentProductId){
          currentProduct = element
        }
      });
      return currentProduct
    }
  },
  methods:{
    ...mapActions([
      "GET_PRODUCTS_FROM_BD"
    ]),
    CardAdd(productId){
      this.$store.state.productsInCart.push(productId)
    },
  },

  mounted() {
    this.GET_PRODUCTS_FROM_BD()
    this.currentProductId = parseInt(this.$route.query.productId)
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
  .conf_wrapper{
    display: flex;
    flex-direction: column;
    .conf_element{
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid rgba(79,89,102,.2);
    }
    .conf_title{
      font-size: 11px;
      color: #66788c;
    }
    .conf_name{
      font-size: 14px;
      margin: 7px 0;
      color: #ffffff;
    }
  }
  .to_cart_btn{
      width: 200px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: crimson;
      cursor: pointer;
      margin-top: 20px;
    }
</style>