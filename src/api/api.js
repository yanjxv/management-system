import request from './request'

//请求首页左侧的表格和数据
export default {
  getTableData() {
    return request({
      url: '/api/home/getTableData',
      method: 'get',
    })
  },
}
