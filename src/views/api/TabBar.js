// import React, { Component } from 'react'
// import { View, TabBarIOS, Text } from 'react-native'
// import Button from 'apsl-react-native-button'
// import Styles from '../../assets/styles/main'
// import ImagePicker from 'react-native-image-crop-picker'

// class TabBarStyles extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       selectedTab: '0' // 预设当前点击的item,一般默认0
//     }
//   }

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <TabBarIOS
//           barTintColor="orange" // TabBarIOS背景色
//           tintColor="blue" // 被选中标签颜色
//           translucent={true} // TabBarIOS不需要半透明效果
//         >
//           <TabBarIOS.Item
//             systemIcon="contacts" //系统图标
//             badge="6" //红色角标
//             selected={this.state.selectedTab === '1'}
//             onPress={() => {
//               this.setState({
//                 selectedTab: '1'
//               })
//             }}
//             Î
//           >
//             <View style={styles.viewStyle}>
//               <Text style={{ textAlign: 'center' }}>第一页</Text>
//             </View>
//           </TabBarIOS.Item>

//           <TabBarIOS.Item
//             systemIcon="contacts" //系统图标
//             // renderAsOriginal={true} // 如果为false，只会显示纯色图片
//             title="demo" //文字（如果设置了系统图标，那么这个属性会被忽略）
//             selected={this.state.selectedTab === '2'}
//             onPress={() => {
//               this.setState({
//                 selectedTab: '2'
//               })
//             }}
//           >
//             <View style={styles.viewStyle}>
//               <Text style={{ textAlign: 'center' }}>第二页</Text>
//             </View>
//           </TabBarIOS.Item>

//           <TabBarIOS.Item
//             systemIcon="history"
//             selected={this.state.selectedTab === '3'}
//             onPress={() => {
//               this.setState({
//                 selectedTab: '3'
//               })
//             }}
//           >
//             <View style={styles.viewStyle}>
//               <Text style={{ textAlign: 'center' }}>第三页</Text>
//             </View>
//           </TabBarIOS.Item>
//         </TabBarIOS>
//       </View>
//     )
//   }
// }

// export default TabBarStyles

// const styles = {
//   viewStyle: {
//     backgroundColor: 'orange',
//     marginTop: 25,
//     height: 44,
//     alignContent: 'center',
//     justifyContent: 'center'
//   },

//   textStyle: {
//     textAlign: 'center',
//     width: 100,
//     height: 100,
//     backgroundColor: 'red'
//   }
// }
