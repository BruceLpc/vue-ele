<template>
  <div id="app">
    <v-header></v-header>
    <div class="nav">
      <div class="nav-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/shops">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from 'components/header/header.vue'
  export default {
    components: {
      'v-header': header
    }
  }
</script>

<style>
  .nav{display: flex}
  .nav .nav-item{flex: 1;text-align:center;}
</style>
