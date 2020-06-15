<template>
  <div>
    <!-- 第一个订单 -->
    <div class="d-f">
      <div class="top-1">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="num" label="Order-No" width="300"></el-table-column>
          <el-table-column prop="price" label="Price" width="250"></el-table-column>
          <el-table-column prop="status" label="Status">

            <template slot-scope="scope">
              <div v-if="scope.row.status===0">
                <el-tag type="danger">pending</el-tag>
              </div>
              <div v-if="scope.row.status===1">
                <el-tag type="success">success</el-tag>
              </div>
            </template>

          </el-table-column>
        </el-table>
      </div>
      <!-- 第二个 -->
      <div class="top-2">
        <div class="jjk">
          <i class="  el-icon-arrow-down"></i>
        </div>
      </div>
      <!-- 第三个进度条 -->
      <div class="top-2">
        <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt="" class="m-t2">
        <div v-for="(item,index) in code" :key="index">
          <div class="hei">{{item.name}}</div>
          <div v-if="item.progress!==1" class="hai">
          <el-progress :percentage="item.progress*100"></el-progress>
          </div>
          <div v-if="item.progress===1" class="hai">
          <el-progress :percentage="100" status="success"></el-progress>
          </div>
        </div>
      </div>
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
    return {
      // 第一个订单的定义
      tableData: [],
      // 第三个进度条的定义
      code:[]
    };
  },
  methods: {
    // 订单请求
    getData() {
      axios
        .get(`/api/orderData`)
        .then(res => {
          this.tableData = res.data.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 进度条请求
     getDatas() {
      axios
        .get(`/api/progress`)
        .then(res => {
          this. code= res.data.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
     // 第一个订单请求
    this.getData();
    // 第三个进度条请求
    this.getDatas()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top-1 {
  width: 750px;
  height: 500px;
  background: white;
  margin-top: 20px;
  box-shadow: 1px 1px 10px #ccc;
}
.top-2 {
  width: 435px;
  height: 500px;
  background: white;
  margin-top: 20px;
  margin-left: 20px;
  box-shadow: 1px 1px 10px #ccc;
}
.hai {
  text-align: left;
   margin-left: 20px;
   margin-top: 10px;
}
.hei {
   text-align: left;
   margin-top: 20px;
   margin-left: 20px;
}
.jjk {
  width: 435px;
  height: 70px;
  background: lightcoral;
}
</style>