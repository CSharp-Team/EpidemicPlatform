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
              <span>我的信息</span>
            </div>
            <div v-for="o in 1" :key="o" class="text item">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="姓名">
                  <el-input v-model.lazy="form.name" type="text"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                  <el-input v-model.lazy="form.phoneNumber" type="text"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                  <el-input v-model.lazy="form.email" type="text"></el-input>
                </el-form-item>
                <el-form-item label="工作机构">
                  <el-input v-model.lazy="form.institution" type="text"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                  <el-radio-group v-model.lazy="form.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="抗疫宣言">
                  <el-input type="textarea" v-model.lazy="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="commit">立即修改</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import topnav from "@/components/common/nav";
import leftnav from "@/components/common/leftNav";
import axios from "axios";

var self = this;
export default {
  components: {
    topnav,
    leftnav
  },
  data() {
    return {
      form: {
        name: "",
        phoneNumber: "",
        institution: "",
        email: "",
        sex: "",
        passWord: ""
      }
    };
  },
  // 查询到的用户信息对象
  methods: {
    getData() {
      var url = "/g/User/getUserByName";
      // var regix=/^(%22)(%22)$/
      url = url + "?name=" + this.$store.state.user;
      // console.log(this.$store.state.user.replace(/\"/g, ""))
      // url=url+"?name="+localStorage.getItem('user')
      // url=url+"?name="+decodeURIComponent(localStorage.getItem('user'))
      axios
        .get(url)
        .then(response => {
          console.log(response.data);
          self.form = response.data;
        })
        .catch(e => self.$message.error(e.response.data));
    }
  },
  mounted() {
    self = this;
    this.getData();
  }
};
</script>


<style>
.page {
 
 
}
.nav {
  margin-top: 3%;
}
.content{
   margin-top: 3%;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

/* .box-card {
    width: 480px;

  } */
</style>