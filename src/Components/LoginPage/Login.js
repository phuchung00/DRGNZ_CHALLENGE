import React, { Component } from 'react'
import { View, TextInput, Text, Button } from 'react-native'

export default class Login extends Component {

  state = {
    username: '',
  }
  user(){
    const { username } = this.state
    const { userInputAction } = this.props
    userInputAction(username)
  }
  navigate() {
    this.props.navigation.navigate('Content')
  }
  myFunc() {
    this.user()
    this.navigate()
  }
  render() {
    return (
      <View style={{ paddingTop: 30, alignItems: "center" }} >
        <Text style={{ fontSize: 25, fontWeight: "bold", paddingBottom: 15 }} >Login Form</Text>
        <View style={{ marginLeft: 40, marginRight: 30, }} >
          <Text>UserName: </Text>
          <TextInput
            style={{ height: 40, borderColor: '#212F3D', borderWidth: 20, borderRadius: 20, paddingLeft: 10, color: '#FDFEFE' }}
            placeholder='Type username'
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
          />
        </View>
        <View>
          <Button
            title='Login'
            onPress={() => this.myFunc()}
          />
        </View>
      </View>
    )
  }
}

