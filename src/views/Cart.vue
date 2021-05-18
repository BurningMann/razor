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
            <p class="conf_name">{{currentProduct.cpu.name}}</p>
          </div>
          <div class="conf_element">
            <span class="conf_title">ОПЕРАТИВНАЯ ПАМЯТЬ:</span>
            <p class="conf_name">{{currentProduct.ram}}</p>
          </div>
          <div class="conf_element">
            <span class="conf_title">ВИДЕОКАРТА:</span>
            <p class="conf_name">{{currentProduct.gpu.name}}</p>
          </div>
          <div class="conf_element">
            <span class="conf_title">СИСТЕМНЫЙ SSD:</span>
            <p class="conf_name">{{currentProduct.ssd}}</p>
          </div>
          <div class="conf_element">
            <span class="conf_title">НАКОПИТЕЛЬ 2:</span>
            <p class="conf_name">{{currentProduct.sdd}}</p>
          </div>
          <div class="conf_element">
            <span class="conf_title">ГАРАНТИЯ:</span>
            <p class="conf_name">{{currentProduct.garancy}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    currentProduct: null,
  }),
  computed:{
    ...mapGetters([
      "PRODUCTS"
    ]), 
    getProduct(){

    }


  },
  methods:{
    ...mapActions([
      "GET_PRODUCTS_FROM_BD"
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_BD()
    console.log(parseInt(this.$route.query.id))
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
    }
  }
</style>