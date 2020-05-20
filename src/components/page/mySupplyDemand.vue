<template>
  <div class="page">
    <topnav></topnav>

    <el-row>
      <el-col :span="6" class="nav">
        <leftnav></leftnav>
      </el-col>
      <el-col :span="16" offset="1">
        <div class="content">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import topnav from "@/components/common/nav";
import leftnav from "@/components/common/leftNav";
export default {
  components: {
    topnav,
    leftnav
  }
};
</script>


<style>
.page {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
}
.content {
  float: left;
  width: 100%;
  margin-top: 3%;
}
.nav{
  margin-top: 3%;
}
</style>
