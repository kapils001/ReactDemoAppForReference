// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";


function Counter() {
  const value =  useSelector((state)=>state.counter.value);
  const themeTextColor = useSelector((state)=> state.theme.color);
  const dispatch = useDispatch()
    return (
    
    <div className="button">
    <button className='btn btn-dark' onClick={()=>{dispatch (increment())}}> + </button>
    <span className='value' style ={{color :themeTextColor}}> Count : {value} </span>
    <button className='btn btn-danger m-3' onClick ={() =>{dispatch(decrement()) }}> - </button>
    <button className='btn btn-danger m-3' onClick ={() =>{dispatch(incrementByAmount(25)) }}>IncreaseBYFactor </button>
    </div>
    
  )
}

export default Counter