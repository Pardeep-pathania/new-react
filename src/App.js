
//import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },2000); 
  }
  const toggleMode = () =>{
    if(mode ==="light"){
      setMode("dark");
      document.body.style.backgroundColor= "#042743";
      showAlert("Dark mode has been enabled","success")

    }
    else{
      setMode('light');
       document.body.style.backgroundColor= "white";
       showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
   <Alert alert={alert}/>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    {/* <Navbar/> */}
    <Router>
      <Navbar title ="Textutils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element ={<About />}> 
          </Route>
          <Route exact path="/" element ={<TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>}>
          </Route>
        </Routes> 
    </div>
    </Router>

</>
  );
}
export default App;