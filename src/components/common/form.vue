<template>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="物品名称">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="物品数量">
    <el-input v-model="formLabelAlign.number"></el-input>
  </el-form-item>
  <el-form-item label="联系方式">
    <el-input v-model="formLabelAlign.tel"></el-input>
  </el-form-item>
 <el-form-item label="省市 :" prop="description">
                             <el-cascader size="large" clearable class="customized_input_340" change-on-select :options="provinceOptions" v-model="selectedOptions" @change="handleChange">
                             </el-cascader>
                         </el-form-item>
   <el-form-item>
      <el-button type="primary" @click="onSubmit">立即提交</el-button>
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
          provinceOptions: provinceAndCityData,
                     selectedOptions: [],
           labelPosition: 'right',
           formLabelAlign: {
             name: '',
             number: '',
             tel: ''
           }
         };
       },
       methods: {

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

<style scoped>

</style>
