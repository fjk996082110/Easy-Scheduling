<script lang='ts'>
export default {
  name: 'LessonPlans'
}
</script>
<template>
  <div class="c-grid-container">
    <el-row :gutter="0">
      <el-col
        v-for="(time, index) in dateArr"
        :key="index"
        :span="1"
      >
        <span class="time-span">
          {{ time }}
        </span>
      </el-col>
    </el-row>
  </div>
</template>
<script lang='ts' setup>
import { ElRow, ElCol } from 'element-plus'
const dateArr = ref<any[]>([
  "8:00",
  "8:30",
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:30",
  "14:40",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
])
const personList = ref<any[]>([
  { name: '张三', date: '', start: '', end: '' }
])
</script>

<style lang="less" scoped>
.c-grid-container {
  .time-span {
    font-size: 18px;
  }
}
</style>