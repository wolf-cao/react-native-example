import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import Styles from './styles'

/**
 * 表格头项
 */

class TableHeader extends Component {
  _renderTh = () => {
    const { rows } = this.props
    return rows.map((item, index) => {
      return (
        <View
          style={[Styles.thItem, { width: Number(item.props.width) }]}
          key={index}
        >
          <Text style={Styles.thText}>{item.props.label}</Text>
        </View>
      )
    })
  }
  render() {
    const { _renderTh } = this

    return <View style={Styles.theader}>{_renderTh()}</View>
  }
}

TableHeader.propTypes = {
  data: PropTypes.array,
  rows: PropTypes.array
}

export default TableHeader
