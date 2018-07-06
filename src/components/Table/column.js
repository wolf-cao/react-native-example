import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Styles from './styles'

/**
 * 表格列项
 */

class ColumnItem extends Component {
  render() {
    const { label, prop, data } = this.props

    return (
      <View style={Styles.tdCol}>
        <Text style={Styles.tdText}>{data[prop]}</Text>
      </View>
    )
  }
}

ColumnItem.propTypes = {
  label: PropTypes.string,
  prop: PropTypes.string,
  data: PropTypes.object
}

export default ColumnItem
