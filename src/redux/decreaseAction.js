import {
    DECREASE
  } from "../actions";

 const decreaseAction = (id, amount) => {
    return { type: DECREASE, payload: { id, amount} };
  };

 export default decreaseAction;