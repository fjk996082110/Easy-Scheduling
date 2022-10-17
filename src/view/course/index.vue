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
            placeholder="选择日期"
            size="large"
          />
          <el-button type="primary" class="search-btn" @click="searchByDate">
            搜索 <el-icon><Search /></el-icon>
          </el-button>
          <el-button type="primary" class="search-btn" @click="goBackToday">
            回到今天
          </el-button>
          <span class="now-date">当前日期:{{ nowDateToShow }}</span>
        </div>
        <el-button type="primary" @click="onAddHandle">
          添加 <el-icon> <Plus /></el-icon>
        </el-button>
      </el-col>
    </el-row>
    <div class="lesson-plans-container">
      <lesson-plans
        v-if="showEmpty"
        :listData="personList"
        @onClickHandle="clickShowDetail"
      ></lesson-plans>
      <el-empty v-else description="暂没有数据～" />
    </div>
  </div>
  <course-add-dialog
    v-model:show="showDialog"
    :courseData="dataItem"
    @addCourse="add"
    @updateCourse="update"
  ></course-add-dialog>
</BaseLayout>
</template>
<script lang='ts' setup>
import { ElRow, ElCol, ElButton, ElDatePicker, ElIcon, ElEmpty, ElMessage } from 'element-plus'
import { Plus, Search } from '@element-plus/icons-vue'
import LessonPlans from '../../components/LessonPlans.vue'
import courseAddDialog from '../../components/courseAddDialog.vue'
import { getCourseListByDate, addCourse, updateCourse } from '../../api/course'
import dayjs from 'dayjs'

const chooseDate = ref<any>()
const dataItem = ref<object>({})
const showDialog = ref<Boolean>(false)
const personList = ref<any[]>([])
const currentPage = ref<number>(1)
const nowDateToShow = ref<any>(dayjs().format('YYYY-MM-DD'))

const showEmpty = computed(() => personList.value.length > 0)

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

onMounted(() => {
  const today = dayjs().format('YYYY-MM-DD')
  getCourseList(currentPage.value, today)
})

const onAddHandle = () => {
  dataItem.value = {}
  showDialog.value = true
}
// 详情
const clickShowDetail = (item: any) => {
  showDialog.value = true
  dataItem.value = item
}
// 获取列表
const getCourseList = (current: number, date: string) => {
  getCourseListByDate(current, date).then((res) => {
    personList.value = res.data.records
  })
}
// 新增
const add = (data: object) => {
  addCourse(data).then((res: any) => {
    if (res.msg === '添加成功') {
      showMessage('添加成功', 'success')
      goBackToday()
    } else {
      showMessage('添加失败', 'error')
    }
  }).catch((err) => {
    return showMessage(`添加失败:${err}`, 'error')
  })
}
// 修改
const update = (data: any) => {
  updateCourse(data).then((res: any) => {
    res.msg === '修改成功' ? showMessage('修改成功', 'success') : showMessage('修改失败', 'error')
  }).catch((err) => {
    return showMessage(`添加失败:${err}`, 'error')
  })
}
// 搜索
const searchByDate = () => {
  if (!chooseDate.value) return ElMessage({
    message: '请选择日期',
    type: 'error'
  })
  nowDateToShow.value = chooseDate.value
  getCourseList(currentPage.value, chooseDate.value)
}
// 回到今天
const goBackToday = () => {
  nowDateToShow.value = dayjs().format('YYYY-MM-DD')
  chooseDate.value = ''
  currentPage.value = 1
  getCourseList(currentPage.value, nowDateToShow.value)
}
// 弹窗
const showMessage = (message: string, type: any) => {
  ElMessage({
    message,
    type
  })
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

      .date-picker {
        display: flex;
        align-items: center;
        .search-btn {
          margin-left: 10px;
        }
        .now-date {
          font-size: 18px;
          color: #000;
          margin-left: 15px;
        }
      }
    }
  }
  .lesson-plans-container {
    padding: 20px 10px;
    box-sizing: border-box;
  }
}
</style>