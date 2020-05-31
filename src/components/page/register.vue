<template>
  <div class="register">
    <topnav0></topnav0>
    <div class="content">
      <div class="elRegister">
        <el-form
          :model="registerForm"
          status-icon
          :rules="rules"
          ref="registerForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="registerForm.username" autocomplete="off" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="registerForm.pass"
              show-password
              autocomplete="off"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="registerForm.checkPass"
              show-password
              autocomplete="off"
              placeholder="请再次输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系方式" prop="phoneNumber">
            <el-input v-model="registerForm.phoneNumber" autocomplete="off" placeholder="请输入联系方式"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-col :span="16">
              <el-input
                v-model="registerForm.code"
                placeholder="请输入验证码"
                maxlength="4"
                minlength="4"
              ></el-input>
            </el-col>
            <el-col :span="4" offset="1">
              <el-button plain id="PageCode" @click="createCode()">ABEQ</el-button>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
            <el-button @click="resetForm('registerForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>

      <!-- <div class="initRegister">
    <el-row>
        <el-col :span="4" :offset="6" class="regiserRow" align="middle">
          <i class="icon iconfont icon-yonghuming"></i>
          <div>用户名</div>
          <br />
        </el-col>
        <el-col :span="8">
          <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="4" :offset="6">
          <i class="icon iconfont icon-icon_password"></i>
          <div>密码</div>
          <br />
        </el-col>
        <el-col :span="8">
          <el-input v-model="registerForm.password" show-password placeholder="请输入密码"></el-input>
        </el-col>
    </el-row>
      <el-row>
        <el-col :span="4" :offset="6">
          <i class="icon iconfont icon-icon_password"></i>
          <div>确认密码</div>
          <br />
        </el-col>
        <el-col :span="8">
          <el-input v-model="registerForm.repassword" show-password placeholder="请确认密码"></el-input>
        </el-col>
    </el-row>
      <el-row>
        <el-col :span="4" :offset="6">
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
        <el-col :span="12" :offset="6">
          <el-button type="primary" round>注册</el-button>
        </el-col>
        
      </el-row>
</div>
      -->
    </div>
  </div>
</template>

<script>
import topnav0 from "@/components/common/nav0";
import axios from "axios";
export default {
  components: {
    topnav0
  },
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.checkPass !== "") {
          this.$refs.registerForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checkCode = (rule, value, callback) => {
      var pageCode = document.getElementById("PageCode");
      var text=pageCode.textContent
      console.log(text)
      if (!value) {
        return callback(new Error("验证码不能为空"));
      }else if(value.toLowerCase()!==text.toLowerCase()){
        return callback(new Error("验证码输入错误！"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        username: "",
        pass: "",
        checkPass: "",
        repassword: "",
        code: "",
        PhoneNumber:''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkName, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }]
      }
    };
  },
  methods: {
    createCode: function() {
      var Code = "";
      var codeLength = 4; //验证码的长度
      var pageCode = document.getElementById("PageCode");
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ); //随机数

      for (var i = 0; i < codeLength; i++) {
        //循环操作
        var charIndex = Math.floor(Math.random() * 36); //取得随机数的索引
        Code += random[charIndex]; //根据索引取得随机数加到code上
      }
      pageCode.textContent = Code; //把code值赋给验证码
    },

    submitForm(formName) {
      var self = this;
      this.$refs[formName].validate(valid => {
        
        var path = "/g/User/register";
        if (valid) {
          axios
            .post(path, { "Name": self.registerForm.username,
            "Password": self.registerForm.pass,
            "PhoneNumber": self.registerForm.phoneNumber })
            .then(response => {
              self.$message({
                message: "注册成功",
                type: "success"
              });
              self.registerForm=[]
            })
            .catch(e => self.$message.error(e.response.data));
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
    
<style>
.register {
  margin: 0;
  color: #fff;
  font-size: 10px;
  height: 100%;
  /* background-color: #1d8ce0; */
  background-color: #E9EEF3;
  width: 100%;
  line-height: 20px;
}
.content {
  padding-top: 100px;
  width: 100%;
}
.iconfont {
  font-size: 24px;
}

.registerWord {
  line-height: 12px;
  margin-top: 0px;
}

#PageCode {
  font-family: Arial;
  font-style: italic;
  font-weight: bold;
  border: 0;
  letter-spacing: 2px;
  color: blue;
}
.elRegister {
  width: 35%;
  margin: 0 auto;
}
</style>