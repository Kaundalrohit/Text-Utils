import React, { useRef, useState } from "react";
export default function Textsection(props) {
  const [text, setText] = useState("");
  const convertToupperCase = () => {
    console.log("Clicked");
    let html = text.toUpperCase();
    setText(html);
  };
  const convertTolowerCase = () => {
    console.log("Clicked");
    let html = text.toLowerCase();
    setText(html);
  };
  const clearText = () => {
    console.log("Clicked");
    let html = "";
    setText(html);
  };

  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setText("");
    alert("text-copied");
  }

  const myStyle = {
    color: props.mode === "light" ? "black" : "white",
  };

  return (
    <>
      <section>
        <div className="text-section mt-4">
          <div className="display-3 text-center" style={myStyle}>
            Enter Your Text Here
          </div>
        </div>
        <div className="my-3 container">
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label"
            ></label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="9"
              value={text}
              ref={textAreaRef}
              onChange={(e) => setText(e.target.value)}
              style={{
                backgroundColor: props.mode === "light" ? "#ebf2ef" : "white",
                color: props.mode === "light" ? "Black" : "cyan",
              }}
            ></textarea>
          </div>
        </div>
        <div className="buttons container d-flex">
          <button
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "danger" : "warning"
            } me-2`}
            disabled={text.replace(/\s/g, "").length === 0}
            onClick={convertToupperCase}
          >
            Convert_ToupperCase
          </button>
          <button
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "warning" : "danger"
            } me-2`}
            disabled={text.replace(/\s/g, "").length === 0}
            onClick={convertTolowerCase}
          >
            Convert_TolowerCase
          </button>
          <button
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "danger" : "warning"
            } me-2`}
            disabled={text.replace(/\s/g, "").length === 0}
            onClick={copyToClipboard}
          >
            Copy_Text
          </button>
          <button
            type="button"
            className={`btn btn-${
              props.mode === "light" ? "warning" : "danger"
            } me-2`}
            disabled={text.replace(/\s/g, "").length === 0}
            onClick={clearText}
          >
            Clear_Text
          </button>
        </div>
      </section>
      <div className="container">
        <div className="your-text-summery h3 mt-2" style={myStyle}>
          Your Text Summery
        </div>
        <div className="words-character mb-2" style={myStyle}>
          {
            text.split(" ").filter((e) => {
              return e.length !== 0;
            }).length
          }{" "}
          Words and {text.replace(/\s/g, "").length} Characters
        </div>
        <div className="time-to-read mb-2" style={myStyle}>
          {Number(0.008 * text.replace(/\s/g, "").length).toFixed(2)} Minutes To
          Read
        </div>
        <div className="text-preview-heading h3" style={myStyle}>
          Preview Text
        </div>
        <div className="preview-text" style={myStyle}>
          {text.replace(/\s/g, "").length
            ? text
            : "Please Enter Somthing In the TextBox"}
        </div>
      </div>
    </>
  );
}
