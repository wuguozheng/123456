<template>
 <div>
    <div>期待您的下次光临</div>
    <button @click="miTo">确认退出</button>
 </div>
</template>

<script>
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
     miTo () {
       this.$router.push('')
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