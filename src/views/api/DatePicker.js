import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import DatePicker from 'rmc-date-picker'
import PopPicker from 'rmc-date-picker/lib/Popup'
import PopStyles from 'rmc-date-picker/lib/PopupStyles'
import zhCn from 'rmc-date-picker/lib/locale/zh_CN'
import moment from 'moment'
import Styles from '../../assets/styles/main'

class DatePickerStyles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      startDateText: ''
    }
  }
  handleChange = date => {
    this.setState({
      startDate: date,
      startDateText: moment(date).format('YYYY-MM-DD HH:mm:ss')
    })
  }
  render() {
    const { handleChange } = this
    const { startDate, startDateText } = this.state

    const datePicker = (
      <DatePicker
        rootNativeProps={{ 'data-xx': 'yy' }}
        mode="datetime"
        locale={zhCn}
        defaultDate={new Date()}
      />
    )

    return (
      <View style={Styles.mainWrapper}>
        <PopPicker
          datePicker={datePicker}
          transitionName="rmc-picker-popup-slide-fade"
          maskTransitionName="rmc-picker-popup-fade"
          title="请选择日期"
          date={startDate}
          styles={PopStyles}
          okText="确定"
          dismissText="取消"
          onChange={handleChange}
        >
          <Text>select date picker: {startDateText}</Text>
        </PopPicker>
      </View>
    )
  }
}

export default DatePickerStyles
