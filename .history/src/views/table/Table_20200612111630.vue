<template>
  <div>
    <el-input v-model="input" placeholder="请输入你想搜索的商品名称"></el-input>
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
          <!-- 操作 -->
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button size="mini" @click="dialogVisible = true" class="lanyanse">
                <i class="iconfont icon-modify"></i>修改
              </el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
                <i class="el-icon-delete"></i>删除
              </el-button>
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

        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="名称">
              <el-input v-model="value"></el-input>
            </el-form-item>
            <el-form-item label="原价">
              <el-input v-model="value"></el-input>
            </el-form-item>
            <el-form-item label="现价">
              <el-input v-model="value"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
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
    return {
      tableData: [],
      // 默认是第几页
      currentPage: 1,
      // 默认一页多少条
      pageSize: 10,
      dialogVisible: false
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
    },
    // dialogVisible(index, row) {
    //   console.log(index, row);
    // },

    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
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