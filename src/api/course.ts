import request from "../utils/http/request";

// 列表获取
export function getCourseListByDate(current: number, courseDate: string) {
  return request({
    url: '/getCourseList',
    method: 'get',
    params: {
      current,
      size: 20,
      courseDate
    }
  })
}
// 新增
export function addCourse(data: object) {
  return request({
    url: '/addCourse',
    method: 'post',
    data
  })
}
// 修改
export function updateCourse(data: any) {
  return request({
    url: '/updateCourse',
    method: 'post',
    data
  })
}