<template>
 <div>
   <div><homepage></homepage></div>
   <div> <zhexiantu></zhexiantu></div>
   <div><leidatu></leidatu></div>
   <div><todo></todo></div>
 </div>
</template>

<script>
 import zhexiantu from '../components/zhexiantu'
 import Homepage from './homepage/Homepage'
 import leidatu  from '../components/leidatu'
 import todo  from '../components/todo'
 export default {
   name: '',
   props: {
   },
   components: {
     zhexiantu,
     Homepage,
     leidatu,
     todo
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