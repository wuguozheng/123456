<template>
 <div>
    <div class="d-f">
      <div class="nb m-l2 d-f">
         <i class="rw  iconfont icon-icon-p_lianxirenguanli"></i>
          <div class="http">New Visits</div>
           <countTo :startVal ='startVal' :endVal ='obj.visits' :duration ='3000'> </countTo>
      </div>
      <div class="nb  m-l2 d-f">
         <i class="rw-a  iconfont icon-xiaoxi"></i>
         <div class="http">Messages</div>
          <countTo :startVal ='startVal' :endVal ='obj.messages' :duration ='3000'> </countTo>
      </div>
      <div class="nb  m-l2 d-f">
         <i class="rw-b  iconfont icon-qian"></i>
         <div class="http">Purchases</div>
          <countTo :startVal ='startVal' :endVal ='obj.purchases' :duration ='3000'> </countTo>
      </div>
      <div class="nb  m-l2">
          <i class="rw-c  iconfont icon-icon-"></i>
         <div class="http">Shoppings</div>
          <countTo :startVal ='startVal' :endVal ='obj.messages' :duration ='3000'> </countTo>
      </div>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
import countTo from 'vue-count-to'
 export default {
   name: '',
   props: {
   },
   components: {
     countTo
   },
   data () {
     return {
       obj:{},
       startVal:0
     }
   },
   methods: {
      getData() {
        axios.get(`/api/homeData`).then(res =>{
          this.obj=res.data.data
          console.log(res.data);
        }).catch(err =>{
          console.log(err);
        })
      }
   },
   mounted() {
     this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
  .nb {
    width: 310px;
    height: 100px;
    background: white;
    position: relative;
  }
  .rw {
    font-size: 50px;
    color: rgb(68,200,197);
    position: absolute;
    left: 20px;
    top: -30px;
  }
  .rw-a {
     font-size: 50px;
     color: rgb(63,164,244);
     position: absolute;
    left: 20px;
    top: -30px;
  }
  .rw-b {
     font-size: 50px;
     color: rgb(244,108,131);
     position: absolute;
    left: 20px;
    top: -30px;
  }
  .rw-c {
     font-size: 50px;
     color: rgb(254,186,133);
     position: absolute;
    left: 20px;
    top: -30px;
  }
  .http {
    color: #999;
    position: absolute;
    right: 20px;
    top: -50px;
  }
  
</style>