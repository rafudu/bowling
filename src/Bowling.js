import React from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/game';
import Game from './containers/Game';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore(reducer, composeEnhancers());

class Bowling extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}

export default Bowling;
