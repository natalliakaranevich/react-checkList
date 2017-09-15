import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemList from './ItemsList';
import Search from './Search';
import Filter from './Filter';
import CurrentSelectedItems from './CurrentSelectedItems';

import ItemsListProvider from '../providers/itemsList';
import AppProvider from '../providers/appProvider';

class Modal extends Component {
  saveItems() {

    const {itemsListProvider, appProvider } = this.props;

    itemsListProvider.saveItemsCollection.bind(itemsListProvider);
    appProvider.triggerModal(false);
  }

  render () {
    const { currentSelectedItems, appProvider, filterCount } = this.props;
    return <div className="modal">
      <span className="close" onClick={() => appProvider.triggerModal(false)}  />
      <h2 className="title">Select Items (max 3)</h2>
      <Search />
      <Filter filterCount={filterCount}  />
      <ItemList filterCount={filterCount} />
      {
        currentSelectedItems.length ? <CurrentSelectedItems /> : null
      }
      <div className="buttons-set">
        <button type="button" onClick={this.saveItems.bind(this)}>Save</button>
        <button type="button" onClick={() => appProvider.triggerModal(false)}>Cancel</button>
      </div>
    </div>
  }
}

export default connect(
  state => ({
    currentSelectedItems: state.currentSelectedItems.items
  }),
  dispatch => ({
    itemsListProvider: new ItemsListProvider(dispatch),
    appProvider: new AppProvider(dispatch)
  })
)(Modal);