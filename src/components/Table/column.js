import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Styles from './styles'

/**
 * 表格列项
 */

class ColumnItem extends Component {
  renderCol = item => {
    const { children } = this.props
    // 每一个数据列
    return React.cloneElement(children, { ...item })
  }
  render() {
    const { renderCol } = this
    const { prop, data, width, children } = this.props

    if (!children) {
      return (
        <View style={[Styles.tdCol, { width: Number(width) }]}>
          <Text style={Styles.tdText}>{data[prop]}</Text>
        </View>
      )
    }
    return (
      <View style={[Styles.tdCol, { width: Number(width) }]}>
        {renderCol(data)}
      </View>
    )
  }
}

ColumnItem.propTypes = {
  label: PropTypes.string,
  prop: PropTypes.string,
  data: PropTypes.object,
  width: PropTypes.string
}

export default ColumnItem
