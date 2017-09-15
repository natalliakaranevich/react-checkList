import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchProvider from '../providers/search'

class Search extends Component {
  onChange(e) {
    this.props.searchProvider.search(e.currentTarget.value);
  }

  render () {
    return <form className="search">
      <input type="number" min="0" placeholder="Input number..." onChange={this.onChange.bind(this)} />
    </form>
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({
    searchProvider: new SearchProvider(dispatch)
  })
)(Search);