import React, {useState} from 'react'

export default function Calculator() {
    let[num1, setNum1] = useState()
    let[num2, setNum2] = useState()
    const[result, setResult] = useState()
    const handlefirst = (event)=>{
      setNum1(event.target.value);
    }
    const handlesecond = (event)=>{
      setNum2(event.target.value);
    }
    const sumNum =()=>{
      num1 = parseInt(num1);
      num2 = parseInt(num2);
      let sum = num1+num2;
      setResult(sum);
    }
    const mulNum =()=>{
      num1 = parseInt(num1);
      num2 = parseInt(num2);
      let sum = num1*num2;
      setResult(sum);
    }
  return (
    <div>
   Enter the First Number:  <input type="number" onChange={handlefirst} value={num1} /><br/><br/>
   Enter the Second Number:  <input type="number" onChange={handlesecond} value={num2} />
   <div className="mb-3 ">
   <input className="form-control form-control-sm " value={result} type="text" />
</div>
<button type="button" onClick={sumNum} class="btn btn-info">Sum</button>
<button type="button" onClick={mulNum} class="btn btn-info">Multiply</button>
    </div>
  )
}
