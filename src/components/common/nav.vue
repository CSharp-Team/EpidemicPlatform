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
    <el-row type="flex" class="row-bg">
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <!-- <el-menu-item index>疫情供需平台</el-menu-item> -->
          <p class="title">疫情供需平台</p>
        </div>
      </el-col>

      <el-col :span="2" offset="10">
        <div class="grid-content bg-purple">
          <el-menu-item index="/">疫情地图</el-menu-item>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-menu-item index="/sdPage">需求分布图</el-menu-item>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-menu-item index="/home">物资供需动态</el-menu-item>
        </div>
      </el-col>

      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-submenu index="3">
            <template slot="title">发布</template>
            <el-menu-item index="/give">发布供给</el-menu-item>
            <el-menu-item index="/need">发布需求</el-menu-item>
          </el-submenu>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple">
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
            </template>
            <el-menu-item index="/myPage">我的信息</el-menu-item>
            <el-menu-item index="/myPage/supplyAndDemand">我的供给和需求</el-menu-item>
            <el-menu-item index="/message">我的消息</el-menu-item>
            <el-menu-item index="/" @click="exit()">退出登录</el-menu-item>
          </el-submenu>
        </div>
      </el-col>
      <el-col :span="1">
        <el-menu-item index>
          <i class="el-icon-position" @click="dialogFormVisible = true"></i>
          <el-dialog customClass="customWith" title="登录" :visible.sync="dialogFormVisible">
            <el-form :model="loginform">
              <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="loginform.name" autocomplete="off" placeholder="请输入用户名"></el-input>
              </el-form-item>

              <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input
                  v-model="loginform.password"
                  show-password
                  autocomplete="off"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>

              <el-button @click="registerClick()">注册</el-button>
              <el-button type="primary" @click="loginClick()">登录</el-button>
            </el-form>
          </el-dialog>
        </el-menu-item>
      </el-col>
    </el-row>
  </el-menu>
</template>

<script>
import axios from "axios";
export default {
  name: "topnav",
  data() {
    return {
      dialogFormVisible: false,
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
        url:
          "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      },
       loginform: {
        name: "",
        password: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        loginResult: []
      },
      formLabelWidth: "80px"
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    init() {
      user = this.$store.state.user;
    },
     registerClick() {
      this.dialogFormVisible = false;
      this.$router.push({ path: "register" });
    },
    loginClick() {
      var self = this;
      var path = "/g/User/login";
      axios
        .post(path, { Name: self.loginform.name, Password: self.loginform.password })
        .then(response => {
          var result = response.data["ret"];
          if (result == "login successfully") {
            window.sessionStorage.setItem('token',response.data["ret"]);
            this.$store.commit('newAuthor',self.loginform.name)
            self.$message({
              message: "登录成功",
              type: "success"
            });
            self.dialogFormVisible = false;
            self.$router.push({ path: "home" });
            self.$store.commit('isLogin',response.data["ret"]);
          } else {
            self.$message.error("用户名或密码错误");
          }
        })
        .catch(e => self.$message.error(e.response.data));
    },
    exit(){
      window.sessionStorage.clear();
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
.customWith {
  width: 25%;
}
.title{
  color: aliceblue;
  /* font-size: 20px; */
}
</style>
