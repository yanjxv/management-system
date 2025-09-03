// 整个项目统一api管理
import request from './request'

//请求首页左侧的表格数据

export default {
  getTableData() {
    return request({
      url: '/home/getTableData',
      method: 'get',
    })
  },
}
