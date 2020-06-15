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
              <el-button size="mini" @click="tops(scope.row)" class="lanyanse">
                <i class="iconfont icon-modify"></i>修改
              </el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
                <i class="el-icon-delete"></i>删除
              </el-button>
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