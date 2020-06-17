<template>
  <div class="page">
    <topnav></topnav>

    <el-row>
      <div class="content">
      <el-col :span="10" offset="1">
          <el-card class="box-card demandCard">
            <div slot="header" class="clearfix">
              <span>供给详情</span>
            </div>
            <el-table :data="localData.items"  :show-header="false" style="width: 100%" height="250px">
              <el-table-column label="物品名称" prop="name"></el-table-column>
              <el-table-column label="数量" prop="count"></el-table-column>
            </el-table>
          </el-card>
      </el-col>


      
      <el-col :span="11" offset="1">
        <el-card class="box-card dealCard">
  <div slot="header" class="clearfix">
    <span>对接动态</span>
  </div>
  <div v-for="d in dynamicData" :key="d" class="text item">
    {{ d.supplicant+'向'+d.requestor+'提供了'+d.itemName+' '+d.itemCount }}
  </div>
</el-card>

      </el-col>
      </div>
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
      //与该需求 匹配的数据
      matchedData: [],
      dataItems: [],
      matchedData2:[], //备份
      matchedItems:[],
      id: "",
      visible: false,
      form: {
        id: ""
      },
      requestItems:[],
      dynamicData:[]
    };
  },
  methods: {
    getParams() {
      console.log("getparams");
      this.id = self.$route.query.id;
      console.log("self.id：" + self.id);
    },
    getData() {
      console.log("getData");
      //供给
      var url = "/g/Supply/getSupplyById";
      url = url + "?id=" + this.id;
      axios
        .get(url)
        .then(response => {
          // console.log(response);
          self.localData = response.data;
          // self.$set(self,'localData',response.data)
          for (var i = 0; i < response.data.items.length; i++) {
            self.dataItems.push(response.data.items[i]);
          }
        })
        .catch(e => self.$message.error(e.response.data));

      // console.log("\n\n\n");
      // console.log(self.dataItems);
      // console.log("\n\n\n");
    },
    onSubmit(item) {
      this.visible = false;
      console.log(item)

      console.log("submit!");

       var url = "/g/Message/sendFirstRequest";
        axios
            .post(url, 
            { 
            "Applicant": this.$store.state.user,
            "Recipient":self.matchedData2.user,
            "SupplyId": self.matchedData2.supplyId,
            "NeedId":self.id,
            "Time":"",
            "Items":self.requestItems
            })
            .then(response => {
              self.$message({
                message: "申请已发送",
                type: "success"
              });
            })
            .catch(e => self.$message.error(e.response.data));
    },
    onRequest() {
      self.visible = true;
      console.log("request");
    },
    copyItems(data){
      self.requestItems=[]
      for(var i=0;i<data.items.length;i++){
        // self.requestItems.push(data.items[i]);
        // self.requestItems.push(JSON.parse(JSON.stringify(data.items[i])));
        self.requestItems=JSON.parse(JSON.stringify(data.items)); //深拷贝
        self.matchedData2=JSON.parse(JSON.stringify(data)); //深拷贝
      }
      console.log("self.requestItems")
      console.log(self.requestItems)
      console.log("self.matchedData2")
      console.log(self.matchedData2)
    },
    getDynamic(){
      var url2 = "/g/Message/getExchangeByNeedId";
      console.log("this.id=" + this.id);
      url2 = url2 + "?id=" + this.id;
      axios
        .get(url2)
        .then(response => {
          console.log(response);
          for(var i=0;i<response.data.length;i++){
             
              self.dynamicData.push(response.data[i]);
            }
          console.log("dynamicData")
          console.log(self.dynamicData)
        })
        .catch(e => self.$message.error(e.response.data));

    }
  },
  mounted() {
    self = this;
    self.getParams();
    this.getData();
    this.getDynamic()
  }
};
</script>


<style scoped>
.page {
  width: 100%;
  /* height: 100%; */
  /* background-color: #f8f8f8; */
}
.content {
  float: left;
  width: 100%;
  margin-top: 2%;
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
  /* margin-top: 50px; */
  /* height: 400px; */
}
.demandCard{
  /* height: 400px; */
}
.dealCard{
  /* margin-top: 20px; */
  height: 500px;
}
</style>
