<template>
  <div class="filter_wrapper">
      <div class="filter_element">
          <span class="title">Процессор</span>
          <label><input type="checkbox" name="cpu" value="Intel" v-model="cpuType">Intel</label>
          <label><input type="checkbox" name="cpu" value="AMD" v-model="cpuType">AMD</label>
      </div>
      <div class="filter_element">
          <span class="title">Видеокарта</span>
          <label><input type="checkbox" name="gpu" value="NVIDIA" v-model="gpuType">NVIDIA</label>
          <label><input type="checkbox" name="gpu" value="AMD" v-model="gpuType">AMD</label>
      </div>
      <div class="filter_button" @click="filter">
        Фильтровать
      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cpuType: [],
    gpuType: []
  }),
  methods: {
    filter: function (){
      this.$store.state.filterList.cpu = this.cpuType
      this.$store.state.filterList.gpu = this.cpuType
    }
  }
}
</script>

<style lang="scss" scoped>
  .filter_button{
    width: 100%;
    background: crimson;
    text-align: center;
    padding: 20px 0;
    margin-top: 50px;
    cursor: pointer;
  }
  .filter_element{
    .title{
      font-size: 18px;
      font-weight: 600;
    }
    label{
      margin: 2px 0;
      cursor: pointer;
    }
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
</style>