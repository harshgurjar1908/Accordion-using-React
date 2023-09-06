import React, { useState } from "react";
function Accordion(props) {
  const [show, setshow] = useState(false);
  const { question, ans } = props;
  return (
    <>
      <div className="main">
        <span className="icon" onClick={() => setshow(!show)}>
          {show ? "➖" : "➕"}
        </span>
        <h3 className="question">{question}</h3>
      </div>
      {show && (
        <div className="answer">
          {" "}
          <p>{ans}</p>
        </div>
      )}
    </>
  );
}

export default Accordion;
