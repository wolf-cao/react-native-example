import React, { Component } from 'react'
import { Actions, Scene, Router } from 'react-native-router-flux'
import Routes from './src/routes'

const defaultEvent = () => {}

// collect route config
const sceneRoutes = Routes.map(route => {
  const rightEvent = route.onRight || defaultEvent
  return <Scene onRight={rightEvent} {...route} />
})

// init routes
const scenes = Actions.create(<Scene key="root">{sceneRoutes}</Scene>)

class App extends Component {
  render() {
    return <Router scenes={scenes} />
  }
}

export default App
