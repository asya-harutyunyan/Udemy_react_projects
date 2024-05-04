import { createStore } from "redux";

//We can also write this way, and than import this constant in the component also
export const INCREMENT="increment"

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  //We can't write like this //////////////////////////
  //   if(action.type==='increment'){
  //     state.counter++;
  //     return state;
  //   }

  //But we can do like this, but not a good variant, we must not change the real state, we should return a new object
  //   if (action.type === "increment") {
  //     state.counter++;
  //     return {
  //       counter: state.counter,
  //       showCounter: state.showCounter,
  //     };
  //   }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return state;
};

const store = createStore(counterReducer);
//createStore()- This function is used to create a Redux store, which is responsible for managing the state of the application

export default store;
