import {
    TOGGLE_AMOUNT
  } from "../actions";

  const toggleAction = (id, toggle) => {
    return { type: TOGGLE_AMOUNT, payload: { id, toggle} };
  };

  export default toggleAction;