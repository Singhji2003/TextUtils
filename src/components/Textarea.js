import React, {useState} from 'react'
import './style.css'
export default function Textarea() {
  const upperCase = ()=>{
    let newText = text.toUpperCase()
    setText(newText);
  }
  const clear = ()=>{
    setText("")
  }
  const removeSpace = ()=>{
    let newText = text.replace(/\s{2,}/g, ' ').trim() 
    setText(newText)
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
  }
  const lowerCase = ()=>{
    let newText = text.toLowerCase()
    setText(newText);
  }
  const change = (event)=>{
    setText(event.target.value)
  }
  const copyText = ()=>{
    let ctext = document.getElementById("text");
    navigator.clipboard.writeText(ctext.value)
  }
  const [text, setText] = useState("");
  return (
    <div>
      <div className="mb-3">
  <label htmlFor="text"  className="form-label my-3">Enter your text to Analyze</label>
  <textarea className="form-control" value={text} onChange = {change} id="text" rows="7"></textarea>
  <div className="left">
  <button id='upper' onClick={upperCase}>Convert to UpperCase</button>
  <button id='lower' onClick={lowerCase}>Convert to LowerCase</button>
  <button id='remove' onClick={removeSpace}>Remove Extra Spaces</button>
  </div>
  <div className="right">
  <button id='pswd' onClick={pswdGen}>Password Generator</button>
  <button id='copy' onClick={copyText}>Copy the Text</button>
  <button id='rem' onClick={clear}>Clear Text</button>
  </div>
</div>
<h1 id="details">Text Details</h1>
<p><b>Characters count: </b> {text.length}</p>
<p><b>Word count: </b> {text.split(" ").length}</p>
<h2>Preview</h2>
<p>{text}</p>
    </div>
  )
}