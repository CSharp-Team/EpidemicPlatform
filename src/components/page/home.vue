<template>
  <div>
    <topnav></topnav>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>


    <div class="displayInfo">
      <el-card class="box-card box1" header="供给动态">
        <div>
          <el-table class="dataTable" :data="supplyData" height="400px" style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-table :data="props.row.items"  :show-header="false">
                  <el-table-column label="物品名称" prop="name"></el-table-column>
                  <el-table-column label="数量" prop="count"></el-table-column>
                </el-table>
              </template>
            </el-table-column>
            <el-table-column label="供给单号" prop="supplyId"></el-table-column>
            <el-table-column label="联系人" prop="user"></el-table-column>
            <el-table-column label="联系方式" prop="phoneNumber"></el-table-column>
            <el-table-column label="地区" prop="address"></el-table-column>
            <el-table-column label="详情" prop>
              <template slot-scope="props">
                <el-button @click="detailClick2(props.row)">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>

      <el-card class="box-card box2" header="需求动态">
        <div>
          <el-table  class="dataTable" :data="demandData" height="400px" style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-table :data="props.row.items" :show-header="false">
                  <el-table-column label="物品名称" prop="name"></el-table-column>
                  <el-table-column label="数量" prop="count"></el-table-column>
                </el-table>
              </template>
            </el-table-column>
            <el-table-column label="需求单号" prop="needId"></el-table-column>
            <el-table-column label="联系人" prop="user"></el-table-column>
            <el-table-column label="联系方式" prop="phoneNumber"></el-table-column>
            <el-table-column label="地区" prop="address"></el-table-column>
            <el-table-column label="详情" prop>
              <template slot-scope="props">
                <el-button @click="detailClick1(props.row)">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
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
      input1: "",
      input2: "",
      input3: "",
      select: "",
      supplyData: [],
      demandData: []
    };
  },
  methods: {
    detailClick1(data) {
      this.$router.push({
        path: "../demandDetail",
        query: {
          id: data.needId
        }
      });
    },
    detailClick2(data) {
      this.$router.push({
        path: "../supplyDetail",
        query: {
          id: data.supplyId
        }
      });
    },
    search() {
      var result = "";
      var self = this;
      // var path = "info/getSupplyByUser?user=Ming";
      // var path="https://localhost:5001/api/platform/getSupplyByUser?user=Ming"
      // var path = "/g/grade.do";
      var path = "/g/Supply/getSupplyByUser?user=Ming";
      // var path="/g"

      axios
        .get(path)
        .then(response => console.log(response.data))
        .catch(e => self.$message.error(e.response.data));
    },
    getTableData() {
      var url1 = "/g/Supply/getAllSupply";
      var self = this;
      axios
        .get(url1)
        .then(response => {
          console.log(response);
          console.log(response.data);
          self.supplyData = response.data;
        })
        .catch(e => self.$message.error(e.response.data));

      var url2 = "/g/Need/getAllNeed";
      var self = this;
      axios
        .get(url2)
        .then(response => {
          console.log(response);
          self.demandData = response.data;
        })
        .catch(e => self.$message.error(e.response.data));
    }
  },
  mounted() {
    this.getTableData();
  }
};
</script>

<style>
.el-select {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.search {
  width: 90%;
  offset: 10%;
  margin-left: 5%;
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
  float: left;
}

/* .box-card {
  width: 480px;
} */

.box1 {
  width: 44%;
  margin-top: 30px;
  margin-left: 5%;
  float: left;
}

.box2 {
  width: 44%;
  margin-top: 30px;
  margin-left: 2%;
  float: left;
 
}
</style>
