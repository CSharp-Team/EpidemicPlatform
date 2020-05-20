<template>
  <div class="page">
    <topnav></topnav>
    <leftnav></leftnav>
    
  </div>
</template>

<script>
import topnav from '@/components/common/nav'
import leftnav from '@/components/common/leftNav'
export default {
  components:{
    topnav,leftnav
  }
  
}
</script>


<style>
.page{
  background-color: #f8f8f8;
}
</style>
