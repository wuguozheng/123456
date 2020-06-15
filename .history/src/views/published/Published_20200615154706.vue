<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="one">
          <div v-for="(item,index) in arr" :key="index">
              <div class="heig">
                  <div>{{item.name}}</div>
                  <div>{{item.time}}</div>
                  <div> <el-button type="primary" @click="cap(item,index)">标记已读</el-button></div>
              </div>
          </div>
          <div> <el-button type="primary" @click="caps">全部标记为已读</el-button></div>
      </el-tab-pane>
      
      <el-tab-pane label="two">
          <div v-for="(item,index) in arrs" :key="index">
              <div class="heep">
                  <div>{{item.name}}</div>
                  <div>{{item.time}}</div>
                  <div> <el-button  @click="cctv(item,index)">删除</el-button></div>
              </div>
          </div>
          <div> <el-button type="danger" @click="cctvs">全部删除</el-button></div>
      </el-tab-pane>
      
      <el-tab-pane label="three">
          <div v-for="(item,index) in arr" :key="index">
              <div class="heep">
                  <div>{{item.name}}</div>
                  <div>{{item.time}}</div>
                  <div> <el-button  @click="cctv(item,index)">删除</el-button></div>
              </div>
          </div>
          <div> <el-button type="danger" @click="cctvs">全部删除</el-button></div>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
         activeName: 'second',
         arr:[
             {
                name:'【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                time:'2020-6-12  9:03'
             },
             {
                 name:'今晚12点整发大红包,先到先得',
                 time:'2020-6-12  9:03'
             },
         ],
         arrs:[
             {
                 name:'【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                  time:'2020-6-12  9:03'
             }
         ],
          arrss:[
             {
                 name:'【系统通知】您的优惠卷已经过期',
                  time:'2020-6-12  9:03'
             }
         ],
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.heig {
    height: 80px;
    border-bottom: 1px solid #ccc;
}
</style>