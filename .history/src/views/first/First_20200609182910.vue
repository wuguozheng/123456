<template>
  <div>
    <el-container>
      <el-header  class="toni d-f j-c-s-b">
          <span>欢迎{{obj.username}}来到xiaoai后台管理系统</span>
          <span>{{obj.username}}上次登录时间:{{time}}</span>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
               <div v-for="(item,index) in list" :key="index">
                   <el-menu-item :index='item.index'>
                    <i :class="item.log"></i>
                    {{item.name}}
                    </el-menu-item>
                </div>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>Main</el-main>
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
            {name:'首页',log:'el-icon-location',index:'1'},
            {name:'已发布',log:'el-icon-menu',index:'2'},
            {name:'统计',log:'el-icon-menu',index:'3'},
            {name:'发表文章',log:'el-icon-check',index:'4'},
            {name:'标签页',log:'el-icon-setting',index:'5'},
            {name:'导出excel',log:'el-icon-setting',index:'6'},
            {name:'图片上传',log:'el-icon-setting',index:'7'},
            {name:'退出',log:'el-icon-delete-solid',index:'8'},
        ],
        obj:{},
        item:'',
        two:{}

    };
  },
  methods: {},
  mounted() {
        this.obj=JSON.parse(localStorage.getItem('user'))
        this.time=dayjs(this.obj.date).format('YYYY年MM月DD日HH时mm分ss秒')
        this.two=dayjs(this.obj.date).format('HH')
        if(two>5 && two<=12) {
            this.two='早上好,兄弟'
        } else if(two>12 && two<=16){
            this.two='中午好,兄弟'
        } else if(two>16 && two<=20){
            this.two='下午好,兄弟'
        } else if(two>20 && two<=24){
            this.two='晚午好,兄弟'
        } else(two>24 && two<=28){
            this.two='该睡觉了,兄弟'
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
</style>