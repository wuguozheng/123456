<template>
 <div>
     <div class="left"><el-button type="primary" @click="clicks">返回</el-button></div>
     <div class="a-i-c f-d-c">
         <h2 class="ttt">{{arr.title}}</h2>
         <div class="f-s20 m-t2">摘要: {{arr.abstract}}</div>
         <div class="iii f-s12">发表于: {{arr.author}}</div>
     </div>
     <el-card class="box-card m-t2">
         <div class="left">{{arr.text}}</div>
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
         id:'',
         arr:[]
     }
   },
   methods: {
    //    查看请求
       getData(){
           axios.post(`/api/article/article`,{
               _id: this.id
           }).then(res =>{
               this.id = res.data;
               this.arr = res.data.data
           }).catch(err =>{
               console.log(err);
           })
       },
    //    返回已发布
       clicks(){
           this.$router.push("/published")
       }
   },
   mounted() {
       this.id = this.$route.query.id;
       this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
    .ttt {
        margin-bottom: 20px;
    }
    .iii{
        color: #ccc;
        margin-top: 30px;
    }
    .left {
        text-align: left;
    }
</style>