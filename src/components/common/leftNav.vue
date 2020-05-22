<template>
  <div>
    <el-row class="tac leftnav">
      <el-col :span="24">
        <el-menu
        router
          default-active="/myPage/supplyAndDemand"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="/myPage">
            <i class="el-icon-menu"></i>
            <span slot="title">我的信息<i class="el-icon-arrow-right"></i></span>
          </el-menu-item>
          <el-menu-item index="/myPage/supplyAndDemand">
            <i class="el-icon-menu"></i>
            <span slot="title">我的供给与需求<i class="el-icon-arrow-right"></i></span>
            
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>



<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.leftnav {
  margin-left: 5%;
}
</style>