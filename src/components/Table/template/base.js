import React from 'react'
import { View } from 'react-native'
import Utils from '../../../common/utils'
import Styles from '../styles'

// 模板基础类
class BaseClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortName: '',
      sortBy: '',
      sourceData: this.props.data
    }
  }
  getSortObject = prop => {
    // 点击的是相同的字段
    if (this.state.sortName === prop) {
      let sortBy = ''
      if (!this.state.sortBy) {
        sortBy = 'asc'
      } else if (this.state.sortBy === 'asc') {
        sortBy = 'desc'
      } else {
        sortBy = ''
      }
      this.setState(
        {
          sortBy
        },
        () => {
          const { sourceData, sortName, sortBy } = this.state
          const sortData = Utils.sortBy(sourceData, sortName, sortBy)
          this.setState({
            sourceData: !sortBy ? this.props.data : sortData
          })
        }
      )
      return
    }

    // 点击的是不同的字段
    this.setState(
      {
        sortName: prop
      },
      () => {
        this.setState(
          {
            sortBy: 'asc'
          },
          () => {
            const { sourceData, sortName, sortBy } = this.state
            const sortData = Utils.sortBy(sourceData, sortName, sortBy)
            this.setState({
              sourceData: sortData
            })
          }
        )
      }
    )
  }
  _renderTdRows = columns => {
    const { sourceData } = this.state
    const renderCol = item => {
      // 每一个数据列
      return React.Children.map(columns, child => {
        return React.cloneElement(child, {
          data: item
        })
      })
    }

    // 每一个数据行
    return sourceData.map((item, index) => {
      return (
        <View style={Styles.tdList} key={index}>
          {renderCol(item)}
        </View>
      )
    })
  }
}

export default BaseClass
