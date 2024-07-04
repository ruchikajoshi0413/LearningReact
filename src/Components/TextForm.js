import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpSubmit = ()=>{
        // console.log("It's clicked: " + text)
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoSubmit=()=>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
        // console.log("Text is in lower case");
    }
    const handleClearSubmit=()=>{
        let clear = '';
        setText(clear);
    }

    const handleCupSubmit=()=>{
        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        // console.log("IN onChange function")
        setText(event.target.value);
    }

    const handleCopy=()=>{
        let newText = document.getElementById("myBox")
        newText.select();
        navigator.clipboard.writeText(newText.value);     
    }

    const handleRemove=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
    } 

    const[text, setText] = useState(" ");
    // setText("Ruchika");

  return (
    <>
    <div className='container' style={{backgroundColor: props.mode==='dark'?'gray':'white'}}>
        {/* <h2>{props.heading}</h2> */}
        <div className="mb-3">
            <textarea className="form-control my-1" value={text} style={{backgroundColor: props.mode==='dark'?'gray':'white'}} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={handleUpSubmit}>To uppercase</button>
        <button className="btn btn-success mx-1" onClick={handleLoSubmit}>To lowercase</button>
        <button className="btn btn-success mx-1" onClick={handleClearSubmit}>Clear text</button>
        <button className="btn btn-success mx-1" onClick={handleCupSubmit}>Capitalized text</button>
        <button className="btn btn-success mx-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-success mx-1" onClick={handleRemove}>Remove extra spaces</button>
    </div>
    <div className="container my-3">
        <p>Length of text:{text.length} and No. of words:{text.split(" ").length}</p>
        <p>User will able to read it in {0.008*text.split(" ").length} minutes</p>
    </div>
    <h2>Preview</h2>
    <p>{text}</p>
    </>
  )
} 
