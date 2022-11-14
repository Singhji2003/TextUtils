import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react'
import './style.css'
export default function Textarea(props) {
  const upperCase = ()=>{
    let newText = text.toUpperCase()
    setText(newText);
    props.showAlert("Coverted to Upper Case!!!")
  }
  const clear = ()=>{
    setText("")
    props.showAlert("Text Cleared!!!")
  }
  const removeSpace = ()=>{
    let newText = text.replace(/\s{2,}/g, ' ').trim() 
    setText(newText)
    props.showAlert("Removed Extra Spaces!!!")
  }
  const pswdGen = ()=>{
    let len = prompt("Enter the paswword length");
    len = parseInt(len);
    let char = "abcdefghijklmnopqrstuvwxyz"
        let numch  = "1234567890"
        let spch = "!@#$%&*"
        let num=0
        var pass = ""
        while(num<len){
            pass += char[Math.floor(Math.random()*char.length)]
            pass += numch[Math.floor(Math.random()*numch.length)]
            pass += spch[Math.floor(Math.random()*spch.length)]
            num+=3;
        }
        pass = pass.substring(0, len)
        setText(pass);
        props.showAlert(`${len} digits password craeted `)
  }
  const lowerCase = ()=>{
    let newText = text.toLowerCase()
    setText(newText);
    props.showAlert("Coverted to Lower Case!!!")
  }
  const change = (event)=>{
    setText(event.target.value)
  }
  const copyText = ()=>{
    let ctext = document.getElementById("text");
    navigator.clipboard.writeText(ctext.value)
    props.showAlert("Text Copied!!!")
  }
  const [text, setText] = useState("");
  return (
    <div>
      <div className="mb-3">
  <label htmlFor="text"  className={`form-label my-3 text-${props.mode==="light"?"dark":"light"}`}>Enter your text to Analyze</label>
  <textarea className="form-control" style={{backgroundColor : props.mode==="light"?"white":"#343a40"}} value={text} onChange = {change} id="text" rows="7"></textarea>
  <div className="left">
  <button id='upper' style={{border: "2px solid black"}} onClick={ text.length===0? isDisabled :upperCase }>Convert to UpperCase</button>
  <button id='lower' style={{border: "2px solid black"}} onClick={text.length===0? isDisabled :lowerCase}>Convert to LowerCase</button>
  <button id='remove' style={{border: "2px solid black"}} onClick={text.length===0? isDisabled :removeSpace}>Remove Extra Spaces</button>
  </div>
  <div className="right">
  <button id='pswd' style={{border: "2px solid black"}} onClick={pswdGen}>Password Generator</button>
  <button id='copy' style={{border: "2px solid black"}} onClick={text.length===0? isDisabled :copyText}>Copy the Text</button>
  <button id='rem' style={{border: "2px solid black"}} onClick={text.length===0? isDisabled :clear}>Clear Text</button>
  </div>
</div>
<h1 id="details" style={{color: props.mode==="light"?"black":"white"}}>Text Details</h1>
<p style={{color: props.mode==="light"?"black":"white"}}><b>Characters count: </b> {text.length}</p>
<p style={{color: props.mode==="light"?"black":"white"}}><b>Word count: </b> {text.split(" ").length-1}</p>
<h2 style={{color: props.mode==="light"?"black":"white"}}>Preview</h2>
<p style={{color: props.mode==="light"?"black":"white"}}>{text}</p>
    </div>
  )
}