import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrentSelectedItems from './components/CurrentSelectedItems';
import Modal from "./components/Modal"
import AppProvider from './providers/appProvider';


class App extends Component {
  render () {
    const {currentSelectedItems, collectionSaved, displayModal, appProvider} = this.props;

    return <div className="main-container">
      Filter List App

      <p>You have {currentSelectedItems.length} items {collectionSaved ? 'saved' : 'selected'} </p>

      {
        currentSelectedItems.length && collectionSaved ? <CurrentSelectedItems /> : null
      }

      <button type="button" disabled={displayModal} onClick={() => appProvider.triggerModal(true)}>Change</button>

      {
        displayModal ? <Modal filterCount='100' /> : null
      }
    </div>
  }
}

export default connect(
  state => {
    return ({
      currentSelectedItems: state.currentSelectedItems.items,
      collectionSaved: state.currentSelectedItems.saved,
      displayModal: state.appState.displayModal
    })
  },
  dispatch => ({
    appProvider: new AppProvider(dispatch)
  })
)(App);