import { useState } from "react";
import TextChanger from "./components/TextChanger";
import Navbar from "./components/Navbar";
function App() {
const [mode, setMode] = useState('light');
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
  <TextChanger mode = {mode}/>
</div>
</div>
   
  );
}

export default App;
