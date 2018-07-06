import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView } from 'react-native'
import TableHeader from './header'
import Styles from './styles'

class TableStyles extends Component {
  render() {
    const { data, children } = this.props
    const tdRow = returnElement => {
      // 每一个数据行
      return data.map((item, index) => {
        return (
          <View style={Styles.tdList} key={index}>
            {returnElement(item)}
          </View>
        )
      })
    }

    return (
      <View style={Styles.wrapper}>
        <TableHeader data={data} rows={children} />
        <View style={Styles.tbody}>
          <ScrollView>
            {tdRow(item => {
              // 每一个数据列
              return React.Children.map(children, child => {
                return React.cloneElement(child, {
                  data: item
                })
              })
            })}
          </ScrollView>
        </View>
      </View>
    )
  }
}

TableStyles.propTypes = {
  data: PropTypes.array
}

export default TableStyles
