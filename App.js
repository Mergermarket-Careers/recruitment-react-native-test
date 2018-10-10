import React from 'react'
import Home from './views/Home'
import IntelViewer from './views/IntelViewer'
import { createStackNavigator } from 'react-navigation'

const AppRoutes = createStackNavigator(
  {
    Home,
    IntelViewer
  },
  {
    initialRouteName: 'Home'
  }
)

const App = () => <AppRoutes />

export default App
