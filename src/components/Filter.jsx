import React, { Component } from 'react';
import { connect } from 'react-redux'
import FilterProvider from '../providers/filter'

class Filter extends Component {
  render () {
    const {filterProvider, filterCount} = this.props;

    return <select className="filter" defaultValue='0' onChange={(e) => filterProvider.filter(e.currentTarget.value)}>
      <option value="0">Filter...</option>
      <option value={filterCount * 1}>Filter 1-100</option>
      <option value={filterCount * 2}>Filter 101-200</option>
      <option value={filterCount * 3}>Filter 201-300</option>
    </select>
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({
    filterProvider: new FilterProvider(dispatch)
  })
)(Filter);