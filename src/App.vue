<template>
  <div id="app">
    <!-- <topnav></topnav> -->
    <router-view/>
    <!-- <router-link to="/register">注册</router-link>
    <router-link to="/distriMap">疫情分布地图</router-link> -->
  </div>
</template>

<script>
import cmap from '@/components/common/distributionMap'
import beifenmap from '@/components/page/beifen'
import topnav from '@/components/common/nav'


export default {
  name: 'App',
  components:{
    cmap,beifenmap,topnav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

</style>
