<template>
    <el-tabs :tab-position="tabPosition" style="height: 900px;" v-model="activeName" @tab-click="handleClick" stretch=true>
    <el-tab-pane label="已发送信息" name="已发送信息">
        <el-table :data="sentMessage" style="width: 100%">  
                  <el-table-column label="信息编号" prop="messageId"></el-table-column>
                  <el-table-column label="接收人" prop="recipient"></el-table-column>                
                  <el-table-column label="申请物品" prop="items.itemname"></el-table-column>
                  <el-table-column label="申请数量" prop="items.itemCount"></el-table-column>
                  <el-table-column label="接收状态" prop="messageState"></el-table-column>
        </el-table>
    </el-tab-pane>
    <el-tab-pane label="未接收信息">
        <el-table :data="receiveMessageUnHandled" style="width: 100%">  
                  <el-table-column label="信息编号" prop="messageId"></el-table-column>
                  <el-table-column label="发送人" prop="applicant"></el-table-column>                
                  <el-table-column label="申请物品" prop="items.itemName"></el-table-column>
                  <el-table-column label="申请数量" prop="items.itemCount"></el-table-column>
                  <el-table-column label="是否接收">
                      <template slot-scope="props">
                      <el-button @click="ReciClick(props.row)">接收</el-button>
                      </template>
                  </el-table-column>
        </el-table>
    </el-tab-pane>
    <el-tab-pane label="已接收信息">
        <el-table :data="receiveMessageHandled" style="width: 100%">  
                  <el-table-column label="信息编号" prop="messageId"></el-table-column>
                  <el-table-column label="发送人" prop="applicant"></el-table-column>                
                  <el-table-column label="申请物品" prop="items.itemName"></el-table-column>
                  <el-table-column label="申请数量" prop="items.itemCount"></el-table-column>
                  <el-table-column label="申请时间" prop="time"></el-table-column>
         </el-table>
    </el-tab-pane>
  </el-tabs>
</template>>
<script>
    import axios from "axios"
    import {post} from "../../utils/request"
    import {get} from "../../utils/request"
    var self=this
 export default {    
    data() {
      return {
        sentMessage:[],
        receiveMessageHandled:[],
        receiveMessageUnHandled:[],
        activeName: '已发送信息',
        tabPosition:'top'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      ReciClick(Id){
          var url = '/g/confirm?MessageId='+Id
          get(url).then(response=>{
              console.log(response)
          })
      },
      getdata(){
          var user = ' ';
          user = this.$store.state.user;
          var senturl = '/g/getSentMessage?name='+user;
          get(senturl)
          .then(response=>{
              console.log(response)
              self.sentMessage=response.data
          })
          
          var reciHandledurl = '/g/getReceiveMessageHandled?name='+user;
          get(reciHandledurl)
          .then(response=>{
              console.log(response)
              self.receiveMessageHandled=response.data
          })

          var unreciHandledurl = '/g/getReceiveMessageUnHandled?name='+user;
          get(unreciHandledurl)
          .then(reponse=>{
              console.log(response)
              self.receiveMessageUnHandled=reponse.data
          })

      }
    },
    mounted(){
        this.getdata();
        self = this ;
    }
  };
</script>>
<style>

</style>>