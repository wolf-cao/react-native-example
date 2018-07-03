import React, { Component } from 'react'
import { View } from 'react-native'
import Button from 'apsl-react-native-button'
import Styles from '../../assets/styles/main'

class ButtonStyles extends Component {
  render() {
    return (
      <View style={Styles.mainWrapper}>
        <View style={viewStyles.mainContent}>
          <View style={viewStyles.viewBox}>
            <Button style={Styles.defaultButton}>默认按钮</Button>
          </View>
          <View style={viewStyles.viewBox}>
            <Button
              style={Styles.blueButton}
              textStyle={Styles.whiteButtonText}
            >
              主要按钮
            </Button>
          </View>
          <View style={viewStyles.viewBox}>
            <Button
              style={Styles.successButton}
              textStyle={Styles.whiteButtonText}
            >
              成功按钮
            </Button>
          </View>
          <View style={viewStyles.viewBox}>
            <Button
              style={Styles.dangerButton}
              textStyle={Styles.whiteButtonText}
            >
              危险按钮
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

export default ButtonStyles

const viewStyles = {
  mainContent: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10
  },
  viewBox: {
    marginBottom: 5,
    marginTop: 5
  }
}
