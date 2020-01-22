import React from "react";
import "./Counter.css";

const Counter = props => {
  return (
    <div className="Counter-container">
      <div className="Counter-quantity-container">
        Quantity: {props.quantity}
      </div>

      {/* These buttons are being passed functions (onIncrement and onDecrement) as props. 
      These functions, which are called on click, then dispatch a specific action (either 'INCREMENT' or 'DECREMENT'). */}
      <div className="Counter-button-container">
        <button className="button" onClick={props.onIncrement}>
          +
        </button>
        <button className="button" onClick={props.onDecrement}>
          -
        </button>
        <button className="button" onClick={props.onReset}>
          reset
        </button>
        <button className="button" onClick={props.onSquare}>
          square
        </button>
        <button className="button" onClick={props.incrementTen}>
          + 10
        </button>
        <button className="button" onClick={props.decrementTen}>
          - 10
        </button>
        <button className="button" onClick={props.toggleInteger}>
          toggle + / -
        </button>
      </div>
    </div>
  );
};

export default Counter;
