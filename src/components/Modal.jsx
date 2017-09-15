import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemList from './ItemsList';
import Search from './Search';
import Filter from './Filter';
import CurrentSelectedItems from './CurrentSelectedItems';

import ItemsListProvider from '../providers/itemsList';
import AppProvider from '../providers/appProvider';
import storageAvailable from "../utils";
const Storage = localStorage;

class Modal extends Component {
  saveItems() {
    const {itemsListProvider, appProvider, currentSelectedItems } = this.props;

    itemsListProvider.saveItemsCollection.apply(itemsListProvider);
    appProvider.triggerModal(false);
    storageAvailable && Storage.setItem('selectedItems', JSON.stringify(currentSelectedItems));
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
        <button type="button" disabled={!currentSelectedItems.length} onClick={this.saveItems.bind(this)}>Save</button>
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