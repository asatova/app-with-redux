import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import News from "./News"
import Footer from "./footer"


function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return <div className="App">
    <h1>Counter: { counter } </h1>
    <button onClick={() => dispatch({type:"INCREMENT"})}>Increment</button> <hr />
    <button onClick={() => dispatch({type:"DECREMENT"})}>Decrement</button>
  <br />
  <News/>
  <br />
  <Footer />
  </div>;
}

export default App;
