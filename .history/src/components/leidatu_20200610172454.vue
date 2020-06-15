<template>
 <div>
   <div class="d-f">
     <!-- 折线图 -->
       <div class="dk-1 m-t2">
            <ve-radar  :data="chartData"></ve-radar>
       </div>
       <!-- 饼图 -->
        <div class="dk-1 m-l1  m-t2">
           <ve-ring :data="chartThree"></ve-ring>
       </div>
       <!-- 柱状图 -->
        <div class="dk-1 m-l1  m-t2">
          <ve-histogram :data="chartFour"></ve-histogram>
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
      this.chartSettings = {
        roseType: 'radius'
      }
     return {
      //  折线图
          chartData: {
          columns: [],
          rows: []
        },
        // 饼图
        chartThree: {
          columns: [],
          rows: []
        },
         // 柱状图
        chartFour: {
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
          this.chartThree.rows = res.data.data
          this.chartThree.columns = Object.keys(res.data.data[0])
          console.log(res.data);
          
        }).catch(err =>{
          console.log(err);
        })
      },
      // 柱状图
       getDatao() {
        axios.get(`/api/homeChat`).then(res =>{
          this.chartFour.rows = res.data.data
          this.chartFour.columns = Object.keys(res.data.data[0])
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
        //  柱状图
       this.getDatao()
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
        box-shadow: 1px 1px 10px #ccc;
    }
    
</style>