<template>
  <div class="bg">
    <el-container class="home-box">
      <el-header>
        <topnav class="top"></topnav>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="8">
            <div style="margin-top: 5px;">
              类型：
              <el-radio v-model="radio" label="1">供给</el-radio>
              <el-radio v-model="radio" label="2">需求</el-radio>
            </div>
          </el-col>
          <el-col :span="6">
            <el-row>
              <el-col :span="12">
                <el-input v-model="input" placeholder="请输入物品数量"></el-input>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="8">
            <div>
              <el-input placeholder="请输入要查询的物资名称" v-model="input3" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                  <el-option label="N95口罩" value="1"></el-option>
                  <el-option label="医用外科口罩" value="2"></el-option>
                  <el-option label="护目镜" value="3"></el-option>
                  <el-option label="防护服" value="4"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </el-col>

        </el-row>

        <el-table
          :data="tableData"
          height="750"
          border
          style="width: 100%">
          <el-table-column
            prop="address"
            label="地点"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="物资名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="num"
            label="物资数量">
          </el-table-column>
          <el-table-column
            prop="contact"
            label="联系人">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="联系电话">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>

  </div>
</template>

<script>
    import topnav from "@/components/common/nav";
    import Topnav from "../common/nav";
    export default {
        name: "home.vue",
        components: {Topnav},
        comments:{
            topnav
        },
        beforeRouteEnter: (from, to, next) => {
            next(vm => {
                vm.getPorts();
            });
        },
        data() {
            return {
                form: {
                    message: '',
                    portName: '',
                    baudrate: '',
                    datebits: '',
                    stopbits: '',
                    parity: '',
                    result: ''
                },
                port: {
                    ports: ''
                },
                tableData: [{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },{
                    address: '上海市普陀区金沙江路 1518 弄',
                    name:'N95口罩',
                    num:'100',
                    contact:'郭小俊',
                    phone:'11111111111'
                },],
                input3: '',
                select:'',
                radio:'1'
            }
        },
        methods: {
            selectChange(val) {
                console.log(val);
                this.form.ports = val;
            },
            getPorts: function () {
                this.axios({
                    method: 'get',
                    url: 'http://localhost:8080/comm/port',
                }).then(response => {
                    console.log(response);
                    this.port.ports = response.data.data;
                    console.log(this.port.ports);
                }).catch(error => {
                    console.log(error);
                })
            },
            getData() {
                this.axios({
                    method: 'post',
                    url: 'http://localhost:8080/comm/sendData',
                    data: JSON.stringify({
                        message: this.form.message,
                        portName: this.form.portName,
                        baudrate: this.form.baudrate,
                        datebits: this.form.datebits,
                        stopbits: this.form.stopbits,
                        parity: this.form.parity
                    }),
                    headers: {'Content-Type': 'application/json'},
                }).then(result => {
                    console.log(result);
                    if (result.data.code === 200) {
                        this.form.result = result.data.data;
                    } else {
                        this.$message.error(result.data.message);
                    }
                }).catch(error => {
                    this.$message.error("输入数据有误，请检查是否正确输入");
                })
            }
        },
    }
</script>

<style scoped>
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 30px;
  }

  .el-select .el-input {
    width: 130px;
  }

  .el-main {
    background: rgba(220, 223, 230, 0.8);
    color: #333;
    text-align: center;
  }

  .home-box {
    height: 100%;
    width: 100%;
  }

  .bg {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    background-size: 100% 100%;
    height: 100%;
    width: 100%
  }
  .top{
    width: 100%;
    height: 100%;
  }
</style>
