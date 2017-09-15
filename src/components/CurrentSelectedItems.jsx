import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemsListProvider from '../providers/itemsList';

class CurrentSelected extends Component {
  removeItem(e) {
    const {itemsListProvider, currentSelectedItems} = this.props;

    itemsListProvider.triggerItem(currentSelectedItems.filter(item  => item.id !== e.currentTarget.id));
  }

  render () {
    const {currentSelectedItems} = this.props;
    return <div className="current-selected">
      {
        currentSelectedItems.map((item, index) => <div key={index} className="selected-item" >
          {item.name} | <a onClick={this.removeItem.bind(this)} id={item.id} className="remove">x</a>
        </div>)
      }
    </div>
  }
}


export default connect(
  state => ({
    currentSelectedItems: state.currentSelectedItems.items
  }),
  dispatch => ({
    itemsListProvider: new ItemsListProvider(dispatch)
  })
)(CurrentSelected);