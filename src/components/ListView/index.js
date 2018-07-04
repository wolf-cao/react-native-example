import React, { Component } from 'react'
import { FlatList, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import ListItem from './listItem'
import SeparatorLine from './separatorLine'

class ListViewStyles extends Component {
  render() {
    const { pressEvent } = this
    const { data, isLink, mapping, onPress } = this.props

    return (
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor="rgba(0, 0, 0, 0.1)"
            onPress={() => {
              onPress(item)
            }}
          >
            <ListItem data={item} isLink={isLink} mapping={mapping} />
          </TouchableHighlight>
        )}
        ItemSeparatorComponent={SeparatorLine}
      />
    )
  }
}

ListViewStyles.propTypes = {
  data: PropTypes.array,
  isLink: PropTypes.bool,
  mapping: PropTypes.object,
  onPress: PropTypes.func
}

ListViewStyles.defaultProps = {
  isLink: false,
  mapping: {
    imgIcon: '',
    title: '',
    subTitle: '',
    description: ''
  },
  onPress: () => {}
}

export default ListViewStyles
