import React, { Component } from 'react'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Utils from '../../../common/utils'
import TableHeader from '../header'
import Styles from '../styles'

class FixedTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortName: '',
      sortBy: '',
      sourceData: this.props.data
    }
  }
  scrollEvent = () => {
    const RCTUIManager = require('NativeModules').UIManager
    const sv = this.refs.scrollView
    RCTUIManager.measure(sv.getInnerViewNode(), (...data) => {
      this.refs.fixTable.scrollTo({ x: 0, y: 88 - data[5], animated: true })
    })
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
  render() {
    const { scrollEvent, getSortObject } = this
    const { sortName, sortBy, sourceData } = this.state
    const { children } = this.props

    const tdRow = returnElement => {
      // 每一个数据行
      return sourceData.map((item, index) => {
        return (
          <View style={Styles.tdList} key={index}>
            {returnElement(item)}
          </View>
        )
      })
    }

    const fixedColumns = children.filter(item => item.props.fixed)
    const unFixedColumns = children.filter(item => !item.props.fixed)

    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 0 }}>
          <TableHeader
            data={sourceData}
            rows={fixedColumns}
            sortName={sortName}
            sortBy={sortBy}
            onPressEvent={getSortObject}
          />
          <TouchableOpacity activeOpacity={1}>
            <ScrollView showsVerticalScrollIndicator={false} ref="fixTable">
              {tdRow(item => {
                // 每一个数据列
                return React.Children.map(fixedColumns, child => {
                  return React.cloneElement(child, {
                    data: item
                  })
                })
              })}
            </ScrollView>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>
          <View style={Styles.wrapper}>
            <TableHeader
              data={sourceData}
              rows={unFixedColumns}
              sortName={sortName}
              sortBy={sortBy}
              onPressEvent={getSortObject}
            />
            <View style={Styles.tbody}>
              <ScrollView onScroll={scrollEvent} ref="scrollView">
                {tdRow(item => {
                  // 每一个数据列
                  return React.Children.map(unFixedColumns, child => {
                    return React.cloneElement(child, {
                      data: item
                    })
                  })
                })}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

FixedTable.propTypes = {
  data: PropTypes.array
}

export default FixedTable
