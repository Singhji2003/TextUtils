import React, {useState} from 'react'
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
function App() {
  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState("light")
  const toogleMode = ()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "#343a40"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
}
  const showAlert = (msg)=>{
    setAlert(msg)
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  return(
    <>
<Navbar title = "Text Utils" mode = {mode} toogleMode = {toogleMode}/>
<Alert alert = {alert}/>
<div className="container">
<Textarea showAlert = {showAlert} mode = {mode} />
</div>

</>
  );
}

export default App;
