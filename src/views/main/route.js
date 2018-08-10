// main views
import MainIndex from './index'
import AddTarget from './addTarget'

export default [
  {
    initial: true,
    key: 'main',
    title: '待完成目标',
    component: MainIndex
  },
  {
    key: 'addTarget',
    title: '现在就定个小目标',
    component: AddTarget
  }
]
