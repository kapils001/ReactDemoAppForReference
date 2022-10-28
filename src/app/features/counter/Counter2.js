import { useState } from "react";

function Counter() {
    const [value, setvalue] = useState(0);
    return (
    <div className="button">
    <button className='btn btn-dark' onClick={()=>{setvalue(value+1)}}> + </button>
    <span className='value'> Count : {value} </span>
    <button className='btn btn-danger' onClick ={() =>{ setvalue(value-1)}}> - </button>
    </div>
    
  )
}

export default Counter