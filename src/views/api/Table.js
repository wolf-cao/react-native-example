import React, { Component } from 'react'
import { View } from 'react-native'
import SourceData from '../../components/Table/data'
import TableView from '../../components/Table/index'
import TableColumnItem from '../../components/Table/column'
import Styles from '../../assets/styles/main'

class TableStyles extends Component {
  render() {
    return (
      <View style={Styles.mainWrapper}>
        <TableView data={SourceData}>
          <TableColumnItem
            label="基金名称"
            prop="fundName"
            width="120"
            fixed={true}
          />
          <TableColumnItem label="投资标的" prop="securityName" width="150" />
          <TableColumnItem label="买卖类型" prop="tradeType" width="100" />
          <TableColumnItem label="成本价" prop="cost" width="100" />
          <TableColumnItem label="数量" prop="amount" width="100" />
          <TableColumnItem label="状态栏" prop="status" width="100" />
          <TableColumnItem label="操作" prop="operator" width="100" />
        </TableView>
      </View>
    )
  }
}

export default TableStyles
