import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Styles from './styles'

/**
 * 表格列项
 */

class ColumnItem extends Component {
  render() {
    const { prop, data, width } = this.props

    return (
      <View style={[Styles.tdCol, { width: Number(width) }]}>
        <Text style={Styles.tdText}>{data[prop]}</Text>
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
