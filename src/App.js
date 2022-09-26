import { useState } from "react";
import TextChanger from "./components/TextChanger";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
function App() {
const [mode, setMode] = useState('light');
const [msg, setMsg] = useState('Now it happens');
const toogleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#212529';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
}
  return (
   <div>
<Navbar title = "Text Utils" mode = {mode} toogleMode = {toogleMode}/>
<div className="container">
  <Alert alert = {msg}/>
  <TextChanger mode = {mode}/>
</div>
</div>
   
  );
}

export default App;
