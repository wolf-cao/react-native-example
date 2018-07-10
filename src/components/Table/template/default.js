import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import TableHeader from '../header'
import Styles from '../styles'

class DefaultTable extends Component {
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
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <ScrollView horizontal={true} style={{ flex: 1 }}>
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
        </ScrollView>
      </View>
    )
  }
}

DefaultTable.propTypes = {
  data: PropTypes.array
}

export default DefaultTable
