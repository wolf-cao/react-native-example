import React from 'react'
import BaseClass from './base'
import { View, ScrollView, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import TableHeader from '../header'
import Styles from '../styles'

class FixedTable extends BaseClass {
  scrollEvent = () => {
    const RCTUIManager = require('NativeModules').UIManager
    const sv = this.refs.scrollView
    RCTUIManager.measure(sv.getInnerViewNode(), (...data) => {
      this.refs.fixTable.scrollTo({ x: 0, y: 88 - data[5], animated: true })
    })
  }
  render() {
    const { scrollEvent, getSortObject, _renderTdRows } = this
    const { sortName, sortBy, sourceData } = this.state
    const { children } = this.props

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
              {_renderTdRows(fixedColumns)}
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
                {_renderTdRows(unFixedColumns)}
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
