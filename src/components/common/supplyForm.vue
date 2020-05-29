<template>
<el-form :label-position="labelPosition" label-width="80px" :model="itemInfo" ref="itemInfo">
  <el-row :gutter="20" v-for="(domain, index) in itemInfo.domains" :key="domain.key">
    <el-col :span="6">
      <el-form-item>
      </el-form-item>
    </el-col>
    <el-col :span="6">
       <el-form-item label="物品类型"  :key="domain.key"
                                :prop="'domains.' + index + '.name'">
           <el-select v-model="domain.name">
               <el-option
                v-for="item in option"
                :key="item.name"
                :label="item.label"
                :value="item.name">
               </el-option>
          </el-select>
       </el-form-item>
    </el-col>
    <el-col :span="6">
        <el-form-item label="物品数量(可直接输入)"  :key="domain.key"
                                       :prop="'domains.' + index + '.number'">
            <el-input-number v-model="domain.number" @change="handleChange1" :min="1" :max="100000000" ></el-input-number>
        </el-form-item>
    </el-col>
    <el-col :span="4"><div>
       <el-form-item label=" ">
       </el-form-item>
       <el-button round type="danger" icon="el-icon-delete" @click.prevent="removeDomain(domain)">delete</el-button>
       </div></el-col>
 </el-row>
 <el-row>
    <el-col :span="9">
      <el-form-item>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="联系方式">
          <el-input v-model="itemInfo.tel"></el-input>
      </el-form-item>  </el-col> </el-row>
      <el-form-item label="省市 :" prop="description">
                            <el-cascader :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader>
                         </el-form-item>
      <el-form-item>
        <el-button round type="primary" @click="onSubmit">提交</el-button>
        <el-button round @click="addDomain">新增物品类型</el-button>
        <el-button round @click="resetForm('itemInfo')">重置</el-button>
      </el-form-item>
  </el-form>


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
                              name: 'N95 Mask',
                              label: 'N95口罩'
                            }, {
                              name: 'surgery mask',
                              label: '医用外科口罩'
                            }, {
                              name: 'mask',
                              label: '普通口罩'
                            }, {
                              name: 'protection glasses',
                              label: '护目镜'
                            }, {
                              name: 'protection suit',
                              label: '防护服'
                            }],
           labelPosition: 'top',
           itemInfo: {
              domains:[{
                name:'',
                number:1
                }],
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
                name: '',
                number:1,
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
                var path = "/g/addSupply";
                 
               axios.post(path,{
                  "User":this.$store.state.user,
                	"PhoneNumber":self.itemInfo.tel,
	                "Time":"2020.05.21",
                	"Address":self.itemInfo.Address,
                	"SupplyItems":self.itemInfo.domains
               }) .then(response => {
              self.$message({
                message: "恭喜您提交成功",
                type: "success"
              });
               self.$notify({
                         title: '恭喜您提交成功',
                         message: '',
                         type: 'success'
             })
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
</style>

