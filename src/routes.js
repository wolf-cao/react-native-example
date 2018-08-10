import API from './views/api/route'
import LoginRoutes from './views/login/route'
import MainRoutes from './views/main/route'

const Routes = []
  .concat(API)
  .concat(LoginRoutes)
  .concat(MainRoutes)

export default Routes
