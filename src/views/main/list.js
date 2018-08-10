import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Toast } from 'teaset'
import GridView from 'react-native-super-grid'
import DataBase from '../../components/Database/index'

export default class MainList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      targetList: DataBase.objects('Target')
    }
  }
  componentWillMount() {
    this.getStyles = () => {
      const r = Math.floor(Math.random() * 200)
      const g = Math.floor(Math.random() * 200)
      const b = Math.floor(Math.random() * 200)
      return {
        backgroundColor: `rgba(${r}, ${g}, ${b}, 1)`
      }
    }
  }
  render() {
    const { targetList } = this.state
    return (
      <GridView
        itemDimension={130}
        items={targetList}
        renderItem={item => {
          return (
            <View style={[this.getStyles(), colorStyles.listStyle]}>
              <Text style={colorStyles.title}>{item.title}</Text>
              <Text style={colorStyles.subTitle}>{item.description}</Text>
            </View>
          )
        }}
      />
    )
  }
}

const colorStyles = {
  title: {
    color: '#ffffff',
    fontSize: 18
  },
  subTitle: {
    color: '#ffffff',
    fontSize: 12
  },
  listStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  }
}
