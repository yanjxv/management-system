//整个项目统一api管理
import request from './request'

//请求首页左侧的表格和数据
export default {
  getTableData() {
    return request({
      url: '/home/getTableData',
      method: 'get',
    })
  },
  getCountData() {
    return request({
      url: '/home/getCountData',
      method: 'get',
    })
  },
}
