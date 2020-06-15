<template>
  <div>
    <el-card class="box-card">
         <el-table
          :data="tableData"
          style="width: 100%"
        >
          <!-- # -->
          <el-table-column label="#" width="100" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.NAME}}</span>
            </template>
          </el-table-column>
          <!-- 标题 -->
          <el-table-column label="标题" width="250" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.GOODS_SERIAL_NUMBER}}</span>
            </template>
          </el-table-column>
          <!-- 作者 -->
          <el-table-column label="作者" width="250" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.ORI_PRICE }}</span>
            </template>
          </el-table-column>
          <!-- 类目 -->
          <el-table-column label="类目" width="300" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE}}</span>
            </template>
          </el-table-column>
          <!-- 来源 -->
          <el-table-column label="来源" width="300" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE}}</span>
            </template>
          </el-table-column>
          <!-- 重要性 -->
          <el-table-column label="重要性" width="300" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE}}</span>
            </template>
          </el-table-column>
          <!-- 发布时间 -->
          <el-table-column label="类目" width="300" align="center">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE}}</span>
            </template>
          </el-table-column>
          <!-- 操作 -->
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button size="mini" @click="tops(scope.row)" class="lanyanse">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              <el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>