<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import CategoryLayout from '@/layouts/CategoryLayout'
export default {
  computed: {
    layout () {
      return this.$route.meta.layout + '-layout'
    }
  },
  components: {
    CategoryLayout
  }
}
</script>

<style lang="scss">
  @import 'assets/css/default.css';
</style>
