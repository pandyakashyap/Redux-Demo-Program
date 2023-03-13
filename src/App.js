import './App.css';
import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import {incre , decre} from './action/index';
function App() {

    const mystate = useSelector((state) => state.changeno);
    const dispatch = useDispatch();

  return (
    <>
        <div className="container">
            <h1>Increment / Decrement Counter </h1>
                <input type="txt" className="txt" value={mystate}></input>
                <div className="qulty">
                    {/* <button type="button" className="btn" onClick = { () => dispatch({type:"INCREMENT"})}> Increment </button>   */}
                    {/* <button type="button" className="btn" onClick = { () => dispatch({type:"DECREMENT"})}> Decrement</button>   */}
                    
                    <button type='button' className='btn'onClick = { () => dispatch(incre() )}>Increment</button>   
                    <button type="button" className="btn" onClick = { () => dispatch(decre() )}> Decrement </button>     
                </div>
        </div>
    </>
     );
}

export default App;
