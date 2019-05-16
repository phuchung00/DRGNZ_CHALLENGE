import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'

class content extends Component {
  render() {
    return (
      <View style = {{ marginBottom: 20 }} >
        <View style={{ flexDirection: 'row' }} >
          <Image
            source={require('../../../../public/images/card-blade.jpg')}
            style={{ width: 100, height: 150, borderRadius: 10 }}
          />
          <Image
            source={require('../../../../public/images/card-frozen.jpg')}
            style={{ width: 100, height: 150, borderRadius: 10, marginLeft: 25 }}
          />
          <Image
            source={require('../../../../public/images/card-bloodmoon.jpg')}
            style={{ width: 100, height: 150, borderRadius: 10, marginLeft: 25 }}
          />
        </View>
        <View style={{ marginTop:10 , flexDirection: 'row' }} >
          <Image
            source={require('../../../../public/images/card-gate.jpg')}
            style={{ width: 100, height: 150, borderRadius: 10 }}
          />
          <Image
            source={require('../../../../public/images/card-highland.jpg')}
            style={{ width: 100, height: 150, borderRadius: 10, marginLeft: 25 }}
          />
          <Image
            source={require('../../../../public/images/card-vermillion.jpg')}
            style={{ width: 100, height: 150, borderRadius: 10, marginLeft: 25 }}
          />
        </View>
      </View>
    )
  }
}
export default content
{/* <Text style={{ fontSize: 25 }} >❯</Text> */}
{/* <Text style={{ fontSize: 25, marginRight: 5 }} >❮</Text> */}