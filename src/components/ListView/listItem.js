import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, Image } from 'react-native'
import ListStyle from './styles'

class ListItem extends Component {
  render() {
    const { data, isLink, mapping } = this.props

    // render arrow link icon
    const arrowLinkIcon = isLink && (
      <View style={ListStyle.listArrowIcon}>
        <Icon name="chevron-right" size={16} color="#c8c8cd" />
      </View>
    )

    // render subtitle
    const subTitleItem = mapping.subTitle && (
      <Text style={ListStyle.subTitle}>{data[mapping.subTitle]}</Text>
    )

    return (
      <View style={ListStyle.listItem}>
        <View style={ListStyle.listImg}>
          <Image
            source={{ uri: data[mapping.imgIcon] }}
            style={{ width: 30, height: 30 }}
          />
        </View>
        <View
          style={[ListStyle.mainItem, !mapping.subTitle && ListStyle.fixTitle]}
        >
          <Text style={ListStyle.title}>{data[mapping.title]}</Text>
          {subTitleItem}
        </View>
        <View style={ListStyle.subItem}>
          <Text style={ListStyle.subItemText}>{data[mapping.description]}</Text>
        </View>
        {arrowLinkIcon}
      </View>
    )
  }
}

export default ListItem

ListItem.propTypes = {
  data: PropTypes.object,
  isLink: PropTypes.bool,
  mapping: PropTypes.object
}

ListItem.defaultProps = {
  isLink: false,
  mapping: {
    imgIcon: '',
    title: '',
    subTitle: '',
    description: ''
  }
}
