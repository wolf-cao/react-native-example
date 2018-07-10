import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DefaultTemplate from './template/default'
import FixedTemplate from './template/fixed'

class TableStyles extends Component {
  render() {
    const { data, type, children } = this.props

    if (type === 'fix') {
      return <FixedTemplate data={data} children={children} />
    }
    return <DefaultTemplate data={data} children={children} />
  }
}

TableStyles.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string
}

TableStyles.defaultProps = {
  type: 'default'
}

export default TableStyles
