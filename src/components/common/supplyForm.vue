<template>
  <el-card class="box-card box" shadow="always">
    <div slot="header" class="clearfix">
      <span>供给表单</span>
    </div>
    <el-form :label-position="labelPosition" label-width="100px" :model="itemInfo" ref="itemInfo">
       <el-row>
        <el-col :span="8">
          <el-form-item label="联系方式">
            <el-input v-model="itemInfo.tel"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="省市 :" prop="description">
            <el-cascader :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader>
          </el-form-item>
        </el-col>
      </el-row>
       <el-row>
        <el-col :span="4">
          <el-form-item label="是否无偿供给">
           <el-switch v-model="itemInfo.benefit"></el-switch>
        </el-form-item>
        </el-col>
      </el-row>
       <el-row>
        <el-col :span="17">
        <el-form-item label="供给方类型">
          <el-radio-group v-model="itemInfo.company">
            <el-radio label="个人"></el-radio>
            <el-radio label="医疗机构"></el-radio>
            <el-radio label="政府机构"></el-radio>
            <el-radio label="社会企业"></el-radio>
          </el-radio-group>
        </el-form-item>
        </el-col>
      </el-row>
       <el-row>
        <el-col :span="14">
         <el-form-item label="详情描述">
          <el-input type="textarea" v-model="itemInfo.detail"></el-input>
         </el-form-item>
        </el-col>
      </el-row>
      <el-row  :gutter="10" v-for="(domain, index) in itemInfo.domains" :key="domain.key">
        <el-col :span="8">
          <el-form-item label="物品类型" :key="domain.key" :prop="'domains.' + index + '.name'">
            <el-select v-model="domain.name">
              <el-option
                v-for="item in option"
                :key="item.name"
                :label="item.label"
                :value="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
   
        <el-col :span="8">
          <el-form-item label="物品数量" :key="domain.key" :prop="'domains.' + index + '.count'">
            <el-input-number
              v-model="domain.count"
              @change="handleChange1"
              :min="1"
              :max="100000000"
            ></el-input-number>
          </el-form-item>
        </el-col>
             <el-col :span="2">
          <el-form-item>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <!-- <el-form-item label=" "></el-form-item> -->
          <el-button
            round
            type="danger"
            icon="el-icon-delete"
            @click.prevent="removeDomain(domain)"
          >delete</el-button>
        </el-col>
      </el-row>
     <el-row>
       <el-col span="20">
      <el-form-item>
        <el-button round type="primary" @click="onSubmit">提交</el-button>
        <el-button round @click="addDomain">新增物品类型</el-button>
        <el-button round @click="resetForm('itemInfo')">重置</el-button>
      </el-form-item></el-col></el-row>
    </el-form>
  </el-card>
</template>

<script>
import axios from "axios";
import { post } from '../../utils/request'
import
{
    provinceAndCityData,
    regionData,
    provinceAndCityDataPlus,
    regionDataPlus,
    CodeToText,
    TextToCode
}
from 'element-china-area-data';
import registerVue from '../page/register.vue';
    export default {

       data() {
         return {
           options: provinceAndCityDataPlus,
                selectedOptions: [],
option: [{
                              name: 'N95口罩',
                              label: 'N95口罩'
                            }, {
                              name: '医用外科口罩',
                              label: '医用外科口罩'
                            }, {
                              name: '普通口罩',
                              label: '普通口罩'
                            }, {
                              name: '护目镜',
                              label: '护目镜'
                            }, {
                              name: '防护服',
                              label: '防护服'
                            }],
           labelPosition: 'left',
           itemInfo: {
              domains:[{
                id:1,
                name:'',
                count:1
                }],
              company:"",
              benefit:false,
              detail:"",
              Address:'',
              tel: ''
           }
         };
       },
       methods: {
        resetForm(formName) {
             this.$refs[formName].resetFields();
           },
        removeDomain(item) {
              var index = this.itemInfo.domains.indexOf(item);
              if (index !== -1) {
                this.itemInfo.domains.splice(index, 1);
              }
            },
        addDomain() {
              this.itemInfo.domains.push({
                id:1,
                name: '',
                count:1,
                key: Date.now()
              });
            },
        handleChange1(value) {
                      console.log(value);
                    },
        handleChange(value) {
                 
                console.log(CodeToText[value[0]]) 
                console.log(CodeToText[value[1]]) 
                this.itemInfo.Address=CodeToText[value[1]]
               },
        onSubmit() {
               console.log('submit!');
                var self = this;
                var path = "/g/Supply/addSupply";
                 
               axios.post(path,{
                  User:this.$store.state.user,
                	PhoneNumber:self.itemInfo.tel,
                  Time:"2020.05.21",
                  Company:self.itemInfo.company,
                  Benefit:self.itemInfo.benefit,
                  Detail:self.itemInfo.detail,
                  Address:self.itemInfo.Address,
                  Type:"1",
                	Items:self.itemInfo.domains
               }) .then(response => {
               self.$notify({
                         title: '恭喜您提交成功',
                         message: '',
                         type: 'success'
             })
                console.log(response)
                })
             .catch(e => self.$message.error(e.response.data));
       
     

               
           }
     }
    };
       


</script>


<style>
  .remove-item{
    color: red;
  }
  .submit-btn{
    text-align: center;
    margin-left: -60px;
  }
  .box{
  width: 56%;
  margin-left: 22%;
  margin-top: 20px;
}
</style>

