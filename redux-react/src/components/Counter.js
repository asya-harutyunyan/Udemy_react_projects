import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";
import { INCREMENT } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: INCREMENT });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//When we use useSelector React Redux will automatically set up a subscription to the redux store for this component. Component will be updated and will receive the latest counter whenever that data changes in the redux store

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//The same Component with class based
//Hooks are not usable in class based components
//connect-helps to connect class-based components to react, useSelector, useDispatch we can't use

// import { connect } from "react-redux";
// import classes from "./Counter.module.css";
// import { Component } from "react";
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement()
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// //The first function maps redux state to props which will be received in this component then
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// //counter: - is a key, we can write another name

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//We execute the connect function, it then returns a new function, and to that returned function we pass Counter
//Connect also wants some arguments. Both arguments are function
