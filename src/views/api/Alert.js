import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import Button from 'apsl-react-native-button'
import Styles from '../../assets/styles/main'

class AlertStyles extends Component {
  alertAction = () => {
    Alert.alert(
      '提示',
      '此操作将永久删除该文件, 是否继续?',
      [
        {
          text: '取消',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: '确定', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    )
  }
  render() {
    const { alertAction } = this

    return (
      <View style={viewStyles.mainContent}>
        <View style={viewStyles.viewBox}>
          <Button
            style={Styles.blueButton}
            textStyle={Styles.whiteButtonText}
            onPress={alertAction}
          >
            提示对话框
          </Button>
        </View>
      </View>
    )
  }
}

export default AlertStyles

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
