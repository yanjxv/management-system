import Mock from 'mockjs'
import homeApi from './mockData/home'
//1拦截的路径 2方法 3制造出的假数据
Mock.mock(/api\/home\/getTableData/, 'get', homeApi.getTableData)
Mock.mock(/api\/home\/getCountData/, 'get', homeApi.getCountData)
Mock.mock(/api\/home\/getChartData/, 'get', homeApi.getChartData)
