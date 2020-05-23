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
                <!-- <el-table
                  :data="tableData"
                  style="width: 100%;margin-bottom: 20px;"
                  row-key="id"
                  border
                  default-expand-all
                  :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
                  >
                   <el-table-column label="商品 ID" prop="id"></el-table-column>
                  <el-table-column label="联系人" prop="contact"></el-table-column>
                  <el-table-column label="地区" prop="region"></el-table-column>
                </el-table>-->
                <el-table :data="demandData" style="width: 100%">
                  <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-table :data="props.row.items">
                        <el-table-column label="物品名称" prop="name"></el-table-column>
                        <el-table-column label="数量" prop="num"></el-table-column>
                      </el-table>
                    </template>
                  </el-table-column>
                  <el-table-column label="商品 ID" prop="id"></el-table-column>
                  <el-table-column label="联系人" prop="contact"></el-table-column>
                  <el-table-column label="地区" prop="region"></el-table-column>
                  <el-table-column label="详情" prop>
                    <template slot-scope="props">
                      <el-button @click="detailClick(props.row)">查看详情</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="我的需求" name="demand">
                <el-table :data="supplyData" style="width: 100%">
                  <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-table :data="props.row.items">
                        <el-table-column label="物品名称" prop="name"></el-table-column>
                        <el-table-column label="数量" prop="num"></el-table-column>
                      </el-table>
                    </template>
                  </el-table-column>
                  <el-table-column label="商品 ID" prop="id"></el-table-column>
                  <el-table-column label="联系人" prop="contact"></el-table-column>
                  <el-table-column label="地区" prop="region"></el-table-column>
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
export default {
  components: {
    topnav,
    leftnav
  },
  data() {
    return {
      activeName: "supply",
      supplyData: [
        {
          id: 1,
          contact: "yang",
          region: "湖北武汉",
          items: [
            { name: "KN95口罩", num: "20000" },
            { name: "KN95口罩", num: "20000" },
            { name: "KN95口罩", num: "20000" }
          ]
        },
        {
          id: 2,
          contact: "yang",
          region: "湖北武汉",
          items: [
            { name: "KN95口罩", num: "10000" },
            { name: "N95口罩", num: "20000" },
            { name: "KN95口罩", num: "20000" }
          ]
        }
      ],
      demandData: [
        {
          id: 20,
          contact: "yang",
          region: "湖北武汉",
          items: [
            { name: "N95口罩", num: "20000" },
            { name: "N95口罩", num: "20000" },
            { name: "N95口罩", num: "20000" }
          ]
        },
        {
          id: 2,
          contact: "yang",
          region: "湖北武汉",
          items: [
            { name: "KN95口罩", num: "10000" },
            { name: "N95口罩", num: "20000" },
            { name: "KN95口罩", num: "20000" }
          ]
        }
      ]
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
      
    }
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
