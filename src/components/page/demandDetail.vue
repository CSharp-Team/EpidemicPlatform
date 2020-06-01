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
                  <el-popover placement="right" width="400px" trigger="click">
                    <el-form ref="form" :model="form" label-width="80px">
                      <el-form-item
                        v-for="item1 in requestItems"
                        :key="item1.supplyId"
                        :label="item1.name"
                      >
                        <el-input v-model="item1.count"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-row>
                          <el-col :span="12">
                            <el-button type="primary" @click="onSubmit(props.row)">提交</el-button>
                          </el-col>
                          <el-col :span="12">
                            <el-button @click="visible = false">取消</el-button>
                          </el-col>
                        </el-row>
                      </el-form-item>
                    </el-form>
                    <el-button slot="reference" type="text" @click="copyItems(props.row)">申请</el-button>
                  </el-popover>
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
      var url = "/g/Need/getNeedById";
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
    getMatchedData() {
      var url2 = "/g/Supply/needMatch";
      console.log("this.id=" + this.id);
      url2 = url2 + "?id=" + this.id;
      axios
        .get(url2)
        .then(response => {
          // console.log(response);
          self.matchedData = response.data;
           for(var i=0;i<response.data.length;i++){
              self.matchedData2.push(response.data[i]);
              self.matchedItems.push(response.data[i].items);
            }
        })
        .catch(e => self.$message.error(e.response.data));
        console.log("\n\n\n");
        console.log("matchedData2")
        console.log(self.matchedData2)
        console.log("matchedItems")
        console.log(self.matchedItems)
        console.log("\n\n\n");
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
            "SupplyId": self.matchedData2.SupplyId,
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
