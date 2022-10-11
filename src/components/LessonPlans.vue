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
    <div class="time-color">
      <el-row class="time-color-row" v-for="(item, index) in personList" :key="index">
        <el-col
          :span="computedDate(item.start, item.end).divLength"
          :offset="computedDate(item.start, item.end).offset"
        >
        <div
          class="time-color-inner"
          :style="{ backgroundColor: item.color }"
        >
          {{ `${item.name} ${item.start}-${item.end}` }}
        </div>
        </el-col>
      </el-row>
    </div>
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
  { name: '张三', date: '2022-10-10', start: '8:00', end: '12:00', color: '#FF6666' },
  { name: '李四', date: '2022-10-10', start: '13:30', end: '16:00', color: '#FF9933' },
])
const computedDate = (startTime: string, endTime: string) => {
  const startTimeInDateArr = dateArr.value.findIndex((time) => time === startTime)
  const endTimeInDateArr = dateArr.value.findIndex((time) => time === endTime)
  const divLength = endTimeInDateArr - startTimeInDateArr
  return {
    divLength,
    offset: startTimeInDateArr
  }
}
</script>

<style lang="less" scoped>
.c-grid-container {
  .time-span {
    font-size: 18px;
  }
  .time-color {
    .time-color-row {
      margin-top: 10px;
      .time-color-inner {
        height: 30px;
        border-radius: 5px;
        line-height: 30px;
        text-align: center;
      }
    }
  }
}
</style>