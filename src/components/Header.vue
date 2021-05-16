<template>
  <header>
    <div class="burger" @click="menu_open = !menu_open"></div>
    <div class="dorpdown_menu" :class="{open: menu_open}">
      <ul class="menu_list">
        <router-link 
        v-for="link in links" 
        :key="link.url" 
        tag="li" 
        active-class="active"
        :to="link.url"
        :exact="link.exact">
          <a href="#">{{link.title}}</a>
        </router-link>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: 'Главная', url: '/', exact: true },
      { title: 'Каталог', url: '/category' },
      { title: '3', url: '/q' },
      { title: '4', url: '/w' },
      { title: '5', url: '/e' }
    ],
    menu_open: false
  })

}
</script>

<style scoped lang="scss">
  header{
    width: 100%;
    padding: 20px 40px;
    background: cornflowerblue;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .burger{
      width:50px;
      height: 50px;
      background: black;
      cursor: pointer;
    }
  }
  .dorpdown_menu{
    position: fixed;
    left: -100%;
    top: 0;
    bottom: 0;
    width: 30%;
    background: #000;
    z-index: 5;
    padding: 20px;
    transition: .3s;
    &.open{
      left: 0;
    }
    .menu_list{
      list-style: none;
      padding: 0;
      li{
        margin: 5px 0;
        &.active{
          text-decoration: underline;
        }
      }
      a{
        font-weight: 500;
        font-size: 22px;
        color: #fff;
        text-decoration: none;
      }
    }
  }
</style>
