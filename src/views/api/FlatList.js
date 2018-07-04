import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import ListView from '../../components/ListView/index'
import Styles from '../../assets/styles/main'

const exampleData = [
  {
    fundName: '标题文字',
    securityName: '副标题描述333',
    fundImage: 'https://avatars0.githubusercontent.com/u/38270394?s=40&v=4',
    message: '说明文字说明文字'
  },
  {
    fundName: '标题文字',
    securityName: '副标题描述1',
    fundImage: 'https://avatars0.githubusercontent.com/u/38270394?s=40&v=4',
    message: '说明文字说明文字'
  },
  {
    fundName: '标题文字',
    securityName: '副标题描述2',
    fundImage: 'https://avatars0.githubusercontent.com/u/38270394?s=40&v=4',
    message: '说明文字说明文字'
  },
  {
    fundName: '标题文字',
    securityName: '副标题描述3',
    fundImage: 'https://avatars0.githubusercontent.com/u/38270394?s=40&v=4',
    message: '说明文字说明文字'
  }
]

class FlatListStyles extends Component {
  pressEvent = item => {
    Alert.alert(
      '提示',
      `${item.securityName}`,
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
    const mapping = {
      imgIcon: 'fundImage',
      title: 'fundName',
      subTitle: 'securityName',
      description: 'message'
    }

    return (
      <View style={Styles.mainWrapper}>
        <ListView
          data={exampleData}
          mapping={mapping}
          isLink={true}
          onPress={this.pressEvent}
        />
      </View>
    )
  }
}

export default FlatListStyles
