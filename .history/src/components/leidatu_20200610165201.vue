<template>
 <div>
   <div class="d-f">
     <!-- 折线图 -->
       <div class="dk-1 m-t2">
            <ve-radar class="tes" :data="chartData" :settings="chartSettings"></ve-radar>
       </div>
       
        <div class="dk-1 m-l1  m-t2">

       </div>
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
          chartData: {
          columns: [],
          rows: []
        }
     }
   },
   methods: {
       getData() {
        axios.get(`/api/radarChat`).then(res =>{
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
    .dk-1 {
        width: 422px;
        height: 350px;
        background: white;
    }
    
</style>