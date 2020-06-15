<template>
 <div>

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

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>