<template>
  <div>
    <el-card class="box-card uplo">
        <div class="dev">支持拖拽</div>
      <el-upload
        class="upload-demo dev-1"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <div class="dev-a">支持裁剪</div>
      <div class="dev-b"><el-button type="primary">上传图片</el-button>
      <my-upload  
 5     @crop-success="cropSuccess" 
 6     @crop-upload-success="cropUploadSuccess"
 7     @crop-upload-fail="cropUploadFail"
 8     v-model="show" 
 9     :width="200" 
10     :height="200" 
11     img-format="png" 
12     :size="size"
13     langType='zh'
14     :noRotate='false'
15     field="Avatar1"
16     url="https://httpbin.org/post"></my-upload>
17     <img :src="imgDataUrl">
      </div>
    </el-card>
  </div>
</template>

<script>
 import myUpload from 'vue-image-crop-upload';
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
       imgDataUrl: "",
        show: false,
        size:2.1
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.uplo {
    width: 100%;
    height: 800px;
}
.dev {
    text-align: left;
    font-size: 30px;
    margin-top: 10px;
}
.dev-1 {
    text-align: left;
    margin-top: 50px;
}
.dev-a {
    text-align: left;
    font-size: 30px;
    margin-top: 50px;
}
.dev-b {
    text-align: left;
    font-size: 30px;
    margin-top: 50px;
}
</style>