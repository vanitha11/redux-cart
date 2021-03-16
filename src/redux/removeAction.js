import {REMOVE} from '../actions';

 const removeAction = id => {
    return { type: REMOVE, payload: { id } };
  };

  export default removeAction;