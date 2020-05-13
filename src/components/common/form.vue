<template>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="物品名称">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="物品数量">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="联系方式">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
</el-form>
</template>

<script>
    export default {
       data() {
         return {
           labelPosition: 'right',
           formLabelAlign: {
             name: ' ',
             number: '',
             tel: ''
           }
         };
       }
     }
</script>

<style scoped>

</style>
