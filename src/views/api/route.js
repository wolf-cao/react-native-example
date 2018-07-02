import API from './index.js'
import Button from './Button'
import Alert from './Alert'

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
  }
]
