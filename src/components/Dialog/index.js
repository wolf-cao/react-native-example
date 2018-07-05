import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight, Modal } from 'react-native'
import ModalSheets from './styles'

class ModalStyles extends Component {
  pressEvent = () => {
    this.props.onClose()
  }
  render() {
    const { pressEvent } = this
    const { renderContent, visible } = this.props

    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={visible}
        onRequestClose={() => {}}
      >
        <View style={ModalSheets.mask}>
          <View style={ModalSheets.wrapper}>
            <View style={ModalSheets.titleBox}>
              <Text style={ModalSheets.title}>提示信息</Text>
            </View>
            <View style={ModalSheets.content}>{renderContent}</View>
            <View style={ModalSheets.close}>
              <TouchableHighlight onPress={pressEvent}>
                <Text>关闭</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

ModalStyles.propTypes = {
  visible: PropTypes.bool,
  renderContent: PropTypes.element,
  onClose: PropTypes.func
}

ModalStyles.defaultProps = {
  visible: false
}

export default ModalStyles
