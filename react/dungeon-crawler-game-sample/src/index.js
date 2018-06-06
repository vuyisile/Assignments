import React from "react";
import ReactDOM from "react-dom";
import DungeonGame from "./dungeon.js";
import { createStore } from "redux"
import { combineReducers } from "redux"
import productsReducer from "./reducers/products-reducer"
import usersReducer from "./reducers/users-reducer"
import { Provider } from "react-redux"
import "./index.css";


const allReducers = combineReducers({
  products: productsReducer,
  users: usersReducer
})

const store = createStore(
  allReducers, {
    products: [{ name: "montshe", }],
    users: "john"
  },
  window.devToolsExtension && window.devToolsExtension()

);

class Layout extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <h1>dungeon crawler</h1>
        <DungeonGame />
      </div>
    );
  }
}
ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>
  ,
  document.getElementById("root"));
