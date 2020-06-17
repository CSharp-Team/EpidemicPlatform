<template>
  <el-menu
    router
    :default-active="$route.path"
    class="el-menu-demo"
    mode="horizontal"
    @close="handleClose"
    @open="handleOpen"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-menu-item index="/">疫情地图</el-menu-item>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-menu-item index="/home">疫情供需平台</el-menu-item>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <!-- <el-menu-item index="1"></el-menu-item> -->
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-submenu index="3">
            <template slot="title">发布</template>
            <el-menu-item index="/give">发布供给</el-menu-item>
            <el-menu-item index="/need">发布需求</el-menu-item>
          </el-submenu>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-row>
            <el-col :span="8">
              
            </el-col>
            <el-col :span="16">
              <el-menu-item index="/myPage">我的</el-menu-item>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="2">
        <!-- <i class="el-icon-message message"></i> -->
        <div class="grid-content bg-purple">
          <el-menu-item index="/message">消息</el-menu-item>
        </div>
      </el-col>
    </el-row>
  </el-menu>
</template>

<script>
export default {
  name: "topnav",
  data() {
    return {
      form: {
        // name: '',
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        user: "",
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    init() {
      user = this.$store.state.user;
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style scoped>
.message {
  font-size: 40px;
}
</style>
