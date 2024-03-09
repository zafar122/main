"use client";

import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-markup.min";
import "prismjs/components/prism-cshtml.min";
import "prismjs/components/prism-css.min";
import "prismjs/components/prism-javascript.min";
// style
import btnStyle from "../btncss/btnCss.module.css";
// icons
import { BsClipboard2 } from "react-icons/bs";
import { BsClipboard2Check } from "react-icons/bs";

function CopyHtmlBtn({ code }) {
  useEffect(() => {
    // Highlight all code blocks
    Prism.highlightAll();
  }, []);

  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 4000); // Reset copied state after 4 seconds
  };

  // Define button styles as an object
  const buttonStyle = {
    width: "95px",
    height: "55px",
    border: "2px solid #fcfcfc",
    borderRadius: "20px",
    fontSize: "25px",
    marginLeft: "83%",
  };

  return (
    <>
      <div className={btnStyle.divCodeFist}>
        <pre>
          <button
            style={buttonStyle} // Apply button styles directly here
            onClick={copyCode}
            className={copied ? "copied" : ""}
          >
            {copied ? <BsClipboard2Check/> : <BsClipboard2/>}
          </button>
          <code className="language-html">{code}</code>
        </pre>
      </div>
    </>
  );
}

export default CopyHtmlBtn;
