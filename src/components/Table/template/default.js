import React from 'react'
import BaseClass from './base'
import { View, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import TableHeader from '../header'
import Styles from '../styles'

class DefaultTable extends BaseClass {
  render() {
    const { getSortObject, _renderTdRows } = this
    const { sortName, sortBy, sourceData } = this.state
    const { children } = this.props

    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <ScrollView horizontal={true} style={{ flex: 1 }}>
          <View style={Styles.wrapper}>
            <TableHeader
              data={sourceData}
              rows={children}
              sortName={sortName}
              sortBy={sortBy}
              onPressEvent={getSortObject}
            />
            <View style={Styles.tbody}>
              <ScrollView>{_renderTdRows(children)}</ScrollView>
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
