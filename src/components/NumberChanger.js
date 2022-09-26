import React, {useState} from 'react'

export default function No_change() {
    const[num, setNum] = useState(0);
    const numIncrease=()=>{
        setNum(num+1);
    }
    const multiply=()=>{
        setNum(num*5);
    }
    const reset=()=>{
        setNum(0);
    }
  return (
    <div>
      <h1>{num}</h1>
      <button type="button" onClick={numIncrease} className="btn btn-info">Click Here to increment by 1</button>
      <button type="button" onClick={multiply} className="btn btn-info">Multiply by 5</button>
      <button type="button" onClick={reset} className="btn btn-info">Reset</button>
    </div>
  )
}
