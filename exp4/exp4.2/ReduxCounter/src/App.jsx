import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./features/counter/counterSlice";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="counter-card">
        <h2>Redux Counter</h2>

        <div className="circle">
          {count}
        </div>

        <div className="controls">
          <button onClick={() => dispatch(decrement())}>-</button>
          <button className="reset" onClick={() => dispatch(reset())}>
            Reset
          </button>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
