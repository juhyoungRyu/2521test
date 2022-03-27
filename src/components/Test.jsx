import React, { useState, useEffect } from "react";
import "./Test.css";

const Test = () => {
  const [questionCount, setQuestionCount] = useState(1);
  const [btnValue1, setBtnValue1] = useState("");
  const [btnValue2, setBtnValue2] = useState("");

  useEffect(() => {
    return judge(questionCount);
  }, [questionCount]);

  const question = [
    "첫 번째 질문입니다",
    "두 번째 질문입니다",
    "세 번째 질문입니다",
  ];

  const answer = [
    { a1: "1-1 답변", a2: "1-2 답변" },
    { a1: "2-1 답변", a2: "2-2 답변" },
    { a1: "3-1 답변", a2: "3-2 답변" },
  ];

  const judge = (c) => {
    setBtnValue1(answer[c - 1].a1);
    setBtnValue2(answer[c - 1].a2);
  };

  return (
    <div className="Test">
      <section className="qu">
        <p className="question">{question[questionCount - 1]}</p>
        <p className="questionCount">{questionCount}/10</p>
      </section>
      <section className="an">
        <div className="btn" id="firstBox">
          {btnValue1}
        </div>
        <div className="btn">{btnValue2}</div>
      </section>
    </div>
  );
};

export default Test;
