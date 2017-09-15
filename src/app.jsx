import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrentSelectedItems from './components/CurrentSelectedItems';
import Modal from "./components/Modal"
import AppProvider from './providers/appProvider';


class App extends Component {
  render () {
    const {currentSelectedItems, collectionSaved, displayModal, appProvider, itemsCollectionWasChanged} = this.props;

    return <div>
      <div className="header">
        Filter List App
      </div>
      <div className="main-container">
        <p>You have {currentSelectedItems.length} items {collectionSaved && !itemsCollectionWasChanged ? 'saved' : 'selected'} </p>

        {
          currentSelectedItems.length && collectionSaved ? <CurrentSelectedItems parent={this} /> : null
        }

        <button type="button" disabled={displayModal} onClick={() => appProvider.triggerModal(true)}>Change</button>

        {
          displayModal ? <Modal filterCount='100' /> : null
        }
      </div>
    </div>
  }
}

export default connect(
  state => {
    return ({
      currentSelectedItems: state.currentSelectedItems.items,
      collectionSaved: state.currentSelectedItems.saved,
      displayModal: state.appState.displayModal,
      componentName: 'app',
      itemsCollectionWasChanged: state.currentSelectedItems.update
    })
  },
  dispatch => ({
    appProvider: new AppProvider(dispatch)
  })
)(App);