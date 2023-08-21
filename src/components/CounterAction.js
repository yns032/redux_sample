import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../store/counter";
function CounterAction() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Arttır</button>
      <button onClick={() => dispatch(decrement())}>Azalt</button>
      <button onClick={() => dispatch(incrementByAmount(4))}>4 Arttir</button>
    </div>
  );
}

export default CounterAction;
