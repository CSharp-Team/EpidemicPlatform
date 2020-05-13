<template>
  <div id="app">
    <!-- <topNav></topNav> -->
    <router-view/>
    <!-- <router-link to="/register">注册</router-link>
    <router-link to="/distriMap">疫情分布地图</router-link> -->
    
  </div>
</template>

<script>
import cmap from '@/components/page/distributionMap'
import beifenmap from '@/components/page/beifen'

export default {
  name: 'App',
  components:{
    cmap,beifenmap
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
