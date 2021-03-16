import {INCREASE} from '../actions';

 const increaseAction = (id) => {
    return { type: INCREASE, payload: { id } };
  };

  export default increaseAction;