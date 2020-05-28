<template>
  <div class="page">
    <topnav></topnav>

    <el-row>
      
      <el-col :span="20" offset="2">
        <div class="content">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>我的供给/需求</span>
            </div>
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
          </el-card>


          <el-card class="box-card matchedCard">
            <div slot="header" class="clearfix">
              <span>匹配情况</span>
            </div>
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
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import topnav from "@/components/common/nav";
export default {
  components: {
    topnav,
  },
  data() {
    return {
        localData:[],
        //与该需求/供给 匹配的数据
        matchedData:[],
        id:''
        
    };
  },
  methods:{
      // getParams(){
      //     this.id=this.$route.query.id
      //     console.log(this.id)
      // },
      getData(){
        console.log("getData")
        this.$store.commit('dispUser')
      }
  },
  created(){
      this.getParams()
      
  },
  mounted(){
    this.getData()
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
.matchedCard{
    margin-top: 50px;
}
</style>
