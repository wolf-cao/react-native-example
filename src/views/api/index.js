import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Styles from '../../assets/styles/main'

class APIView extends Component {
  render() {
    return (
      <View style={Styles.mainWrapper}>
        <View style={ViewStyles.mainContent}>
          <View style={ViewStyles.viewBox}>
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
          <View style={ViewStyles.viewBox}>
            <Text
              style={ViewStyles.viewItem}
              onPress={() => {
                Actions.loading()
              }}
            >
              Loading(加载器)
            </Text>
            <Text
              style={ViewStyles.viewItem}
              onPress={() => {
                Actions.flatList()
              }}
            >
              FlatList(简单列表组件)
            </Text>
          </View>
        </View>
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
    marginRight: 20
  },
  viewBox: {
    flexDirection: 'row',
    marginBottom: 20
  },
  viewItem: {
    flex: 1
  }
}
