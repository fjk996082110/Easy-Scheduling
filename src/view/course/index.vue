<script lang='ts'>
export default {
  name: 'Course'
}
</script>
<template>
  <div class="course-container">
    <el-row>
      <el-col :span="24">
        <div class="date-picker">
          <el-date-picker
            v-model="chooseDate"
            type="date"
            value-format="YYYY-MM-DD"
            placeholder="Pick a day"
            size="large"
          />
        </div>
        <el-button type="primary" @click="onAddHandle">Primary</el-button>
      </el-col>
    </el-row>
    <div class="lesson-plans-container">
      <lesson-plans></lesson-plans>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ElRow, ElCol, ElButton, ElDatePicker } from 'element-plus'
import LessonPlans from '../../components/LessonPlans.vue';
const chooseDate = ref<any>()

const onAddHandle = () => {
  console.log('add');
}
</script>

<style lang="less" scoped>
.course-container {
  height: 100%;
  .el-row {
    height: 50px;
    .el-col {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .lesson-plans-container {
    padding: 20px 10px;
    box-sizing: border-box;
  }
}
</style>