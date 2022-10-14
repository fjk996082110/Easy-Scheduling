import request from "../utils/http/request";

export const Login = function (username: any, password: any) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}