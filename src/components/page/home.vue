<template>
  <div>
    <topnav></topnav>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>

    <div style="margin-top: 15px;" class="search">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="供求" value="1"></el-option>
          <el-option label="需求" value="2"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
      </el-input>
    </div>

    <div class="displayInfo">
      <el-card class="box-card box1" header="供求动态">
        <!-- <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div> -->
        <div class="dataTable">
          <!-- <el-table :data="supplyTable" height="250" border style="width: 100%">
            <el-table-column prop="name" label="物资名称" width="150"></el-table-column>
            <el-table-column prop="num" label="数量" width="100"></el-table-column>
            <el-table-column prop="person" label="供给人"></el-table-column>
          </el-table>-->
          <el-table :data="supplyData" style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-table :data="props.row.supplyItems">
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
                <el-button @click="detailClick(props.row)">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>

      <el-card class="box-card box2" header="需求动态">
        <div class="dataTable">
          <!-- <el-table :data="requireTable" height="250" border style="width: 100%">
            <el-table-column prop="name" label="物资名称" width="150"></el-table-column>
            <el-table-column prop="num" label="数量" width="100"></el-table-column>
            <el-table-column prop="person" label="供给人"></el-table-column>
          </el-table>-->
          <el-table :data="demandData" style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-table :data="props.row.needItems">
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
                <el-button @click="detailClick(props.row)">查看详情</el-button>
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
      // supplyTable: [
      //   {
      //     name: "KN95口罩",
      //     num: "2000只",
      //     person: "WHU"
      //   },
      //   {
      //     name: "KN95口罩",
      //     num: "2000只",
      //     person: "WHU"
      //   },
      //   {
      //     name: "KN95口罩",
      //     num: "2000只",
      //     person: "WHU"
      //   },
      //   {
      //     name: "KN95口罩",
      //     num: "2000只",
      //     person: "WHU"
      //   },
      //   {
      //     name: "KN95口罩",
      //     num: "2000只",
      //     person: "WHU"
      //   },
      //   {
      //     name: "KN95口罩",
      //     num: "2000只",
      //     person: "WHU"
      //   },
      //   {
      //     name: "KN95口罩",
      //     num: "2000只",
      //     person: "WHU"
      //   }
      // ],
      // requireTable: [
      //   {
      //     name: "KN95口罩",
      //     num: "2000只",
      //     person: "WHU"
      //   },
      //   {
      //     name: "KN95口罩",
      //     num: "2000只",
      //     person: "WHU"
      //   },
      //   {
      //     name: "KN95口罩",
      //     num: "2000只",
      //     person: "WHU"
      //   },
      //   {
      //     name: "KN95口罩",
      //     num: "2000只",
      //     person: "WHU"
      //   },
      //   {
      //     name: "KN95口罩",
      //     num: "2000只",
      //     person: "WHU"
      //   },
      //   {
      //     name: "KN95口罩",
      //     num: "2000只",
      //     person: "WHU"
      //   },
      //   {
      //     name: "KN95口罩",
      //     num: "2000只",
      //     person: "WHU"
      //   }
      // ]
    };
  },
  methods: {
     detailClick(data) {
      this.$router.push({ 
        path: "../detail",
        query:{
          id:data.id
        }
        });
      console.log(data.id);
      
    },
    search() {
      var result = "";
      var self = this;
      // var path = "info/getSupplyByUser?user=Ming";
      // var path="https://localhost:5001/api/platform/getSupplyByUser?user=Ming"
      // var path = "/g/grade.do";
      var path = "/g/getSupplyByUser?user=Ming";
      // var path="/g"

      axios
        .get(path)
        .then(response => console.log(response.data))
        .catch(e => self.$message.error(e.response.data));
    },
    getTableData() {
      var url1 = "/g/getAllSupply";
      var self = this;
      axios
        .get(url1)
        .then(response => {
          console.log(response);
          console.log(response.data);
          self.supplyData = response.data;
        })
        .catch(e => self.$message.error(e.response.data));

      var url2 = "/g/getAllNeed";
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
