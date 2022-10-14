<script lang='ts'>
export default {
  name: 'Course'
}
</script>
<template>
<BaseLayout>
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
          <el-button type="primary" class="search-btn">
            搜索 <el-icon><Search /></el-icon>
          </el-button>
        </div>
        <el-button type="primary" @click="onAddHandle">
          添加 <el-icon> <Plus /></el-icon>
        </el-button>
      </el-col>
    </el-row>
    <div class="lesson-plans-container">
      <lesson-plans :listData="personList" @onClickHandle="clickShowDetail"></lesson-plans>
    </div>
  </div>
  <course-add-dialog v-model:show="showDialog" :courseData="dataItem"></course-add-dialog>
</BaseLayout>
</template>
<script lang='ts' setup>
import { ElRow, ElCol, ElButton, ElDatePicker, ElIcon } from 'element-plus'
import { Plus, Search } from '@element-plus/icons-vue'
import LessonPlans from '../../components/LessonPlans.vue'
import courseAddDialog from '../../components/courseAddDialog.vue'

const chooseDate = ref<any>()
const dataItem = ref<Object>({})
const showDialog = ref<Boolean>(false)

const personList = ref<any[]>([
  { stuName: '张三', courseDate: '2022-10-10', courseTimeStart: '8:00', courseTimeEnd: '12:00', color: '#FF6666' },
  { stuName: '李四', courseDate: '2022-10-10', courseTimeStart: '13:30', courseTimeEnd: '16:00', color: '#FF9933' },
])

watch(
  showDialog,
  (newVal) => {
    if (!newVal) {
      dataItem.value = {}
    }
  },
  {
    immediate: true
  }
)

const onAddHandle = () => {
  dataItem.value = {}
  showDialog.value = true
}

const clickShowDetail = (item: any) => {
  showDialog.value = true
  dataItem.value = item
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

      .search-btn {
        margin-left: 10px;
      }
    }
  }
  .lesson-plans-container {
    padding: 20px 10px;
    box-sizing: border-box;
  }
}
</style>