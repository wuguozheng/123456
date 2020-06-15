<template>
 <div>
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
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            
          ]
        }
     }
   },
   methods: {
    getData() {
        axios.get(`/api/homeChat`).then(res =>{
          
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

</style>