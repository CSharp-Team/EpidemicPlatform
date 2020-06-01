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
              <span>我的供给与需求</span>
            </div>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="我的供给" name="supply">
                <el-table :data="supplyData" style="width: 100%">
                  <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-table :data="props.row.items">
                        <el-table-column label="物品名称" prop="name"></el-table-column>
                        <el-table-column label="数量" prop="count"></el-table-column>
                      </el-table>
                    </template>
                  </el-table-column>
                  <el-table-column label="供给单号" prop="supplyId"></el-table-column>
                  <el-table-column label="联系人" prop="user"></el-table-column>
                  <el-table-column label="联系方式" prop="phoneNumber"></el-table-column>
                  <el-table-column label="地区" prop="address"></el-table-column>
                  <!-- <el-table-column label="详情" prop>
                    <template slot-scope="props">
                      <el-button @click="detailClick(props.row)">查看详情</el-button>
                    </template>
                  </el-table-column> -->
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="我的需求" name="demand">
                <el-table :data="demandData" style="width: 100%">
                  <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-table :data="props.row.items">
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
              </el-tab-pane>
            </el-tabs>
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
var self=this
export default {
  components: {
    topnav,
    leftnav
  },
  data() {
    return {
      activeName: "supply",
      supplyData:[],
      demandData:[]
    };
  },
  methods: {
    detailClick(data) {
      console.log(data.type)
      
      if(data.type==1)
      {
        var id2=data.needId
        this.$router.push({ 
        path: "../demandDetail",
        query:{
          id:id2
        }
        });
        console.log("id:"+data.needId)
      }
      // else{
      //   var id2=data.supplyId
      //   this.$router.push({ 
      //   path: "../supplyDetail",
      //   query:{
      //     // id:data.suppplyId
      //     id:id2
      //   }
      //   });
      //   console.log("data.suppplyId")
      //   console.log(data.supplyId)
      // }
     
      
    },
    getTableData(){
      var user='yang';  //user为当前的用户名
      user=this.$store.state.user
      console.log(user)
      var url1='/g/Need/getNeedByName';
      url1=url1+'?name='+user;
      var self=this;
       axios
        .get(url1)
        .then(response => {
         console.log(response)
         console.log(response.data)
         self.demandData=response.data
        })
        .catch(e => self.$message.error(e.response.data));
      
      var url2='/g/Supply/getSupplyByName';
      url2=url2+'?name='+user;
       axios
        .get(url2)
        .then(response => {
         console.log(response)
         self.supplyData=response.data
        })
        .catch(e => self.$message.error(e.response.data));
    }
  },
  mounted(){
    this.getTableData();
    self=this
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
</style>
