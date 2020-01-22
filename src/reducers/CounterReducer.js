// This reducer takes in two parameters: state, and an action.
// Depending on the action received, the reducer will make a change to state.
export default (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;

    case "ZERO":
      return 0;
    case "SQUARE":
      return state * state;

    case "INCREMENT_TEN":
      return state + 10;
    case "DECREMENT_TEN":
      return state - 10;
    case "TOGGLE_INTEGER":
      return state < 0 ? Math.abs(state) : 0 - state;
    default:
      return state;
  }
};
