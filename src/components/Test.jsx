import React, { useState, useEffect } from "react";
import "./Test.css";

const Test = () => {
  const [questionCount, setQuestionCount] = useState(1);
  const [btnValue1, setBtnValue1] = useState("");
  const [btnValue2, setBtnValue2] = useState("");
  const [userAnswer, setUserAnswer] = useState([""]);

  useEffect(() => {
    return judge(questionCount);
  }, [questionCount]);

  useEffect(() => {
    if (userAnswer.length === 11) {
      return console.log("완료");
    }

    return console.log(userAnswer, userAnswer.length - 1);
  }, [userAnswer]);

  const question = [
    "",
    "첫 번째 질문입니다",
    "두 번째 질문입니다",
    "세 번째 질문입니다",
    "네 번째 질문입니다",
    "다섯 번째 질문입니다",
    "여섯 번째 질문입니다",
    "일곱 번째 질문입니다",
    "여덜 번째 질문입니다",
    "아홉 번째 질문입니다",
    "열 번째 질문입니다",
  ];

  const answer = [
    {},
    { a1: "1-1 답변", a2: "1-2 답변" },
    { a1: "2-1 답변", a2: "2-2 답변" },
    { a1: "3-1 답변", a2: "3-2 답변" },
    { a1: "4-1 답변", a2: "4-2 답변" },
    { a1: "5-1 답변", a2: "5-2 답변" },
    { a1: "6-1 답변", a2: "6-2 답변" },
    { a1: "7-1 답변", a2: "7-2 답변" },
    { a1: "8-1 답변", a2: "8-2 답변" },
    { a1: "9-1 답변", a2: "9-2 답변" },
    { a1: "10-1 답변", a2: "10-2 답변" },
  ];

  const judge = (c) => {
    if (c == 11) {
      console.log(userAnswer);
    }

    setBtnValue1(answer[c].a1);
    setBtnValue2(answer[c].a2);
  };

  const answerSave = (char) => {
    let answerTemp = [...userAnswer];
    answerTemp.push(char);
    setUserAnswer(answerTemp);

    let countTemp = questionCount;
    setQuestionCount(countTemp + 1);
  };

  return (
    <div className="Test">
      <section className="qu">
        <p className="question">{question[questionCount]}</p>
        <p className="questionCount">{questionCount}/10</p>
        <div className="imgCon">움짤이 들어올 자리입니다</div>
      </section>
      <section className="an">
        <div
          className="btn"
          id="firstBox"
          onClick={() => {
            answerSave(btnValue1);
          }}
        >
          {btnValue1}
        </div>
        <div className="btn" onClick={() => answerSave(btnValue2)}>
          {btnValue2}
        </div>
      </section>
    </div>
  );
};

export default Test;
