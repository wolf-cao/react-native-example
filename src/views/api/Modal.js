import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Dialog from '../../components/Dialog/index'
import Styles from '../../assets/styles/main'

class ModalStyles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }
  pressEvent = () => {
    this.setState({
      modalVisible: true
    })
  }
  closeEvent = () => {
    this.setState({
      modalVisible: false
    })
  }
  render() {
    const { pressEvent, closeEvent } = this
    const { modalVisible } = this.state

    const DialogContent = (
      <View>
        <Text>
          11.Modal组件可以用来覆盖包含React
          Native根视图的原生视图（如UIViewController，Activity）。
        </Text>
        <Text>
          22.在嵌入React
          Native的混合应用中可以使用Modal。Modal可以使你应用中RN编写的那部分内容覆盖在原生视图上显示。
        </Text>
      </View>
    )

    return (
      <View style={Styles.mainWrapper}>
        <Dialog
          renderContent={DialogContent}
          visible={modalVisible}
          onClose={closeEvent}
        />
        <Text onPress={pressEvent}>show Modal</Text>
      </View>
    )
  }
}

export default ModalStyles
