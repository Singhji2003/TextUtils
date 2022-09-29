import React, {useState} from 'react'
export default function TextChanger(props) {
    const [text, setText] = useState("");
    const [copy, setCopy] = useState("Copy Text");
   const upperCase=()=>{
    let newText = text.toUpperCase();
    setText(newText);
    setCopy('Copy Text');
    props.showMsg("Coverted to Upper Case!!", "success")
   }
   const lowerCase=()=>{
    let newText = text.toLowerCase();
    setText(newText);
    setCopy('Copy Text')
    props.showMsg("Coverted to Lower Case!!", "success")

   }
  const copyText=()=>{
    var text = document.getElementById('exampleFormControlTextarea1');
    navigator.clipboard.writeText(text.value);
    setCopy('Copied!');
    props.showMsg("Text Copied!!", "success")


  }
   const handler=(event)=>{
    setText(event.target.value);
    setCopy('Copy Text')

   }
   const clearText =() =>{
    var text = '';
    setText(text);
    props.showMsg("Text Cleared!!", "success")
   }
   const removeSpace = ()=>{
    var newString = text.replace(/\s{2,}/g, ' ').trim();
    setText(newString);
    props.showMsg("Removed ExtraSpaces!!", "success")
   }
   
  return (
    <div>
        <h2 className={`text-${props.mode==='light' ? "black" :'light'}`}>Enter the text here</h2>
      <div className="mb-3">
  <textarea className={`form-control text-${props.mode==='light' ? 'black' :'light'}` } value={text} style = {{backgroundColor: props.mode==='light' ? "white" :'#212529' }} onChange={handler} id="exampleFormControlTextarea1" rows="5"></textarea>
  <button disabled = {text.length===0} type="button" onClick={upperCase} className="btn btn-info my-2">Convert to Upper Case</button>
  <button disabled = {text.length===0} type="button" onClick={lowerCase} className="btn btn-info mx-3 my-2">Convert to Lower Case</button>
  <button disabled = {text.length===0} type="button" onClick={clearText} className="btn btn-info mx-3 my-2">Clear Text</button>
  <button disabled = {text.length===0} type="button" onClick={removeSpace} className="btn btn-info mx-3 my-2">Remove Extra Spaces</button>
  <button disabled = {text.length===0} type="button" onClick={copyText} className="btn btn-info mx-3 my-2">{copy}</button>
 
</div>
    <h2 className={`text-${props.mode==='light' ? "black" :'light'}`} >Details about words</h2>
    <p className = {`text-${props.mode==='light' ? 'black' :'light'}`}>Words Count: {text.split(" ").filter((element)=>{return element.length!==0}).length} </p>
    <p className = {`text-${props.mode==='light' ? 'black' :'light'}`}>Characters Count:{text.length} </p>
    <h2 className = {`text-${props.mode==='light' ? 'black' :'light'}`}>Preview</h2>
    <p className = {`text-${props.mode==='light' ? 'black' :'light'}`}>{text.length>0? text: "Enter something to preview"}</p>
    </div> 
  )
}
