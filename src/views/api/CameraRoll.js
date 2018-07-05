// import React, { Component } from 'react'
// import { View, Image } from 'react-native'
// import Button from 'apsl-react-native-button'
// import Styles from '../../assets/styles/main'
// import ImagePicker from 'react-native-image-crop-picker'

// class CamereRollStyles extends Component {
//   cameraAction = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true
//     }).then(image => {
//       this.setState({
//         imageUrl: { uri: image['path'] }
//       })
//     })
    
//   }
//   constructor(props) {
//     super(props)
//     this.state = {
//       imageUrl: ''
//     }
//   }

//   render() {
//     const { cameraAction } = this
//     return (
//       <View style={viewStyles.mainContent}>
//         <View style={viewStyles.viewBox}>
//           <Button
//             style={Styles.blueButton}
//             textStyle={Styles.whiteButtonText}
//             onPress={cameraAction}
//           >
//             选择照片
//           </Button>
//         </View>
//         <View style={viewStyles.viewBox}>
//           <Image
//             style={{ width: 300, height: 300 }}
//             source={this.state.imageUrl}
//           />
//         </View>
//       </View>
//     )
//   }
// }

// export default CamereRollStyles

// const viewStyles = {
//   mainContent: {
//     marginTop: 10,
//     marginLeft: 10,
//     marginBottom: 10,
//     marginRight: 10
//   },
//   viewBox: {
//     marginBottom: 5,
//     marginTop: 5
//   }
// }
