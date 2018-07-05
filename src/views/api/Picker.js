import React, { Component } from 'react'
import { View, Picker, Text } from 'react-native'
import Button from 'apsl-react-native-button'
import Styles from '../../assets/styles/main'

class PickerStyles extends Component {
  state = {
    language: 'java',
    position: 0
  }
  render() {
    const { language } = this.state
    return (
      <View style={Styles.mainWrapper}>
        <View style={viewStyles.mainContent}>
        <View style={{flexDirection: 'row', alignSelf : 'center'}}>
        <Text style={{fontWeight:'bold',color:'red'}}>{language}</Text>
        </View>
          <Picker
            itemStyle={{ color: 'blue' }}
            prompt="Picker"
            mode="dropdown"
            selectedValue={language}
            onValueChange={(lang, position) =>
              this.setState({ language: lang, position: position })
            }
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Net" value="net" />
            <Picker.Item label="ReactNative" value="rn" />
            <Picker.Item label="c#" value="c" />
            <Picker.Item label="php" value="php" />
          </Picker>
        </View>
      </View>
    )
  }
}

export default PickerStyles

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
