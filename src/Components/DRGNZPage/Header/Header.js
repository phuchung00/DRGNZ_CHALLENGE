import React, { Component } from 'react'
import { View, Text } from 'react-native'
export default class Header extends Component {
  render() {
    return (
      <View>
        <View style={{ paddingLeft: 20, paddingTop: 30, flexDirection: 'row'}} >
          <Text style={{ fontSize: 20,fontWeight: 'bold' }} >DRGNZ CHALLENGE</Text>
          <Text style={{ fontSize: 12, paddingLeft: 40, paddingTop: 10 }} >Hi there, { this.props.user } </Text>
        </View>
          <View style={{ width: 1000, height: 4, backgroundColor: '#7DCEA0' }} ></View>
      </View>
    )
  }
}
