<template>
  <div>
    <topnav></topnav>
  <el-main>
      <messageForm></messageForm>
  </el-main>
  </div>
</template>

<script>
import topnav from '@/components/common/nav'
import messageForm from '@/components/common/messageForm'
export default {
  components:{
    topnav,messageForm
  }

}
</script>


<style scoped>
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 50px;
  }
</style>
