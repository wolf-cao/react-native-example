import API from './index.js'
import Button from './Button'
import Alert from './Alert'
import Loading from './Loading'
import FlatList from './FlatList'
import Picker from './Picker'
import CameraRoll from './CameraRoll'
import TabBar from './TabBar'
import Modal from './Modal'

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
    key: 'picker',
    title: '选择器',
    component: Picker
  },
  {
    key: 'cameraRoll',
    title: '相册控制',
    component: CameraRoll
  },
  {
    key: 'tabBar',
    title: '选项卡',
    component: TabBar
  },
  {
    key: 'modal',
    title: '弹出框',
    component: Modal
  }
]
