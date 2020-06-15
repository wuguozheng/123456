<template>
 <div>
     <div class="map">
        <img src="./2ljdp42vefm.gif" alt=""  style="position:absolute;z-index:-1;width:100%;height:100%;top:0px;left:0px;">

        <el-card class="item">
        <div slot="header" class="clearfix">
          <span class="help">欢迎来到xiaoai</span>
        </div>
        <div>
             <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" show-password></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="register(ruleForm)">注册</el-button>
              <el-button @click="login">登录</el-button>

            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
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
  .item {
  width: 550px;
  height: 350px;
  position: absolute;
  left: 500px;
  top: 200px;
  background: rgba(255,255,255,0.1);
}
.help {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>