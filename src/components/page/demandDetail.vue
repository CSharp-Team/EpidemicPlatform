<template>
  <div class="page">
    <topnav></topnav>

    <el-row>
      <div class="content">
        <el-col :span="10" offset="1">
          <el-card class="box-card demandCard">
            <div slot="header" class="clearfix">
              <span>需求详情</span>
            </div>
            <el-table
              :data="localData.items"
              :show-header="false"
              style="width: 100%"
              height="250px"
            >
              <el-table-column label="物品名称" prop="name"></el-table-column>
              <el-table-column label="数量" prop="count"></el-table-column>
            </el-table>
          </el-card>
        </el-col>

        <el-col :span="11" offset="1">
          <el-card class="box-card matchedCard">
            <div slot="header" class="clearfix">
              <span>匹配情况</span>
            </div>
            <el-table :data="matchedData" style="width: 100%" height="250px">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-table :data="props.row.items" :show-header="false">
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
                  <el-popover
                    placement="right"
                    width="450px"
                    trigger="click"
                    :ref="`popover-${props.$index}`"
                  >
                    <el-form ref="form" :model="form" label-width="100px">
                      <el-form-item
                        v-for="item1 in requestItems"
                        :key="item1.supplyId"
                        :label="item1.name"
                      >
                        <el-input v-model="item1.count"></el-input>
                      </el-form-item>
                      <el-form-item label="申请原因">
                        <el-input
                          type="textarea"
                          :rows="2"
                          placeholder="请输入内容"
                          v-model="requestReason"
                        ></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-row>
                          <el-col :span="12">
                            <el-button type="primary" @click="onSubmit(props.row,props)">提交</el-button>
                          </el-col>
                          <el-col :span="12">
                            <el-button @click="cancelClick(props)">取消</el-button>
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
        </el-col>
      </div>
    </el-row>

    <el-row>
      <el-col :span="22" offset="1">
        <el-card class="box-card dealCard">
          <div slot="header" class="clearfix">
            <span>对接动态</span>
          </div>
          <div
            v-for="d in dynamicData"
            :key="d"
            class="text item"
          >
          <div v-if="d.type==='请求' && d.itemCount!='0'">
             {{ d.requestor+'向'+d.supplicant+'请求了'+d.itemName+' '+d.itemCount }}
          </div>
          <div v-if="d.type==='发货' && d.itemCount!='0'">
               {{ d.supplicant+'向'+d.requestor+'发货'+d.itemName+' '+d.itemCount }}
          </div>
          <div v-if="d.type==='完成' && d.itemCount!='0'">
               {{ d.supplicant+'与'+d.requestor+'的对接完成，对接物资：'+d.itemName+' '+d.itemCount }}
          </div>

       
          </div>
        </el-card>
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
      matchedData2: [], //备份
      matchedItems: [],
      id: "",
      visible: false,
      form: {
        id: ""
      },
      requestItems: [],
      dynamicData: [],
      requestItems2: [],
      requestReason: ""
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
          for (var i = 0; i < response.data.length; i++) {
            // self.matchedData2.push(response.data[i]);
            self.matchedItems.push(response.data[i].items);
          }
        })
        .catch(e => self.$message.error(e.response.data));
      console.log("\n\n\n");
      // console.log("matchedData2")
      // console.log(self.matchedData2)
      console.log("matchedItems");
      console.log(self.matchedItems);
      console.log("\n\n\n");
    },
    onSubmit(item, scope) {
      // this.visible = false;
      scope._self.$refs[`popover-${scope.$index}`].doClose();
      console.log(item);
      for (var j = 0; j < self.requestItems.length; j++) {
        self.requestItems2.push({
          ItemId: self.requestItems[j].supplyItemId,
          ItemName: self.requestItems[j].name,
          ItemCount: parseInt(self.requestItems[j].count)
        });
      }

      console.log("submit!");

      var url = "/g/Message/sendFirstRequest";
      axios
        .post(url, {
          Applicant: this.$store.state.user,
          Recipient: self.matchedData2.user,
          SupplyId: self.matchedData2.supplyId,
          NeedId: parseInt(self.id),
          Time: "",
          Reason: self.requestReason,
          Items: self.requestItems2
        })
        .then(response => {
          self.$message({
            message: "申请已发送",
            type: "success"
          });
        })
        .catch(e => self.$message.error(e.response.data));
      self.requestItems2 = [];
    },
    onRequest() {
      self.visible = true;
      console.log("request");
    },
    copyItems(data) {
      self.requestItems = [];
      for (var i = 0; i < data.items.length; i++) {
        // self.requestItems.push(data.items[i]);
        // self.requestItems.push(JSON.parse(JSON.stringify(data.items[i])));
        self.requestItems = JSON.parse(JSON.stringify(data.items)); //深拷贝
        self.matchedData2 = JSON.parse(JSON.stringify(data)); //深拷贝
      }
      console.log("self.requestItems");
      console.log(self.requestItems);
      console.log("self.matchedData2");
      console.log(self.matchedData2);
    },
    getDynamic() {
      var url2 = "/g/Message/getExchangeByNeedId";
      console.log("this.id=" + this.id);
      url2 = url2 + "?id=" + this.id;
      axios
        .get(url2)
        .then(response => {
          console.log(response);
          for (var i = 0; i < response.data.length; i++) {
            self.dynamicData.push(response.data[i]);
          }
          console.log("dynamicData");
          console.log(self.dynamicData);
        })
        .catch(e => self.$message.error(e.response.data));
    },
    cancelClick(props) {
      props._self.$refs[`popover-${props.$index}`].doClose();
    }
  },
  mounted() {
    self = this;
    self.getParams();
    this.getData();
    this.getMatchedData();
    this.getDynamic();
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
.demandCard {
  /* height: 400px; */
}
.dealCard {
  margin-top: 20px;
  height: 200px;
}
</style>

