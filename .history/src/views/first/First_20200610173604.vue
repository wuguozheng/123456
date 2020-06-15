<template>
  <div>
    <el-container>
      <el-header  class="toni d-f j-c-s-b">
          <span>欢迎{{obj.username}}来到xiaoai后台管理系统</span>
          <span>{{hello}}{{obj.username}}上次登录时间:{{time}}</span>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
               <div v-for="(item,index) in list" :key="index" >
                   <el-menu-item :index='item.index' @click="getto(item)">
                    <i :class="item.log"></i>
                    {{item.name}}

                    </el-menu-item>
                </div>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        list:[
            {name:'首页',log:'el-icon-location',index:'1', out:'/'},
            {name:'已发布',log:'el-icon-menu',index:'2'},
            {name:'统计',log:'el-icon-menu',index:'3'},
            {name:'发表文章',log:'el-icon-check',index:'4'},
            {name:'标签页',log:'el-icon-setting',index:'5'},
            {name:'导出excel',log:'el-icon-setting',index:'6'},
            {name:'图片上传',log:'el-icon-setting',index:'7'},
            {name:'退出系统',log:'el-icon-delete-solid',index:'8', out:'/signout'},
        ],
        obj:{},
        time:'',
        hello:{}

    };
  },
  methods: {
    getto(item) {
      this.$router.push(item.out)
    }
  },
  mounted() {
        this.obj=JSON.parse(localStorage.getItem('user'))
        this.time=dayjs().format('YYYY年MM月DD日HH时mm分ss秒')
        let hello=dayjs().format('HH')
        if(hello>5 && hello<=11) {
            this.hello='早上好,妹妹'
        } else if(hello>11 && hello<=13){
            this.hello='中午好,妹妹'
        } else if(hello>13 && hello<=17){
            this.hello='下午好,妹妹'
        } else if(hello>17 && hello<=23){
            this.hello='晚上好,妹妹'
        } else{
            this.hello='该睡觉了,妹妹'
        }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px; 
  position: fixed ;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-col-12 {
  width: 100%;
  text-align: left;
}
.toni {
    color: white;
}
.el-menu {
  height: 1100px;
  background: rgb(84,92,100);
}
</style>