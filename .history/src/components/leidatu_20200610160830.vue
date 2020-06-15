<template>
 <div>
   <div class="d-f">
       <div class="dk-1 m-t2">

       </div>
        <div class="dk-1 m-l2  m-t2">

       </div>
        <div class="dk-1 m-l2  m-t2">

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

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
    .dk-1 {
        width: 412px;
        height: 300px;
        background: white;
    }
</style>