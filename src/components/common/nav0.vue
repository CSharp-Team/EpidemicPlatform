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
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-menu-item index="/home">疫情供需平台</el-menu-item>
        </div>
      </el-col>
      <el-col :span="6">
        <!-- <div class="grid-content bg-purple-light">
          <el-menu-item index="1"></el-menu-item>
        </div>-->
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <!-- <el-submenu index="3">
            <template slot="title">发布</template>
            <el-menu-item index="/give">发布供求</el-menu-item>
            <el-menu-item index="/need">发布需求</el-menu-item>
          </el-submenu>-->
        </div>
      </el-col>
      <el-col :span="3">
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

              <!-- <el-row>
              <el-col :span="3">
                  <div class="login_register">注册</div>
              </el-col>
              </el-row>-->
              <!-- <div slot="footer" class="dialog-footer">

                  
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">登录</el-button>
              </div>-->
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

      // this.$router.replace('/register')
      this.$router.push({ path: "register" });
    },
    loginClick() {
      var self = this;
      var path = "/g/login";
      axios
        .post(path, { Name: self.form.name, Password: self.form.password })
        .then(response => {
          var result = response.data["ret"];
          if (result == "login successfully") {
            window.sessionStorage.setItem('token',response.data["ret"]);
            // var json=response.data
            // console.log(json)
            // this.$store.commit('ADD_COUNT',json.data.token);
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

