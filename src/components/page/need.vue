<template>
<el-container>
  <el-header>
    <div class="nav">
      <v-nav></v-nav>
    </div>
  </el-header>
  <el-main>
    <div class="form">
      <v-form></v-form>
    </div>
  </el-main>
</el-container>
</template>
<script>
 import vForm from '../common/form'
 import vNav from '../common/nav'
  export default {
    components:{
    vForm,vNav
    }
  }
</script>
