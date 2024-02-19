import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case!","success");
    }
    const handleLowClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case!","success");
    }
    const handleClearClick = ()=>{
        let newText=' ';
        setText(newText)
        props.showAlert("Texts Cleared!","success");
    }
    const handleCopyText = ()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to clipboard!","success");
    }
    const  handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
        
    }

    const [text,setText]=useState("Enter text here");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1 >{props.heading}</h1>
    <div className="mb-3">
    <textarea disabled={text.length===0} className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn.btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upper case</button>    
    <button disabled={text.length===0} className="btn.btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lower case</button> 
    <button disabled={text.length===0} className="btn.btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>       
    <button disabled={text.length===0} className="btn.btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>       

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0})} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!!"}</p>
    </div>
    </>
  )
}