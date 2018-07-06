import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

class TableBody extends Component {
  render() {
    const { bodyData } = this.props

    return (
      <View>
        <Text>TableBody</Text>
      </View>
    )
  }
}

TableBody.propTypes = {
  bodyData: PropTypes.array
}

export default TableBody
