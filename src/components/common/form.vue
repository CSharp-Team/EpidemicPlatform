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
                v-for="item in options"
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
                             <el-cascader size="large" clearable class="customized_input_340" change-on-select :options="provinceOptions" v-model="selectedOptions" @change="handleChange">
                             </el-cascader>
                         </el-form-item>



      <el-form-item>
        <el-button round type="primary" @click="onSubmit">提交</el-button>
        <el-button round @click="addDomain">新增物品类型</el-button>
        <el-button round @click="resetForm('itemInfo')">重置</el-button>
      </el-form-item>
  </el-form>


</template>

<script>

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
    export default {

       data() {
         return {
options: [{
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

          provinceOptions: provinceAndCityData,
                     selectedOptions: [],
           labelPosition: 'top',
           itemInfo: {
              domains:[{
                name:'',
                number:1
                }],

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
        handleChange(val) {
                   console.log(val)
                   this.ruleForm.province = CodeToText[val[0]]
                   this.ruleForm.city = CodeToText[val[1]]
                   let sameProvince = provinceAndCityData.find((province)=>{
                                           return province.label == data.province
                                       })
                                       let sameCity = sameProvince.children.find((city)=>{
                                           return city.label == data.city
                                       })
                                       this.selectedOptions = [sameProvince.value,sameCity.value]
               },
             onSubmit() {
               console.log('submit!');
                this.$notify({
                         title: '恭喜您提交成功',
                         message: '',
                         type: 'success'
             })
           }
     }
    }

</script>



  .remove-item{
    color: red;
  }
  .submit-btn{
    text-align: center;
    margin-left: -60px;
  }
</style>

</style>
