<template>
  <div class="page">
    <topnav></topnav>

    <el-row>
      <el-col :span="20" offset="2">
        <div class="content">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>需求详情</span>
            </div>
            <el-table :data="localData" style="width: 100%">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-table :data="props.row.needItems">
                    <el-table-column label="物品名称" prop="name"></el-table-column>
                    <el-table-column label="数量" prop="count"></el-table-column>
                  </el-table>
                </template>
              </el-table-column>
              <el-table-column label="需求单号" prop="supplyId"></el-table-column>
              <el-table-column label="联系人" prop="user"></el-table-column>
              <el-table-column label="联系方式" prop="phoneNumber"></el-table-column>
              <el-table-column label="地区" prop="address"></el-table-column>
            </el-table>
          </el-card>

          <el-card class="box-card matchedCard">
            <div slot="header" class="clearfix">
              <span>匹配情况</span>
            </div>
            <el-table :data="localData" style="width: 100%">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-table :data="props.row.items">
                    <el-table-column label="物品名称" prop="name"></el-table-column>
                    <el-table-column label="数量" prop="count"></el-table-column>
                  </el-table>
                </template>
              </el-table-column>
              <el-table-column label="商品 ID" prop="supplyId"></el-table-column>
              <el-table-column label="联系人" prop="user"></el-table-column>
              <el-table-column label="地区" prop="address"></el-table-column>
            </el-table>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import topnav from "@/components/common/nav";
import axios from "axios";
export default {
  components: {
    topnav
  },
  data() {
    return {
      localData: [],
      //与该需求/供给 匹配的数据
      matchedData: [],
    //   type: "",
      id: ""
    };
  },
  methods: {
    getParams() {
      self.id = self.$route.query.id;
    },
    getData() {
      console.log("getData");
      
        //需求
        var url = "/g/Need/getNeedById";
        url = url + "?id=" + self.id;
        axios
          .get(url)
          .then(response => {
            console.log(response);
            self.localData = response.data;
          })
          .catch(e => self.$message.error(e.response.data));
    
    }
  },
  mounted() {
    self = this;
    this.getParams();
    
    this.getData();
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
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.matchedCard {
  margin-top: 50px;
}
</style>
