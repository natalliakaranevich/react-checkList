import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemsListProvider from '../providers/itemsList';

class CurrentSelected extends Component {
  shouldComponentUpdate(nextProps) {
    const {parent} = this.props;
    if (parent && parent.props.componentName.toLowerCase() === 'app') {
      return !nextProps.itemsCollectionWasChanged
    }
    return true;
  }

  removeItem(e) {
    e.preventDefault();
    const {itemsListProvider, currentSelectedItems} = this.props;

    itemsListProvider.removeItem(currentSelectedItems.filter(item  => item.id !== e.currentTarget.dataset.id), true);
  }

  render () {
    const {currentSelectedItems} = this.props;
    return <div className="current-selected">
      {
        currentSelectedItems.map((item, index) => <div key={index} className="selected-item" >
          {item.name} | <a onClick={this.removeItem.bind(this)} data-id={item.id} className="remove">x</a>
        </div>)
      }
    </div>
  }
}


export default connect(
  state => ({
    currentSelectedItems: state.currentSelectedItems.items,
    itemsCollectionWasChanged: state.currentSelectedItems.update
  }),
  dispatch => ({
    itemsListProvider: new ItemsListProvider(dispatch)
  })
)(CurrentSelected);