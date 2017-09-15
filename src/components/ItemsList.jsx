import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemsListProvider from '../providers/itemsList';

class ItemsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: this.generateItems()
    }
  }

  generateItems() {
    const itemsCount = 300;
    let itemsArray = [];

    for (let i = itemsCount; i > 0; i--) {
      itemsArray.push(i)
    }

    return itemsArray.reverse();
  }

  selectItem (e) {
    let data = {};
    let {currentSelectedItems: items, itemsListProvider} = this.props;
    const index = items.findIndex((item) => item.id === e.currentTarget.id);

    items.length &&  index !== -1 ? data = items.filter(item  => item.id !== e.currentTarget.id) : data = items.concat({
      id: e.currentTarget.id,
      name: e.currentTarget.value
    });

    itemsListProvider.triggerItem(data);
  }

  render () {
    const {items} = this.state;
    const {currentSelectedItems, searchValue, filterValue, filterCount} = this.props;
    const filtered = items.filter(item => {
      debugger
      return (searchValue ? `${item}`.includes(searchValue) : true) && item >= filterValue && filterValue > 0 ? item < +filterValue - +filterCount : true;
    });

    return <ul className="items-list">
      {
        filtered.length ?
          filtered.map((item, index) => {
            const checked = currentSelectedItems.some(currentItem => currentItem.id === `item-${index}`);

            return <li key={index} className="item">
              <input type="checkbox" onChange={this.selectItem.bind(this)} checked={checked} id={`item-${index}`} value={`Element ${item}`}/>
              <label htmlFor={`item-${index}`}>Element {item}</label>
            </li>
          }) : 'No items available...'
      }

    </ul>
  }
}

export default connect(
  state => ({
    currentSelectedItems: state.currentSelectedItems.items,
    searchValue: state.search.searchValue,
    filterValue: state.filter.filterValue,
  }),
  dispatch => ({
    itemsListProvider: new ItemsListProvider(dispatch)
  })
)(ItemsList);