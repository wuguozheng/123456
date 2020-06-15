<template>
 <div>
   <div><homepage></homepage></div>
   <div> <zhexiantu></zhexiantu></div>
   <div><leidatu></leidatu></div>
 </div>
</template>

<script>
 import zhexiantu from '../components/zhexiantu'
 import Homepage from './homepage/Homepage'
 import leidatu  from '../components/leidatu'
 export default {
   name: '',
   props: {
   },
   components: {
     zhexiantu,
     Homepage,
     leidatu
   },
   data () {
     return {

     }
   },
   methods: {

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