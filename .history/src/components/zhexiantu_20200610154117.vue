<template>
 <div class="kito">
      <ve-line :data="chartData" :settings="chartSettings"></ve-line>
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