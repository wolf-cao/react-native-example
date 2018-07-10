import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Styles from './styles'

/**
 * 表格头项
 */

class TableHeader extends Component {
  handleSortBy = prop => {
    this.props.onPressEvent.apply(this, [prop])
  }
  _renderTh = () => {
    const { handleSortBy } = this
    const { rows, sortName, sortBy } = this.props

    // sort asc element
    const sortAscItem = sortBy === 'asc' && (
      <View style={Styles.sortAsc}>
        <Icon name="sort-asc" size={14} color="#ffcc00" />
      </View>
    )

    // sort desc element
    const sortDescItem = sortBy === 'desc' && (
      <View style={Styles.sortDesc}>
        <Icon name="sort-desc" size={14} color="#ffcc00" />
      </View>
    )

    return rows.map((item, index) => {
      return (
        <View
          style={[Styles.thItem, { width: Number(item.props.width) }]}
          key={index}
        >
          <Text style={Styles.thText}>{item.props.label}</Text>
          <View style={Styles.thSort}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                handleSortBy(item.props.prop)
              }}
            >
              <Icon name="unsorted" size={14} color="#c8c8cd" />
              {item.props.prop === sortName && sortAscItem}
              {item.props.prop === sortName && sortDescItem}
            </TouchableOpacity>
          </View>
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
  rows: PropTypes.array,
  sortName: PropTypes.string,
  sortBy: PropTypes.string,
  onPressEvent: PropTypes.func
}

export default TableHeader
