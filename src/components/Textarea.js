import React from 'react'
import './style.css'
export default function Textarea() {
  return (
    <div>
      <div class="mb-3">
  <label for="text" class="form-label my-3">Enter your text to Analyze</label>
  <textarea class="form-control" id="text" rows="3"></textarea>
  <button id='upper'>Convert to UpperCase</button>
  <button id='lower'>Convert to LowerCase</button>
  <button id='copy'>Copy the Text</button>
  <button id='remove'>Remove Extra Spaces</button>
  <button id='rem'>Remove all Word</button>
</div>
    </div>
  )
}
