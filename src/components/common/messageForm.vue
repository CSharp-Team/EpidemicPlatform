<template>

    <el-tabs :tab-position="tabPosition" style="height: 900px;" v-model="activeName" @tab-click="handleClick" stretch=true>
    <el-tab-pane label="已发送消息" name="已发送信息">
        <el-table :data="sentMessage" style="width: 100%">  
                  <el-table-column label="信息编号" prop="messageId"></el-table-column>
                  <el-table-column label="接收人" prop="recipient"></el-table-column>  
                  <el-table-column label="时间" prop="time" ></el-table-column>             
                      <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-table :data="props.row.items">
                        <el-table-column label="物品名称" prop="itemName"></el-table-column>
                        <el-table-column label="物品数量" prop="itemCount"></el-table-column>
                      </el-table>
                    </template>
                  </el-table-column>
                  <el-table-column label="接收状态" prop="meaasgeState"></el-table-column>
        </el-table>
    </el-tab-pane>
    <el-tab-pane label="未接收消息">
        <el-table :data="receiveMessageUnHandled" style="width: 100%">  
                  <el-table-column label="信息编号" prop="messageId"></el-table-column>
                  <el-table-column label="发送人" prop="applicant"></el-table-column>                
                  <el-table-column label="时间" prop="time" ></el-table-column>             
                      <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-table :data="props.row.items">
                        <el-table-column label="物品名称" prop="itemName"></el-table-column>
                        <el-table-column label="物品数量" prop="itemCount"></el-table-column>
                      </el-table>
                    </template>
                  </el-table-column>
                  <el-table-column label="是否接收">
                      <template slot-scope="props">
                      <el-button @click="ReciClick(props.row)">接收</el-button>
                      </template>
                  </el-table-column>
        </el-table>
    </el-tab-pane>
    <el-tab-pane label="已接收消息">
        <el-table :data="receiveMessageHandled" style="width: 100%">  
                  <el-table-column label="信息编号" prop="messageId"></el-table-column>
                  <el-table-column label="发送人" prop="applicant"></el-table-column>                
                  <el-table-column label="时间" prop="time" ></el-table-column>             
                 <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-table :data="props.row.items">
                        <el-table-column label="物品名称" prop="itemName"></el-table-column>
                        <el-table-column label="物品数量" prop="itemCount"></el-table-column>
                      </el-table>
                    </template>
                  </el-table-column>
                  <el-table-column label="申请时间" prop="time"></el-table-column>
         </el-table>
    </el-tab-pane>
  </el-tabs>

</template>>
<script>
    import axios from "axios"

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
          axios.get(url).then(response=>{
              console.log(response)
          })
      },
      getdata(){
          var user = ' ';
          user = this.$store.state.user;
          var self = this;

          var senturl = '/g/getSentMessage?name='+user;
<<<<<<< HEAD
          get(senturl)
=======
          axios.get(senturl)
>>>>>>> 60c686ffdbc1da07416a63519ebb4e66a887e827
          .then(response=>{
              console.log(response)
              self.sentMessage=response.data
          })
          
          var reciHandledurl = '/g/getReceiveMessageHandled?name='+user;
<<<<<<< HEAD
          get(reciHandledurl)
=======
          axios.get(reciHandledurl)
>>>>>>> 60c686ffdbc1da07416a63519ebb4e66a887e827
          .then(response=>{
              console.log(response)
              self.receiveMessageHandled=response.data
          })

          var unreciHandledurl = '/g/getReceiveMessageUnHandled?name='+user;
          axios.get(unreciHandledurl)
          .then(response=>{
              console.log(response)
              self.receiveMessageUnHandled=response.data
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