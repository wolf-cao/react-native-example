import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TabView, Drawer } from 'teaset'
import Icon from 'react-native-vector-icons/Feather'
import { Actions } from 'react-native-router-flux'
import SideBar from '../mySetting/index'
import TargetList from './list'
import Styles from '../../assets/styles/main'

export default class MainPage extends Component {
  handleMySetting = () => {
    this.drawer = Drawer.open(<SideBar />)
  }
  handleAdd = () => {
    Actions.addTarget()
  }
  render() {
    return (
      <View style={Styles.mainWrapper}>
        <TabView style={{ flex: 1 }} type="carousel">
          <TabView.Sheet
            title="今天"
            icon={
              <Icon name="calendar" style={{ fontSize: 26 }} color="#eea95b" />
            }
            badge={1}
          >
            <TargetList />
          </TabView.Sheet>
          <TabView.Button
            title="定个目标"
            icon={
              <Icon
                name="plus-circle"
                style={{ fontSize: 46 }}
                color="#eea95b"
              />
            }
            onPress={this.handleAdd}
          />
          <TabView.Sheet
            title="我的"
            icon={<Icon name="user" style={{ fontSize: 26 }} color="#eea95b" />}
            onPress={this.handleMySetting}
          />
        </TabView>
      </View>
    )
  }
}
