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
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <div class="displayInfo">
      <el-card class="box-card box1"  header="供求动态">
      
        <!-- <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div> -->
        <div class="supplyTable">
             <el-table
    :data="tableData"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="物资名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="num"
      label="数量"
      width="100">
    </el-table-column>
    <el-table-column
      prop="person"
      label="供给人">
    </el-table-column>
  </el-table>
        </div>
      </el-card>

      <el-card class="box-card box2"  header="需求动态">
        
        <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
import topnav from "@/components/common/nav";
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
      tableData: [{
         name:'KN95口罩',
         num:'2000只',
         person:'WHU'
        }, {
         name:'KN95口罩',
         num:'2000只',
         person:'WHU'
        }, {
         name:'KN95口罩',
         num:'2000只',
         person:'WHU'
        }, {
           name:'KN95口罩',
         num:'2000只',
         person:'WHU'
        }, {
           name:'KN95口罩',
         num:'2000只',
         person:'WHU'
        }, {
          name:'KN95口罩',
         num:'2000只',
         person:'WHU'
        }, {
          name:'KN95口罩',
         num:'2000只',
         person:'WHU'
        }]
      
    };
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

  .box-card {
    width: 480px;
  }

.box1{
    width: 44%;
    margin-top: 30px;
    margin-left: 5%;
    float: left;
}

.box2{
    width: 44%;
    margin-top: 30px;
    margin-left: 2%;
    float: left;

}
</style>
