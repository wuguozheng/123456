<template>
 <div>
   <div class="d-f">
     <!-- 折线图 -->
       <div class="dk-1 m-t2">
            <ve-radar  :data="chartData" :settings="chartSettings"></ve-radar>
       </div>
       <!-- 饼图 -->
        <div class="dk-1 m-l1  m-t2">
          <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
       </div>
       <!-- 柱状图 -->
        <div class="dk-1 m-l1  m-t2">

       </div>
   </div>
 </div>
</template>

<script>
import axios from 'axios'

 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
      //  折线图
          chartData: {
          columns: [],
          rows: []
        },
        // 饼图
        chartData: {
          columns: [],
          rows: []
        },
     }
   },
   methods: {
    //  折线图请求
       getData() {
        axios.get(`/api/radarChat`).then(res =>{
          this.chartData.rows = res.data.data
          this.chartData.columns = Object.keys(res.data.data[0])
          console.log(res.data);
          
        }).catch(err =>{
          console.log(err);
        })
      },
      // 饼图请求
       getDatas() {
        axios.get(`/api/ringChat`).then(res =>{
          this.chartData.rows = res.data.data
          this.chartData.columns = Object.keys(res.data.data[0])
          console.log(res.data);
          
        }).catch(err =>{
          console.log(err);
        })
      }
   },
   mounted() {
    //  折线图
       this.getData()
      //  饼图
       this.getDatas()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
    .dk-1 {
        width: 422px;
        height: 350px;
        background: white;
    }
    
</style>