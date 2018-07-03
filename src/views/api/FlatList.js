import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import ListItem from '../../components/ListItem/index'
import SeparatorLine from '../../components/ListItem/separatorLine'
import Styles from '../../assets/styles/main'

const exampleData = [
  {
    fundName: '标题文字',
    securityName: '副标题描述',
    fundImage: 'https://avatars0.githubusercontent.com/u/38270394?s=40&v=4',
    message: '说明文字说明文字'
  },
  {
    fundName: '标题文字',
    securityName: '副标题描述',
    fundImage: 'https://avatars0.githubusercontent.com/u/38270394?s=40&v=4',
    message: '说明文字说明文字'
  },
  {
    fundName: '标题文字',
    securityName: '副标题描述',
    fundImage: 'https://avatars0.githubusercontent.com/u/38270394?s=40&v=4',
    message: '说明文字说明文字'
  },
  {
    fundName: '标题文字',
    securityName: '副标题描述',
    fundImage: 'https://avatars0.githubusercontent.com/u/38270394?s=40&v=4',
    message: '说明文字说明文字'
  }
]

class FlatListStyles extends Component {
  render() {
    const mapping = {
      imgIcon: 'fundImage',
      title: 'fundName',
      subTitle: 'securityName',
      description: 'message'
    }

    return (
      <View style={Styles.mainWrapper}>
        <FlatList
          data={exampleData}
          renderItem={({ item }) => (
            <ListItem data={item} isLink={true} mapping={mapping} />
          )}
          ItemSeparatorComponent={SeparatorLine}
        />
      </View>
    )
  }
}

export default FlatListStyles
