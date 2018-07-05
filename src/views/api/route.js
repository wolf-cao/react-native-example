import API from './index.js'
import Button from './Button'
import Alert from './Alert'
import Loading from './Loading'
import FlatList from './FlatList'
import Modal from './Modal'
import DatePicker from './DatePicker'

export default [
  {
    key: 'api',
    title: 'API使用说明',
    component: API
  },
  {
    key: 'button',
    title: '按钮样式',
    component: Button
  },
  {
    key: 'alert',
    title: '提示对话框',
    component: Alert
  },
  {
    key: 'loading',
    title: '加载控件',
    component: Loading
  },
  {
    key: 'flatList',
    title: '简单列表组件',
    component: FlatList
  },
  {
    key: 'modal',
    title: '弹出框',
    component: Modal
  },
  {
    key: 'datePicker',
    title: '时间控件',
    component: DatePicker
  }
]
