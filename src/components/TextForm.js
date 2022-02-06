import React, { useState } from 'react';

const TextForm = ({ heading }) => {

    const [text, setText] = useState("");

    const handleOnClick = (e)=>{
        setText(e.target.value)
    }

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    // let str = "Hello ";

    // console.log(str.lastIndexOf(""))
    const numberOfWords = (text) =>{
        let number = 0;

        if(text === ""){
            number = 0;
        }else if(text.lastIndexOf(" ") === (text.length - 1)){
            number = text.split(" ").length - 1;
        }else{
            number = text.split(" ").length;
        }

        return number;
    }

    const backSpace = () =>{
        const newText = text.slice(0, text.length - 1)
        setText(newText);
    }


  return (
      <>
    <div className='container'>
        <h2>{heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" placeholder="Enter your text" value={text} onChange={handleOnClick} id="floatingTextarea" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={backSpace}>Backspace</button>
        <button className="btn btn-primary mx-1" onClick={() => setText("")}>Clear</button>
    </div>
    <div className="container">
        <h2>Text Summary</h2>
        <p>{numberOfWords(text)} words and {text.length} characters</p>
        <p>{0.008 * (numberOfWords(text))} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
};



export default TextForm;
