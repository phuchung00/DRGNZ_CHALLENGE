import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View style = {{ flexDirection:"row", alignItems:"center",justifyContent: "center" }} >
        <Text>From</Text>
        <Text style = {{ fontWeight:"bold", marginLeft: 3, marginRight:3 }} >Drgnz</Text>
        <Text>with</Text>
        <Image 
          source= {require('../../../../public/images/heart.png')}
          style = {{ width: 25, height:25, marginLeft:3 }}
        /> 
      </View>
    )
  }
}
