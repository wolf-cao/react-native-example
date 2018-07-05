import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

class LoadingStyles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  clickToLoading = () => {
    this.setState( 
      {
        loading: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            loading: false
          })
        }, 3000)
      }
    )
  }
  render() {
    const { clickToLoading } = this
    const { loading } = this.state
    
    return (
      <View style={ViewStyles.mainContent}>
        <Text onPress={clickToLoading}>点击出现加载进度</Text>
        <Spinner visible={loading} />
      </View>
    )
  }
}

export default LoadingStyles

const ViewStyles = {
  mainContent: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20
  }
}
