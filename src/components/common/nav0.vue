<template>
  <el-menu
    router
    :default-active="$route.path"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-row type="flex" class="row-bg">
      <el-col :span="3" >
        <div class="grid-content bg-purple">
          <el-row>
            <el-col :span="24"><el-menu-item index="/home">疫情供需平台</el-menu-item></el-col>
          </el-row>
        </div>
      </el-col>
     
      <el-col :span="2" offset="18">
        <div class="grid-content bg-purple">
          <el-menu-item index>
            <el-button type="text" @click="dialogFormVisible = true">立即登录</el-button>

            <el-dialog customClass="customWith" title="登录" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" placeholder="请输入用户名"></el-input>
                </el-form-item>

                <el-form-item label="密码" :label-width="formLabelWidth">
                  <el-input
                    v-model="form.password"
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
        </div>
      </el-col>
    </el-row>
  </el-menu>
</template>

<script>
import axios from "axios";
export default {
  name: "topnav0",
  data() {
    return {
      dialogFormVisible: false,
      form: {
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
    registerClick() {
      this.dialogFormVisible = false;
      this.$router.push({ path: "register" });
    },
    loginClick() {
      var self = this;
      var path = "/g/User/login";
      axios
        .post(path, { Name: self.form.name, Password: self.form.password })
        .then(response => {
          var result = response.data["ret"];
          if (result == "login successfully") {
            window.sessionStorage.setItem('token',response.data["ret"]);
            // var json=response.data
            // console.log(json)
            // this.$store.commit('ADD_COUNT',json.data.token);
            this.$store.commit('newAuthor',self.form.name)
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
    }
  }
};
</script>

<style>
.customWith {
  width: 25%;
}
.login_register {
  color: #909399;
}
</style>

