import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Button from 'apsl-react-native-button'
import Styles from '../../assets/styles/main'
import Picker from 'rmc-picker'
import PopUp from 'rmc-picker/lib/Popup'
import MultiPicker from 'rmc-picker/lib/MultiPicker'
import PopStyles from 'rmc-picker/lib/PopupStyles'

class PickerStyles extends Component {
  state = {
    value: ['2', '12']
  }

  onChange = value => {
    this.setState({
      value
    })
  }

  render() {
    const { value } = this.state
    const popupContent = (
      <MultiPicker
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        selectedValue={value}
        onValueChange={lang => this.setState({ value: lang })}
      >
        <Picker style={{ flex: 1 }}>
          <Picker.Item value="1">one</Picker.Item>
          <Picker.Item value="2">two</Picker.Item>
          <Picker.Item value="3">three</Picker.Item>
          <Picker.Item value="4">four</Picker.Item>
          <Picker.Item value="5">five</Picker.Item>
          <Picker.Item value="6">six</Picker.Item>
          <Picker.Item value="7">seven</Picker.Item>
          <Picker.Item value="8">eight</Picker.Item>
        </Picker>
        <Picker style={{ flex: 1 }}>
          <Picker.Item value="11">eleven</Picker.Item>
          <Picker.Item value="12">twelve</Picker.Item>
          <Picker.Item value="13">thirteen</Picker.Item>
          <Picker.Item value="14">fourteen</Picker.Item>
          <Picker.Item value="15">fifteen</Picker.Item>
          <Picker.Item value="16">sixteen</Picker.Item>
          <Picker.Item value="17">seventeen</Picker.Item>
          <Picker.Item value="18">eighteen</Picker.Item>
        </Picker>
      </MultiPicker>
    )

    return (
      <View style={Styles.mainWrapper}>
        <PopUp
          content={popupContent}
          transitionName="rmc-picker-popup-slide-fade"
          maskTransitionName="rmc-picker-popup-fade"
          title="请选择"
          styles={PopStyles}
          okText="确定"
          dismissText="取消"
        >
          <Text>select picker: {value}</Text>
        </PopUp>
      </View>
    )
  }
}

export default PickerStyles
