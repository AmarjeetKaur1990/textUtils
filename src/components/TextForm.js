import React , { useRef, useState } from 'react'
import PropTypes from 'prop-types';


export default function TextForm(props) {
  const [text, setText] = useState('');
  const textBox = useRef(null);

  const handleClick = () =>{
      let newText = text.toUpperCase();
      setText(newText);
  }

  const handleLowerClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
}

  const handleChange = (event) =>{
        setText(event.target.value);
  }

  const handleClearText = () =>{
    setText('');     
  }

 const handleCopy =() =>{
    let val = textBox.current.value;
    navigator.clipboard.writeText(val);

 }

 const handleExtraSpaces = () =>{
     let newText = text.split(/[  ]+/)
     newText = newText.join(" ");
     setText(newText);
 }

  return (
      <>
        <div className="container mt-3 mb-3">
            <h2>{props.heading}</h2>
            <label htmlFor="myBox" className="form-label">Example Textarea</label>
            <textarea style={{backgroundColor: props.mode === 'dark' ? 'grey' : '' , color: props.mode === 'dark' ? 'white' : ''}} ref={textBox} className="form-control mb-3" onChange={handleChange} id="myBox" value={text} rows="8"></textarea>
            <button className="btn btn-primary mb-3" onClick={handleClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mb-3 mx-3" onClick={handleLowerClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mb-3 mx-3" onClick={handleClearText}>Clear</button>
            <button className="btn btn-primary mb-3 mx-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mb-3 mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-4">
            <h2>Your Text Summary</h2>
            <p>{text.trim().split(" ").length} words and {text.trim().length} characters</p>
            <p>{0.008 * (text.trim().split(" ").length)} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : 'Enter something in textbox above to preview it here'}</p>
        </div>
      </>

  )
}

TextForm.propTypes={
    heading: PropTypes.string
}
