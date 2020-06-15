<template>
  <div>
    <div class="map">
      <img
        src="./2ljdp42vefm.gif"
        alt
        style="position:absolute;z-index:-1;width:100%;height:100%;top:0px;left:0px;"
      />

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

           <div class="mv d-f">
              <el-form-item label="验证码" prop="code">
              <el-input v-model="ruleForm.code" class="item-a"></el-input>
            </el-form-item>
            <div v-html="code" @click="getCode"></div>
           </div>

            <el-form-item>
              <el-button type="primary" @click="login">立即登录</el-button>
              <el-button>注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    //    let validatePass = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("请再次输入密码"));
    //   } else if (value !== this.ruleForm.password) {
    //     callback(new Error("两次输入密码不一致!"));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      ruleForm: {
        username: "",
        password: "",
        code:""
      },
      rules: {
        username: [
          {
            required: true, 
            message: "用户名不能为空", 
            trigger: "blur"
          },
          {
            min: 2,
            max: 10,
            message: "用户名在2-10位之间",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "密码在6-15位之间",
            trigger: "blur"
          }
        ],
        code:[
           {
            required: true, 
            message: "验证码不能为空", 
            trigger: "blur"
          },
          {
            min: 0,
            max: 4,
            message: "验证码在0-4位之间",
            trigger: "blur"
          }
        ]
      },
    };
  },
  methods: {
    getCode () {
      axios.get(`/api/captcha`).then(res =>{
        this.code = res.data
        console.log(res.data);
      }).catch(err =>{
        console.log(err);
      })
    },

    login() {
      axios
        .post(`/api/user/login`, {
          username: this.ruleForm.username,
          password: this.ruleForm.password,
          code:this.ruleForm.code
        })
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success("登录成功");
            this.$router.push("/");
          } else {
            this.$message.error(res.data.message)
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // resetForms() {
    //   this.$router.push("/Topone");
    // },
    
    //    login() {
    //   this.$refs.ruleForm.validate(valid => {
    //     if (valid) {
    //       this.$message.success("注册成功"),
    //        this.$router.push("/");
    //     } else {
    //       this.$message.error("注册失败,请检查");
    //       return false;
    //     }
    //   });
    // },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // }
  },
  mounted() {
    this.getCode()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.item {
  width: 550px;
  height: 350px;
  position: absolute;
  left: 500px;
  top: 200px;
  background: rgba(255, 255, 255, 0.1);
}
.help {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-a {
  width: 150px;
  height: 40px;
}
</style>