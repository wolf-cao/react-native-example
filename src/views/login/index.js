/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Button from 'apsl-react-native-button'
import { storageSave, storageLoad } from '../../common/Storage/index'
import Styles from '../../assets/styles/main'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'a'
    }
  }
  saveData = () => {
    var userA = {
      name: 'A',
      age: 20,
      tags: ['geek', 'nerd', 'otaku']
    }

    storageSave({
      key: 'user',
      data: userA,
      expires: 1000 * 5
    })
  }
  loadData = () => {
    storageLoad({
      key: 'user'
    }).then(res => {
      this.setState({
        userName: res.name
      })
    })
  }
  render() {
    const { navigate } = this.props.navigation
    const { userName } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native - navigator123!==={userName}
        </Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          style={Styles.blueButton}
          textStyle={Styles.whiteButtonText}
          onPress={this.loadData}
        >
          load data
        </Button>
        <Button
          style={Styles.blueButton}
          textStyle={Styles.whiteButtonText}
          onPress={this.saveData}
        >
          save data
        </Button>
        <Button
          style={Styles.blueButton}
          textStyle={Styles.whiteButtonText}
          onPress={() => {
            Actions.register()
          }}
        >
          注册
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
