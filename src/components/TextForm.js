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


  return (
    <div>
        <h1>{heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" placeholder="Enter your text" value={text} onChange={handleOnClick} id="floatingTextarea" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
    </div>
  );
};

export default TextForm;
