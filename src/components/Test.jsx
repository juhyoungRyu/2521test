import React, { useState, useEffect } from "react";
import "./Test.css";

const Test = () => {
  const [questionCount, setQuestionCount] = useState(1);
  const [btnValue1, setBtnValue1] = useState("");
  const [btnValue2, setBtnValue2] = useState("");
  const [userAnswer, setUserAnswer] = useState([""]);
  const [testing, setTesting] = useState(false);

  useEffect(() => {
    return judge(questionCount);
  }, [questionCount]);

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
    "열 한 번째 질문입니다",
    "열 두 번째 질문입니다",
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
    { a1: "11-1 답변", a2: "11-2 답변" },
    { a1: "12-1 답변", a2: "12-2 답변" },
  ];

  const judge = (c) => {
    if (c === 13) {
      return console.log(userAnswer);
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

  const eiJudge = (c, i) => {
    if (c === answer[i].a1) {
      console.log("e");
    } else {
      console.log("i");
    }
  };
  const snJudge = (c, i) => {
    if (c === answer[i]) {
      console.log("s");
    } else {
      console.log("n");
    }
  };
  const tfJudge = (c, i) => {
    if (c === answer[i]) {
      console.log("t");
    } else {
      console.log("f");
    }
  };
  const pjJudge = (c, i) => {
    if (c === answer[i]) {
      console.log("p");
    } else {
      console.log("j");
    }
  };

  const mbti = (mbti) => {
    for (let i = 1; i < 13; i++) {
      if (i < 4) {
        eiJudge(mbti[i], i);
      } else if (i < 7) {
        snJudge(mbti[i], i);
      } else if (i < 10) {
        tfJudge(mbti[i], i);
      } else {
        pjJudge(mbti[i], i);
      }
    }
  };

  return (
    <div className="all">
      {testing ? (
        <div className="result">
          <p onClick={() => mbti(userAnswer)}>결과가 나오겠죠?</p>
          {userAnswer.map((ans) => (
            <p key={ans}>{ans}</p>
          ))}
        </div>
      ) : (
        <div className="Test">
          <section className="qu">
            <p className="question">{question[questionCount]}</p>
            <p className="questionCount">
              {questionCount}/{question.length - 1}
            </p>
            <div className="imgCon">움짤이 들어올 자리입니다</div>
          </section>
          <section className="an">
            <div
              className="btn"
              id="firstBox"
              onClick={() => {
                if (btnValue1 === answer[12].a1) {
                  answerSave(btnValue1);
                  return setTesting(true);
                }
                return answerSave(btnValue1);
              }}
            >
              {btnValue1}
            </div>
            <div
              className="btn"
              onClick={() => {
                if (btnValue2 === answer[12].a2) {
                  answerSave(btnValue2);
                  return setTesting(true);
                }
                return answerSave(btnValue2);
              }}
            >
              {btnValue2}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Test;
