import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';

function App() {
  const[mode, setMode]=useState('light');

  const toggleMode=()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background='gray'
    } else {
      setMode('light');
      document.body.style.background='white'
    }
  }
    return (
        <>
            <Navbar title="Learning" aboutText="About learning" mode={mode} toggleMode={toggleMode} />
            <div className="container my-3">
                <TextForm heading="Enter the text" mode={mode} />
            {/* <About></About> */}
            </div>  
        </>
    );
}

export default App;
