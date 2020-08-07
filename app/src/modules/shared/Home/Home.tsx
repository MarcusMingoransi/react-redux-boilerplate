import React, { useState } from 'react';
import './Home.css';
import { useSelector, useDispatch } from 'react-redux'
import { CLICK_ADD, CLICK_SUB } from "../../../store/types";

const Home = () => {

  const counterReducer = useSelector((state: any) => state.counterReducer)
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
      <button type="button" onClick={ () => dispatch({type: CLICK_SUB, counter: count}) }>
          Click to Subtract
        </button>
        <input type="number" onChange={(e) => setCount(Number(e.target.value))} value={count}/>
        <button type="button" onClick={ () => dispatch({type: CLICK_ADD, counter: count}) }>
          Click to ADD
        </button>
        <h1>{ counterReducer }</h1>
      </header>
    </div>
  );
}

export default Home;
