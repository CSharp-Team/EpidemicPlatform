<template>
  <div class="page">
    <topnav></topnav>

    <el-row>
      <el-col :span="20" offset="2">
        <div class="content">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>供给详情</span>
            </div>
            <el-table :data="localData.items" style="width: 100%">
              <el-table-column label="物品名称" prop="name"></el-table-column>
              <el-table-column label="数量" prop="count"></el-table-column>
            </el-table>
          </el-card>

          <el-card class="box-card matchedCard">
            <div slot="header" class="clearfix">
              <span>匹配情况</span>
            </div>
            <el-table :data="matchedData" style="width: 100%">
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
              <el-table-column label="详情" prop>
                    <template slot-scope="props">
                      <el-button @click="detailClick(props.row)">申请</el-button>
                    </template>
              </el-table-column>
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
var self = this;
export default {
  components: {
    topnav
  },
  data() {
    return {
      localData: [],
      //与该需求/供给 匹配的数据
      matchedData: [],
      id: ""
    };
  },
  methods: {
    getParams() {
      console.log("getparams");
      this.id = self.$route.query.id;
      console.log(self.$route.query);
      console.log("获取self.id");
      console.log(self.id);
    },
    getData() {
      console.log("getData");
      //供给
      var url = "/g/Supply/getSupplyById";
      url = url + "?id=" + this.id;
      setTimeout(() => {
        axios
        .get(url)
        .then(response => {
          console.log(response);
          self.localData = response.data;
          // self.$set(self,'localData',response.data)
        })
      .catch(e => self.$message.error(e.response.data));
      }, 1000);
      

      // console.log("1111111111111")
      // console.log(self.localData);
    },
    getMatchedData(){
       
      var url2 = "/g/Supply/needMatch";
      console.log("this.id="+this.id)
      url2=url2+"?id="+this.id
      axios
        .get(url2)
        .then(response => {
         console.log(response)
         self.matchedData=response.data
        })
        .catch(e => self.$message.error(e.response.data));
    }

  },
  mounted() {
    self = this;
    self.getParams();
    this.getData();
    this.getMatchedData();
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
