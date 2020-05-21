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
              <el-button style="float: right; padding: 3px 0" type="text">修改密码</el-button>
            </div>
            <div v-for="o in 1" :key="o" class="text item">
              <el-table :data="userList" style="width: 100%">
                <el-table-column label="姓名" width="170">
                  <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="联系方式" width="170">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                      <p>联系方式: {{ scope.row.phone }}</p>
                      <p>住址: {{ scope.row.address }}</p>
                      <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.phone }}</el-tag>
                      </div>
                    </el-popover>
                  </template>
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button size="mini" @click="showEditDialog(scope.row.id)">编辑</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-input placeholder="请输入原密码" v-model="text1" show-password>
                <template slot="prepend">原密码</template>
              </el-input>
              <p></p>
              <el-input placeholder="请输入新密码" v-model="text2" show-password>
                <template slot="prepend">新密码</template>
              </el-input>
              <p></p>
              <el-input placeholder="请输入新密码" v-model="text3" show-password>
                <template slot="prepend">确认密码</template>
              </el-input>
              <p></p>
              <el-button size="middle" type="submit" @click="go">确认</el-button>
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
export default {
  components: {
    topnav,
    leftnav
  },
  data() {
    return {
      text1: "",
      text2: "",
      text3: "",
      userList: [
        {
          name: "付浩",
          phone: "13550457371",
          address: "四川省普格县"
        }
      ]
    };
  },
  go() {
    this.$confirm("此操作将修改您的密码, 是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(async () => {
        if (text1 == null || text2 == null || text3) {
          this.$message({
            type: "info",
            message: "密码不能为空"
          });
        } else if (text2 != text3) {
          callback(new error(两次输入的密码不一致));
        } else {
          this.$message({
            type: "success",
            message: "修改成功!"
          });
        }
        //还有一个验证初始密码的判断没写
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "已取消修改"
        });
      });
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
.nav {
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

.box-card {
  width: 480px;
}
</style>
