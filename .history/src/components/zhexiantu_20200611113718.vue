<template>
 <div class="kito">
     <el-card class="box-card">
         <ve-line :data="chartData" :colors='chartData.keep'></ve-line>
</el-card>
      
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
          chartData: {
          columns: [],
          rows: [],
          keep:['']
        }
     }
   },
   methods: {
    getData() {
        axios.get(`/api/homeChat`).then(res =>{
          this.chartData.rows = res.data.data
          this.chartData.columns = Object.keys(res.data.data[0])
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
    .kito {
        margin-top: 50px;
    }
</style>