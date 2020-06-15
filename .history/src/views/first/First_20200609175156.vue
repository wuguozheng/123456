<template>
  <div>
    <el-container>
      <el-header>
          <div>欢迎来到</div>
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
        item:''
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
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
</style>