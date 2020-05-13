<template>

  <el-menu
               router :default-active="$route.path"
               class="el-menu-demo"
               mode="horizontal"
               @close="handleClose"
               @open="handleOpen"
               @select="handleSelect"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
               <el-row type="flex" class="row-bg" justify="end">
                <el-col :span="3"><div class="grid-content bg-purple">
               <el-menu-item index="1">疫情供需平台</el-menu-item>
               </div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light">
                <el-menu-item index="1">       </el-menu-item></div></el-col>
                <el-col :span="3"><div class="grid-content bg-purple">
               <el-submenu index="3"><template slot="title">发布</template>
               <el-menu-item index="/give">我的供求</el-menu-item>
                 <el-menu-item index="/need">我的需求</el-menu-item></el-submenu>
                  </div></el-col>
                   <el-col :span="3"><div class="grid-content bg-purple">
               <el-menu-item index="4">我的信息</el-menu-item>
                 </div></el-col>
                  </el-row>
             </el-menu>
</template>

<script>
     export default {
        data() {
          return {
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            }
          }
        },
        methods: {
          onSubmit() {
            console.log('submit!');
          }
        }
      }
</script>

