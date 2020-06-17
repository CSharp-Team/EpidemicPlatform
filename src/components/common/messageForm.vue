<template>

  <el-tabs :tab-position="tabPosition2" style="height: 900px;" v-model="activeName" @tab-click="handleClick" >
    <el-tab-pane label="供给订单消息" name="供给订单消息">
      <el-tabs :tab-position="tabPosition" style="height: 800px;" v-model="activeName2" @tab-click="handleClick" >
         <el-tab-pane label="我收到的申请" name="我收到的申请">
             <el-table :data="FirstMessage" style="width: 100%">  
                  <el-table-column label="消息编号" prop="messageId"></el-table-column>
                  <el-table-column label="发送人" prop="applicant"></el-table-column>                
                  <el-table-column label="时间" prop="time" ></el-table-column>             
                      <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-table :data="props.row.items" :show-header="false">
                        <el-table-column  prop="itemName"></el-table-column>
                        <el-table-column  prop="itemCount"></el-table-column>
                      </el-table>
                    </template>
                       </el-table-column>
                  <el-table-column label="是否接受">
                        <template slot-scope="scope">
             <el-button v-if="scope.row.meaasgeState=='Y'" type="primary" size="medium"  :disabled=true>已发货</el-button>
             <el-button v-else-if="scope.row.meaasgeState=='N'"  type="primary" size="medium"  @click="FirstClick(scope.row)">确认发货</el-button>
                         </template>
                      <!-- <template slot-scope="props">
                      <el-button :disabled="!props.row.meaasgeState==='N'" @click="ReciClick(props.row)">接收申请</el-button>
                      </template> -->
                  </el-table-column>
             </el-table>
         </el-tab-pane>
         <el-tab-pane label="我接受的申请" name="我接受的申请">
             <el-table :data="ThirdMessage" style="width: 100%">  
                  <el-table-column label="消息编号" prop="messageId"></el-table-column>
                  <el-table-column label="发送人" prop="applicant"></el-table-column>                
                  <el-table-column label="时间" prop="time" ></el-table-column>             
                      <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-table :data="props.row.items" :show-header="false">
                        <el-table-column label="" prop="itemName"></el-table-column>
                        <el-table-column label="" prop="itemCount"></el-table-column>
                      </el-table>
                    </template>
                  </el-table-column>
                  <el-table-column label="是否接收">
                      <template slot-scope="props">
                         <el-button v-if="props.row.meaasgeState=='Y'" type="primary" size="medium"  :disabled=true>供需完成</el-button>
                         <el-button v-else-if="props.row.meaasgeState=='N'"  type="primary" size="medium"  @click="ConfirmClick(props.row)">确认对方已收到</el-button>
                      </template>
                  </el-table-column>
               </el-table>
         </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
    <el-tab-pane label="需求订单消息" name="需求订单信息">
       <el-tabs :tab-position="tabPosition" style="height: 800px;" v-model="activeName3" @tab-click="handleClick" stretch=true>
         <el-tab-pane label="已发送的消息" name="我发出的申请">
             <el-table :data="sentMessage" style="width: 100%">  
                  <el-table-column label="消息编号" prop="messageId"></el-table-column>
                  <el-table-column label="接收人" prop="recipient"></el-table-column>  
                  <el-table-column label="时间" prop="time" ></el-table-column>             
                      <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-table :data="props.row.items" :show-header="false">
                        <el-table-column prop="itemName"></el-table-column>
                        <el-table-column prop="itemCount"></el-table-column>
                      </el-table>
                    </template>
                  </el-table-column>
                  <el-table-column label="接收状态" prop="meaasgeState"></el-table-column>
              </el-table>
         </el-tab-pane>
           <el-tab-pane label="待收货的物资" name="待收货的物资">
             <el-table :data="SecondMessage" style="width: 100%">  
                  <el-table-column label="消息编号" prop="messageId"></el-table-column>
                  <el-table-column label="发送人" prop="applicant"></el-table-column>                
                  <el-table-column label="时间" prop="time" ></el-table-column>             
                      <el-table-column type="expand">
                    <template slot-scope="props">
                      <el-table :data="props.row.items" :show-header="false">
                        <el-table-column label="" prop="itemName"></el-table-column>
                        <el-table-column lable="" prop="itemCount"></el-table-column>
                      </el-table>
                    </template>
                  </el-table-column>
                  <el-table-column label="是否接收">
                     <template slot-scope="scope">
             <el-button v-if="scope.row.meaasgeState=='Y'" type="primary" size="medium"  :disabled=true>已收货</el-button>
             <el-button v-else-if="scope.row.meaasgeState=='N'"  type="primary" size="medium"  @click="SecondClick(scope.row)">确认收货</el-button>
                         </template>
                  </el-table-column>
         </el-table>
       </el-tab-pane>
     </el-tabs>
    </el-tab-pane>
  </el-tabs>

</template>>
<script>
    import axios from "axios"
var self=this
 export default {    
    data() {
      return {
        sentMessage:[],
        receiveMessageHandled:[],
        FirstMessage:[],
        SecondMessage:[],
        ThirdMessage:[],
        receiveMessageUnHandled:[],
        activeName: '供给订单消息',
        activeName2:'我收到的申请',
        activeName3:'我发出的申请',
        tabPosition:'left',
        tabPosition2:'top'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      ConfirmClick(obj){
        obj.meaasgeState="Y"
        console.log(obj)
        var url = '/g/Message/confirm?MessageId='+obj.messageId
        axios.get(url).then(response=>{
          console.log(response)
        })
      },
      SecondClick(obj){
          obj.meaasgeState="Y"
          console.log(obj.meaasgeState)
          var url = '/g/Message/sendThirdRequest'
          axios.post(url,{
            "Applicant":obj.recipient,
          	"Recipient":obj.applicant,
          	"SupplyId":obj.supplyId,
	          "NeedId":obj.needId,
	          "Time":"2020.05.23",
	          "TargetMessageId":obj.messageId,
	          "Items":obj.items
          }).then(response=>{
              console.log(response)
          })
      },
      FirstClick(obj){
          obj.meaasgeState="Y"
          console.log(obj.meaasgeState)
          var url = '/g/Message/sendSecondRequest'
          axios.post(url,{
            "Applicant":obj.recipient,
          	"Recipient":obj.applicant,
          	"SupplyId":obj.supplyId,
	          "NeedId":obj.needId,
	          "Time":"2020.05.23",
	          "TargetMessageId":obj.messageId,
	          "Items":obj.items
          }).then(response=>{
              console.log(response)
          })
      },
      getdata(){
          var user = ' ';
          user = this.$store.state.user;

          var senturl = '/g/Message/getSentMessage?name='+user;
          axios.get(senturl)
          .then(response=>{
              console.log(response)
              self.sentMessage=response.data
          })
          
          var reciHandledurl = '/g/Message/getReceiveMessageHandled?name='+user;
          axios.get(reciHandledurl)
          .then(response=>{
            console.log("response")
              console.log(response)
                 if(response.data[i].messageType=="First")
                  {self.FirstMessage.push(response.data[i]);}
                  else if(response.data[i].messageType=="Second"){
                    self.SecondMessage.push(response.data[i])
                  }
                  else if(response.data[i].messageType=="Third"){
                    self.ThirdMessage.push(response.data[i])
                  }
          })

         

      },
      getUnHandledMessage(){
        var user = ' ';
          user = this.$store.state.user;
         var unreciHandledurl = '/g/Message/getReceiveMessageUnHandled?name='+user;
          axios.get(unreciHandledurl)
          .then(response=>{
            
              // self.receiveMessageUnHandled=response.data
              // self.receiveMessageUnHandled=JSON.parse(JSON.stringify(response.data));
              
              
              
              console.log("receiveMessageUnHandled response")
              console.log(response)
              for(var i=0;i<response.data.length;i++)
              {
                if(response.data[i].messageType=="First")
                  {self.FirstMessage.push(response.data[i]);}
                  else if(response.data[i].messageType=="Second"){
                    self.SecondMessage.push(response.data[i])
                  }
                  else if(response.data[i].messageType=="Third"){
                    self.ThirdMessage.push(response.data[i])
                  }
              }
          })
          console.log("\n\n\n")
          console.log("self.receiveMessageUnHandled")
          console.log(self.receiveMessageUnHandled)
          console.log("\n\n\n")
                
         console.log(self.receiveMessageUnHandled)
         console.log(self.FirstMessage)
         console.log(self.SecondMessage)
         console.log(self.ThirdMessage)
    
      }
    },
    mounted(){
        self = this ;
        this.getdata();
        this.getUnHandledMessage()
        
    }
  };
</script>>
<style>

</style>>