import React, { Component } from 'react'
import { View } from 'react-native'
import MyForms from 'tcomb-form-native'
import Button from 'apsl-react-native-button'
import { Toast } from 'teaset'
import moment from 'moment'
import DataBase from '../../components/Database/index'
import Styles from '../../assets/styles/main'

const Form = MyForms.form.Form
const AddTargetForm = MyForms.struct({
  title: MyForms.String,
  description: MyForms.maybe(MyForms.String),
  finishDate: MyForms.Date,
  finishTime: MyForms.Date
})
const AddTargetOptions = {
  fields: {
    title: {
      label: '',
      placeholder: '小目标叫什么',
      error: '不能为空'
    },
    description: {
      label: '简单描述一下'
    },
    finishDate: {
      label: '目标结束日期',
      mode: 'date',
      config: {
        format: date => {
          return moment(date).format('YYYY-MM-DD')
        },
        defaultValueText: '例: 2018-01-01'
      }
    },
    finishTime: {
      label: '目标结束时间',
      mode: 'time',
      config: {
        format: date => {
          return moment(date).format('HH:mm')
        },
        defaultValueText: '例: 00:00'
      }
    }
  }
}

export default class AddTargetPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {
        title: '',
        description: ''
      }
    }
  }
  handleChange = value => {
    this.setState({ value })
  }
  handleSave = () => {
    DataBase.write(() => {
      const resAdd = DataBase.create('Target', this.state.value)
      Toast.message(JSON.stringify(DataBase.objects('Target')))
    })
  }
  render() {
    return (
      <View style={viewStyles.mainContent}>
        <View style={viewStyles.viewBox}>
          <Form
            ref="form"
            type={AddTargetForm}
            options={AddTargetOptions}
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Button
            style={Styles.blueButton}
            textStyle={Styles.whiteButtonText}
            onPress={this.handleSave}
          >
            保存
          </Button>
        </View>
      </View>
    )
  }
}

const viewStyles = {
  mainContent: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  viewBox: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 20
  }
}
