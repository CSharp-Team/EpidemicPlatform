<template>
  <div class="register">
    <div class="content">
      <el-row>
        <el-col :span="4">
          <i class="icon iconfont icon-yonghuming"></i>
          <div>用户名</div>
          <br />
        </el-col>
        <el-col :span="8">
          <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <i class="icon iconfont icon-icon_password"></i>
          <div>密码</div>
          <br />
        </el-col>
        <el-col :span="8">
          <el-input v-model="registerForm.password" show-password placeholder="请输入密码"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <i class="icon iconfont icon-icon_password"></i>
          <div>确认密码</div>
          <br />
        </el-col>
        <el-col :span="8">
          <el-input v-model="registerForm.repassword" show-password placeholder="请确认密码"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4">
          <i class="icon iconfont icon-yanzhengma"></i>
          <div>验证码</div>
          <br />
        </el-col>
        <el-col :span="4">
          <el-input v-model="registerForm.code" placeholder="请输入验证码"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button plain id="checkCode" @click="createCode()">ABEQ</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-button type="primary" round>注册</el-button>
        </el-col>
        <!-- <el-col :span="12">
          <el-button type="primary" round>登录</el-button>
        </el-col>-->
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      } else {
        callback();
      }
    };
    var validataPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.checkPass !== "") {
          this.$refs.registerForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validataPass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.pass) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        username: "",
        password: "",
        repassword: "",
        code: ""
      }
    };
  },
  methods: {
    createCode: function() {
      var Code = "";
      var codeLength = 4; //验证码的长度
      var checkCode = document.getElementById("checkCode");
      var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数 
      for (var i = 0; i < codeLength; i++) {
        //循环操作
        var charIndex = Math.floor(Math.random() * 36); //取得随机数的索引
        Code += random[charIndex]; //根据索引取得随机数加到code上
      }
      checkCode.textContent = Code; //把code值赋给验证码
    }
  }
};
</script>
    
<style>
.register {
  padding-top: 100px;
  color: #fff;
  font-size: 10px;
  height: 100%;
  background-color: #1d8ce0;
  width: 100%;
  line-height: 20px;
}
.content {
  margin-left: 25%;
  width: 100%;
}
.iconfont {
  font-size: 24px;
}
/* .register ul {
  padding: 0px;
  margin: 0px;
}
.register li {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  padding: 10px;
} */
#checkCode {
  font-family: Arial;
  font-style: italic;
  font-weight: bold;
  border: 0;
  letter-spacing: 2px;
  color: blue;
}
</style>