<script lang='ts'>
export default {
  name: 'CourseAddDialog'
}
</script>
<template>
  <el-dialog v-model="showAddDialog" title="新增课时">
    <el-form :model="courseForm" ref="ruleFormRef" :rules="rules">
      <el-form-item label="姓名" label-width="100px" prop="stuName">
        <el-col :span="11">
          <el-input
            v-model="courseForm.stuName"
            placeholder="请输入"
            clearable
            autocomplete="off"
            size="default"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="上课日期" label-width="100px">
        <el-col :span="14">
          <el-form-item prop="cDate">
            <el-date-picker
              v-model="courseForm.courseDate"
              type="date"
              value-format="YYYY-MM-DD"
              placeholder="选择日期"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="上课时间" label-width="100px">
        <el-col style="display: flex;">
          <el-form-item prop="cStartTime">
            <el-time-select
              v-model="courseForm.courseTimeStart"
              start="08:00"
              step="00:30"
              end="21:00"
              placeholder="选择开始时间"
              :max-time="courseForm.courseTimeEnd"
            ></el-time-select>
          </el-form-item>
          <span class="time-interval">
            —
          </span>
          <el-form-item prop="cEndTime">
            <el-time-select
              v-model="courseForm.courseTimeEnd"
              start="08:00"
              step="00:30"
              end="21:00"
              placeholder="选择开始时间"
              :min-time="courseForm.courseTimeStart"
            ></el-time-select>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="标识颜色" label-width="100px">
        <el-color-picker v-model="courseForm.color" show-alpha />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="onCancelHandle">取消</el-button>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          {{ showTip }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang='ts' setup>
import {
  ElDialog,
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElCol,
  ElDatePicker,
  ElTimeSelect,
  ElColorPicker,
} from 'element-plus'
import type { FormInstance } from 'element-plus'

// 表单规则
const checkNameIsEmpty = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('不能为空!'))
  }
  callback()
}
const checkDateIsEmpty = (rule: any, value: any, callback: any) => {
  if (!courseForm.value.courseDate) {
    return callback(new Error('日期不能为空!'))
  }
  callback()
}
const checkStartTime = (rule: any, value: any, callback: any) => {
  if (!courseForm.value.courseTimeStart) {
    return callback(new Error('开始时间不能为空!'))
  }
  callback()
}
const checkEndTime = (rule: any, value: any, callback: any) => {
  if (!courseForm.value.courseTimeEnd) {
    return callback(new Error('结束时间不能为空!'))
  }
  callback()
}

const emit = defineEmits(['update:show'])

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  courseData: {
    type: Object,
    default: () => {}
  },
})

const stuColor = ref<String>('')
const ruleFormRef = ref<FormInstance>()
const showAddDialog = ref<Boolean>(false)

interface CourseForm {
  id?: string,
  stuName: string,
  courseDate: string,
  courseTimeStart: string,
  courseTimeEnd: string,
  color?: any
}

const courseForm = ref<CourseForm>({
  stuName: '',
  courseDate: '',
  courseTimeStart: '',
  courseTimeEnd: '',
  color: stuColor
})
const rules = reactive({
  stuName: [{ validator: checkNameIsEmpty, trigger: 'blur' }],
  cDate: [{ validator: checkDateIsEmpty, trigger: 'change' }],
  cStartTime: [{ validator: checkStartTime, trigger: 'change' }],
  cEndTime: [{ validator: checkEndTime, trigger: 'change' }]
})

const showTip = computed(() => props.courseData ? '修改' : '新增')

watch(showAddDialog, (value) => {
  emit('update:show', value)
})
watch(
  () => props.show,
  (newVal) => {
    if (newVal !== undefined) showAddDialog.value = newVal
  },
  {
    immediate: true
  }
)
watch(
  () => props.courseData,
  (newVal: any) => {
    courseForm.value = newVal
  },
  {
    immediate: true,
    deep: true
  }
)

const onCancelHandle = () => {
  showAddDialog.value = false
}

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  showAddDialog.value = false
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

</script>

<style lang="less" scoped>
.time-interval {
  margin: 0 10px;
}
</style>