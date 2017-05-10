<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <router-link class="tab-item" to="/goods">商品</router-link>
      <router-link class="tab-item" to="/ratings">评论</router-link>
      <router-link class="tab-item" to="/seller">商家</router-link>
    </div>
    <!--<div class="tab border-1px">-->
      <!--<div class="tab-item">-->
        <!--<a v-link="{path:'/goods'}">商品</a>-->
      <!--</div>-->
      <!--<div class="tab-item">-->
        <!--<a v-link="{path:'/ratings'}">评论</a>-->
      <!--</div>-->
      <!--<div class="tab-item">-->
        <!--<a v-link="{path:'/seller'}">商家</a>-->
      <!--</div>-->
    <!--</div>-->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from './components/header/header'

export default {
  name: 'app',
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      .tab-item
        flex: 1
        text-align: center
</style>
