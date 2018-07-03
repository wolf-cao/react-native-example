import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import ListItem from '../../components/ListItem/index'
import Styles from '../../assets/styles/main'

const exampleData = [
  {
    title: '标题文字',
    subTitle: '副标题描述',
    imgIcon: 'https://avatars0.githubusercontent.com/u/38270394?s=40&v=4',
    description: '说明文字说明文字'
  },
  {
    title: '标题文字',
    subTitle: '副标题描述',
    imgIcon: 'https://avatars0.githubusercontent.com/u/38270394?s=40&v=4',
    description: '说明文字说明文字'
  },
  {
    title: '标题文字',
    subTitle: '副标题描述',
    imgIcon: 'https://avatars0.githubusercontent.com/u/38270394?s=40&v=4',
    description: '说明文字说明文字'
  },
  {
    title: '标题文字',
    subTitle: '副标题描述',
    imgIcon: 'https://avatars0.githubusercontent.com/u/38270394?s=40&v=4',
    description: '说明文字说明文字'
  }
]

class FlatListStyles extends Component {
  render() {
    return (
      <View style={Styles.mainWrapper}>
        <FlatList
          data={exampleData}
          renderItem={({ item }) => <ListItem data={item} />}
        />
      </View>
    )
  }
}

export default FlatListStyles
