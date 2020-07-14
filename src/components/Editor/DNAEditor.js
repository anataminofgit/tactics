import React from "react";
import PropTypes from "prop-types";
//import { useEffect } from "react";
import Tooltip from "@material-ui/core/Tooltip";

import "./DNAEditor.css";

const input = {
  text:
    "tcgggggctccgtacggggcgtggcgcggggctcgccgtgccgggcggggggtggcggcaggtgggggtgccgggcggggcggggccgcctcgggccggggagggctcgggggaggggcgcggcggcccccggagcgccggcggctgtcgaggcgcggcgagccgcagccattgccttttatggtaatcgtgcgagagggcgcagggacttcctttgtcccaaatctgtgcggagccgaaatctgggaggcgccgccgcaccccctctagcgggcgcggggcgaagggtgcggcgccggcaggaaggaaatgggcggggagggccttcgtgcgtcgccgcgccgccgtccccttctccctctccagcctcggggctgtccgcggggggacggctgccttcgggggggacggggcagggcggggttcggcttctggcgtgtgaccggcggctctagagcctctgctaaccatgttcatgccttcttctttttcctacagctcctgggcaacgtgctggttattgtgctgtctcatcattttggcaaagaattcgcccttgtcgacaccatgtctgacgaggggccaggtacaggacctggaaatggcctaggagagaagggagacacatctggcagaaggctccggcggcagtggacctcaaagaagagggggtgataaccatggacgaggacggggaagaggacgaggacgaggaggcggaagaccaggagccccgggcggctcaggatcagggccaagacatagagatg",
  annotations: [
    { index: 1, length: 20, tooltip: "Annotation 1" },
    { index: 33, length: 20, tooltip: "Annotation 2" },
    { index: 130, length: 20, tooltip: "Annotation 3" },
    { index: 700, length: 20, tooltip: "Annotation 4" },
    { index: 730, length: 20, tooltip: "Annotation 5" },
    { index: 4000, length: 20, tooltip: "Annotation 6" },
    { index: 28000, length: 20, tooltip: "Annotation 7" },
    { index: 28100, length: 20, tooltip: "Annotation 8" },
    { index: 34000, length: 20, tooltip: "Annotation 9" },
    { index: 34010, length: 20, tooltip: "Annotation 10" }
  ]
};

export default function DNAEditor() {
  //const { validation } = props;
  //constt  [textEditor, setTextEdior] = useState([]);
  const colRef = React.useRef(null);
  const txt = input.text;

  console.log("DNAEditor", colRef.current);

  const renderEditor = () => {
    let annotations = input.annotations;
    let str = [];

    console.log(str);
    return annotations.map((item, i) => {
      const { index, length, tooltip } = item;
      let start =
        i === 0 ? 0 : annotations[i - 1].index + annotations[i - 1].length + 1;
      return (
        <div key={i}>
          {txt.slice(start, index)}
          <Tooltip title={tooltip} placement="top-start">
            <span key={index} className="statement">
              {txt.slice(index, index + length)}
            </span>
          </Tooltip>
        </div>
      );
    });
  };

  const renderCol = () => {
    let num = 0;
    let el = colRef.current;

    if (el) {
      console.log("el", colRef.current);
      let divWidth = colRef.current.offsetWidth;
      let line = divWidth / 12;
      num = Math.trunc(txt.length / line);

      // console.log("divWidth", divWidth, "line", line, "num", num,  txt.length);

      return Array(num)
        .fill()
        .map((_, i) => {
          return <div key={"num" + i}>{i}</div>;
        });
    }
    return null;
  };

  return (
    <div className="editor">
      <div className="col1">{renderCol()} </div>
      <div ref={colRef} className="col2">
        {renderEditor()}
      </div>
    </div>
  );
}

DNAEditor.propTypes = {
  validation: PropTypes.string
};
