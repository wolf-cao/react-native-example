import { Actions } from 'react-native-router-flux'

// main views
import Login from './index'
import Register from './register'

// login right button
const loginRightButtonEvent = () => {
  Actions.api()
}

export default [
  {
    key: 'login',
    title: 'Login',
    rightTitle: 'API',
    onRight: loginRightButtonEvent,
    component: Login
  },
  {
    key: 'register',
    title: 'Register',
    component: Register
  }
]
