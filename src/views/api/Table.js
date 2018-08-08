import React, { Component } from 'react'
import { View, Text } from 'react-native'
import SourceData from '../../components/Table/data'
import TableView from '../../components/Table/index'
import TableColumnItem from '../../components/Table/column'
import Styles from '../../assets/styles/main'

// 自定义基金名称列
class FundNameItem extends Component {
  render() {
    const { fundName, securityName } = this.props
    return (
      <View>
        <Text style={{ color: '#ffcc00', fontSize: 12 }}>{fundName}</Text>
        <Text style={{ color: 'red', fontSize: 12 }}>{securityName}</Text>
      </View>
    )
  }
}

// 自定义买卖类型列
class TradeTypeItem extends Component {
  render() {
    const { tradeType } = this.props
    return (
      <View>
        <Text style={{ color: 'red', fontSize: 12 }}>{tradeType}</Text>
      </View>
    )
  }
}

// table元素
class TableStyles extends Component {
  render() {
    return (
      <View style={Styles.mainWrapper}>
        <TableView data={SourceData}>
          <TableColumnItem
            label="基金名称"
            prop="fundName"
            width="120"
            sortable={true}
          >
            <FundNameItem />
          </TableColumnItem>
          <TableColumnItem label="投资标的" prop="securityName" width="150" />
          <TableColumnItem label="买卖类型" prop="tradeType" width="100">
            <TradeTypeItem />
          </TableColumnItem>
          <TableColumnItem
            label="成本价"
            prop="cost"
            width="100"
            sortable={true}
          />
          <TableColumnItem
            label="数量"
            prop="amount"
            width="100"
            sortable={true}
          />
          <TableColumnItem label="状态栏" prop="status" width="100" />
          <TableColumnItem label="操作" prop="operator" width="100" />
        </TableView>
      </View>
    )
  }
}

export default TableStyles
