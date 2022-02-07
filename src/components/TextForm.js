import React, { useState } from 'react';

const TextForm = ({ heading, mode, showAlert, capitalize }) => {

    const [text, setText] = useState("");

    const handleOnClick = (e) => {
        setText(e.target.value);
    }

    const handleUpClick = () => {
        if (text === "") {
            showAlert('Enter some text first', 'warning');
        } else {
            let newText = text.toUpperCase();
            setText(newText);
        }
        // showAlert('')
    }

    const handleLoClick = () => {
        if (text === "") {
            showAlert('Enter some text first', 'warning');
        } else {
            let newText = text.toLowerCase();
            setText(newText);
        }
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');

        if (text.value === "") {
            showAlert('Enter some text first', 'warning');
        } else {
            text.select();
            navigator.clipboard.writeText(text.value);
            showAlert('Text Copied', 'success');
        }

    }

    const handleExtraSpaces = () => {
        if (text === "") {
            showAlert('Enter some text first', 'warning');
        } else {
            const newText = text.split(/[ ]+/)
            setText(newText.join(" "))
        }
    }

    const handleCapitalize = () => {
        if (text === "") {
            showAlert('Enter some text first', 'warning')
        } else {
            const newText = text.split('. ');
            console.log(newText[1])
            let newString = "";
            newText.forEach(sent => {
                newString += `${capitalize(sent)}. `
            })
            console.log(capitalize("success"))
            setText(newString);
            console.log();
        }
    }

    const backSpace = () => {
        if (text === "") {
            showAlert('Enter some text first', 'warning');
        } else {
            const newText = text.slice(0, text.length - 1)
            setText(newText);
        }
    }

    const numberOfWords = (text) => {
        let number = text.split(" ").filter(e => e.length !== 0).length;

        // if (text === "") {
        //     number = 0;
        // } else if (text.lastIndexOf(" ") === (text.length - 1)) {
        //     number = text.split(" ").length - 1;
        // } else {
        //     number = text.split(" ").length;
        // }

        return number;
    }

    const numberOfCharacter = (text) => {
        let words = text.split(" ").filter(e => e.length !== 0);
        return words.join('').length;
    }



    const textStyle = {
        backgroundColor: `${mode === 'light' ? 'white' : '#00172b'}`, color: `${mode === 'light' ? 'black' : 'white'}`,
    }


    return (
        <>
            <div className='container' style={{ color: `${mode === 'light' ? 'black' : 'white'}` }}>
                <h2>{heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" style={textStyle} placeholder="Enter your text" value={text} onChange={handleOnClick} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>Capitalize(Its not perfect)</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>E</button>
                <button className="btn btn-primary mx-1 my-1" onClick={backSpace}>Backspace</button>
                <button className="btn btn-primary mx-1 my-1" onClick={() => setText("")}>Clear</button>
            </div>
            <div className="container" style={{ color: `${mode === 'light' ? 'black' : 'white'}` }}>
                <h2>Text Summary</h2>
                <p>{numberOfWords(text)} words and {numberOfCharacter(text)} characters</p>
                <p>{0.008 * (numberOfWords(text))} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter your text above for preview"}</p>
            </div>
        </>
    );
};



export default TextForm;
