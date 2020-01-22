import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import "./index.css";
import CounterReducer from "./reducers/CounterReducer";
import { createStore } from "redux";

// The variable 'store' holds the function createStore which takes in the reducer
// and an integration for redux dev tools.
const store = createStore(
  CounterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// ReactDOM.render is wrapped in a callback function, render.
// This allows us to pass ReactDOM.render to store.subscribe which documents previous and current states
// When either button in Counter is clicked, store dispatches an action.

// When the store dispatches an action, render is called and ReactDOM.render will be triggered.
const render = () =>
  ReactDOM.render(
    <Counter
      // We are using get state to obtain the state from the store and pass it down as a prop to the counter.
      quantity={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      onReset={() => store.dispatch({ type: "ZERO" })}
      onSquare={() => store.dispatch({ type: "SQUARE" })}
      incrementTen={() => store.dispatch({ type: "INCREMENT_TEN" })}
      decrementTen={() => store.dispatch({ type: "DECREMENT_TEN" })}
      toggleInteger={() => store.dispatch({ type: "TOGGLE_INTEGER" })}
    ></Counter>,
    document.getElementById("root")
  );
render();
store.subscribe(render);
