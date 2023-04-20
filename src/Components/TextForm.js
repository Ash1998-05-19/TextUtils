import React, { useState } from "react";

export default function TextForm(props) {
  const upCaseClick = () => {
    // console.log("Upper case was clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Your text has been converted to uppercase", "success")
  };
  const lowCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Your text has been converted to lowercase", "success")
  };
  const clearTextClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Your text has been cleared", "success")
  };
  const copyTextClick = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges()
    props.showAlert("Your text has been copied to clipboard", "success")
  };
  const clearExtraSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed from your text", "success")
  };
  const handleOnChange = (event) => {
    // console.log("handleOnChange was clicked")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={upCaseClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={lowCaseClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={clearTextClick}>
          Clear Text
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={copyTextClick}>
          Copy to Clipboard
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={clearExtraSpaceClick}>
          Clear Extra Space
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          Your text contains {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length}{" "}
          Characters
        </p>
        <p>
          Your can read your text in {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
