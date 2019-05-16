import DRGNZPage from '../../Container/Contain'
import LoginPage from '../../Container/Login'
import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const rootStack = createStackNavigator({
  Login: {
    screen: LoginPage
  },
  Content: {
    screen: DRGNZPage,
  },
})
const AppContainer = createAppContainer(rootStack)

export default class HomeScreen extends Component {
  render() {
    return <AppContainer />
  }
}
