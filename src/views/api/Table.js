import React, { Component } from 'react'
import { View, Text } from 'react-native'
import SourceData from '../../components/Table/data'
import TableView from '../../components/Table/index'
import TableColumnItem from '../../components/Table/column'
import Styles from '../../assets/styles/main'

class TableStyles extends Component {
  render() {
    return (
      <View style={Styles.mainWrapper}>
        <TableView data={SourceData}>
          <TableColumnItem label="基金名称" prop="fundName" width="150" />
          <TableColumnItem label="投资标的" prop="securityName" width="150" />
          <TableColumnItem label="买卖类型" prop="tradeType" width="100" />
          <TableColumnItem label="成本价" prop="cost" width="150" />
          <TableColumnItem label="数量" prop="amount" width="150" />
          <TableColumnItem label="状态栏" prop="status" width="150" />
          <TableColumnItem label="操作" prop="operator" width="150" />
        </TableView>
      </View>
    )
  }
}

export default TableStyles
