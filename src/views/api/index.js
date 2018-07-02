import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

class APIView extends Component {
  render() {
    return (
      <View style={ViewStyles.mainContent}>
        <Text
          style={ViewStyles.viewItem}
          onPress={() => {
            Actions.button()
          }}
        >
          Button(按钮)
        </Text>
        <Text
          style={ViewStyles.viewItem}
          onPress={() => {
            Actions.alert()
          }}
        >
          Alert(提示对话框)
        </Text>
      </View>
    )
  }
}

export default APIView

const ViewStyles = {
  mainContent: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20,
    flexDirection: 'row'
  },
  viewItem: {
    flex: 1
  }
}
