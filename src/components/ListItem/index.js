import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, Image } from 'react-native'
import ListStyle from './styles'

class ListItem extends Component {
  render() {
    const { data, isLink } = this.props

    // render arrow link icon
    const arrowLinkIcon = isLink && (
      <View style={ListStyle.listArrowIcon}>
        <Icon name="chevron-right" size={16} color="#c8c8cd" />
      </View>
    )

    return (
      <View style={ListStyle.listItem}>
        <View style={ListStyle.listImg}>
          <Image
            source={{ uri: data.imgIcon }}
            style={{ width: 30, height: 30 }}
          />
        </View>
        <View style={ListStyle.mainItem}>
          <Text style={ListStyle.title}>{data.title}</Text>
          <Text style={ListStyle.subTitle}>{data.subTitle}</Text>
        </View>
        <View style={ListStyle.subItem}>
          <Text style={ListStyle.subItemText}>{data.description}</Text>
        </View>
        {arrowLinkIcon}
      </View>
    )
  }
}

export default ListItem

ListItem.propTypes = {
  data: PropTypes.object,
  isLink: PropTypes.bool
}

ListItem.defaultProps = {
  isLink: true
}
