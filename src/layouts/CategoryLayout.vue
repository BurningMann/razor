<template>
<div>
  <Header />
  <div class="container">
    <div class="app_box">
      <div class="sidebar">
        <ProductFilter />
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Header from '@/components/Header'
import ProductFilter from '@/components/ProductFilter'

export default {
  name: 'CategoryLayout',
  components: {
    Header,ProductFilter
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .app_box{
    display: flex;
  }
  .sidebar{
    width: 250px;
    height: 100%;
    min-height: 100vh;
    background: coral;
    padding: 10px 20px;
  }
  .main{
    width: calc(100% - 250px);
    
  }
</style>
