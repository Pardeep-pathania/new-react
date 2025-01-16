import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }  

    const handleLoClick =()=>{
        //console.log("Lowercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }  
    const handleClearClick =()=>{
        let newText = ("");
        setText(newText);
        props.showAlert("Text cleared","success")
    }  

    const handleOnChange =(event)=>{
        //console.log("On change");
        setText(event.target.value);
    } 

    const handleCopy = () => {
      //console.log("Text Copy")
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      props.showAlert("Text copied to clipboard","success")
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra space has been removed","success")
    }

    const [text, setText] = useState("");

  return (
    <>
     <div className="container" style={{color:props.mode=== 'dark'?'white':'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== 'dark'?'#3974e1':'white',color:props.mode=== 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleLoClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleCopy}>Copy text</button>
<button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleExtraSpaces}>Remove Extra Space</button>
</div>

    <div className="container my-3"style={{color:props.mode=== 'dark'?'white':'black'}} >
        <h2>Your Text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>

    </div>
    </>
    
  ) 
  
}