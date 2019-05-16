import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { View } from 'react-native'

export default class DRGNZ extends Component {
  render() {
    return (
      <View>
        <View>
          <Header user={this.props.user} />
        </View>
        <View style={{ paddingTop: 40, paddingLeft: 30 }}  >
          <Content />
        </View>
        <View>
          <Footer />
        </View>
      </View>
    )
  }
}