import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DefaultTemplate from './template/default'
import FixedTemplate from './template/fixed'

class TableStyles extends Component {
  render() {
    const { data, children } = this.props

    return <FixedTemplate data={data} children={children} />
  }
}

TableStyles.propTypes = {
  data: PropTypes.array
}

export default TableStyles
