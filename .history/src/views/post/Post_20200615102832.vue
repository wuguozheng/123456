<template>
  <div>
    <div class="usb">
      <div class="pos">
        <el-button type="danger">查看</el-button>
        <el-button type="primary">发布</el-button>
      </div>
    </div>
    <div class="usb-a">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="文章标题" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="文章摘要" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="d-f">
      <div class="d-f a-i-c">
        <div class="gun">作者</div>
        <el-input v-model="input" class="ipt"></el-input>
      </div>
      <div class="d-f a-i-c">
        <div class="gun">类目</div>
        <el-select v-model="value" placeholder="请选择" class="ipt">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="d-f a-i-c">
        <div class="gun">来源</div>
        <el-select v-model="value" placeholder="请选择" class="ipt">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="d-f a-i-c">
        <div class="gun">重要性</div>
        <el-select v-model="value" placeholder="请选择" class="ipt">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="d-f a-i-c">
        <div class="gun">发布时间</div>
        <div class="ipt"><el-time-select
          v-model="value"
          :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
              }"
          placeholder="选择日期时间"
        ></el-time-select></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        name: "",
        input:'',
        value:''
      },
      rules:{
          name:[
            { required: true, message: '请输入文章', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
      },
      options:[
        {
            value:'选项1',
            label:'Vue'
        },
        {
            value:'选项2',
            label:'React'
        },
        {
            value:'选项3',
            label:'Node.js'
        },
        {
            value:'选项4',
            label:'性能优化'
        },
        {
            value:'选项5',
            label:'javaS'
        },
        {
            value:'选项6',
            label:''
        },
        {
            value:'选项7',
            label:''
        },
        {
            value:'选项8',
            label:''
        },
      ]
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.usb {
  width: 100%;
  background: rgb(89, 165, 134);
}
.pos {
  padding: 16px;
  text-align: right;
  margin-right: 20px;
}
.usb-a {
  margin-top: 50px;
}
.ipt {
  width: 200px;
  height: 40px;
  margin-left: 20px;
}
.gun {
  margin-left: 50px;
}
</style>