import { useState } from "react";
import TextChanger from "./components/TextChanger";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
function App() {
const [mode, setMode] = useState('light');
const [msg, setMsg] = useState(null);
const toogleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#212529';
    
    showMsg("Dark Mode Enabled!!", "success")

  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showMsg("Light Mode Enabled!!", "success")
  }
}
const showMsg = (msg, mode)=>{
  setMsg({
    msg: msg,
    mode:mode
  })
  setTimeout(() => {
    setMsg(null);
  }, 4000);
}
  return (
   <div>
<Navbar title = "Text Utils" mode = {mode} toogleMode = {toogleMode}/>
  <Alert alert = {msg}/>
<div className="container">
  <TextChanger mode = {mode}/>
</div>
</div>
   
  );
}

export default App;
