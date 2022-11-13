import React, {useState} from 'react'
import './style.css'
export default function Textarea() {
  const {text, setText} = useState("Enter the text here")
  return (
    <div>
      <div className="mb-3">
  <label htmlFor="text" className="form-label my-3">Enter your text to Analyze</label>
  <textarea className="form-control" value={text} id="text" rows="7"></textarea>
  <div className="left">
  <button id='upper'>Convert to UpperCase</button>
  <button id='lower'>Convert to LowerCase</button>
  <button id='remove'>Remove Extra Spaces</button>
  </div>
  <div className="right">
  <button id='pswd'>Password Generator</button>
  <button id='copy'>Copy the Text</button>
  <button id='rem'>Clear Text</button>
  </div>
</div>
    </div>
  )
}
