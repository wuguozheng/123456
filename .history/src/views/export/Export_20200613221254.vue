<template>
  <div>
    <div>
      <el-card class="box-card m-t2">
        <el-table
          :data="tableData.slice((currentPage - 1 ) * pageSize, currentPage * pageSize)"
          style="width: 100%"
        >
          <!-- 名称 -->
          <el-table-column label="名称" width="450" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.NAME}}</span>
            </template>
          </el-table-column>
          <!-- 商品编号 -->
          <el-table-column label="商品编号" width="250" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.GOODS_SERIAL_NUMBER}}</span>
            </template>
          </el-table-column>
          <!-- 原价 -->
          <el-table-column label="原价" width="250" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.ORI_PRICE }}</span>
            </template>
          </el-table-column>
          <!-- 现价 -->
          <el-table-column label="现价" width="300" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE}}</span>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          align="left"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="694"
        ></el-pagination>
      </el-card>
      <div class="d-f m-t2">
        <el-button type="primary">导出Xls</el-button>
        <el-button type="danger">导出csv</el-button>
      </div>
      <download-excel
        class="export-excel-wrapper"
        :data="tableData.slice((currentPage - 1 ) * pageSize, currentPage * pageSize)"
        :fields="json_fields"
        name="filename.xls"
      >
        <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
        <el-button type="primary" size="small">导出Xls</el-button>
      </download-excel>

      <download-excel
        class="export-excel-wrapper"
        :data="tableData.slice((currentPage - 1 ) * pageSize, currentPage * pageSize)"
        :fields="json_fields"
        name="filename.xls"
        
      >
        <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
        <el-button type="primary" size="small">导出csv</el-button>
      </download-excel>
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
      tableData: [],
      // 默认是第几页
      currentPage: 1,
      // 默认一页多少条
      pageSize: 10
    };
  },
  methods: {
    getData() {
      axios
        .get(`/api/tableData`)
        .then(res => {
          this.tableData = res.data.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.tableData.splice(index, 1);
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.lanyanse {
  background: rgb(64, 158, 255);
  color: white;
}
.el-input {
  width: 280px;
  height: 35px;
  text-align: left;
}
</style>