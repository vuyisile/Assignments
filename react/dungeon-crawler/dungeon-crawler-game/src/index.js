import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// redux:
import { createStore, combineReducers } from 'redux'
import { Provider } from "react-redux"


// const allReducers = combineReducers({

// })


//const store = createStore('allReducers');


class Game extends React.Component {
  render() {
    return (
      <div>
        {'Dungeon Crawler'}
      </div>
    );
  }
}

ReactDOM.render(
  <Game />
  , document.getElementById('root'));

