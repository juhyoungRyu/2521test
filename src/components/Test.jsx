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
    { a1: "1-1 답변E", a2: "1-2 답변I" },
    { a1: "2-1 답변E", a2: "2-2 답변I" },
    { a1: "3-1 답변E", a2: "3-2 답변I" },
    { a1: "4-1 답변T", a2: "4-2 답변F" },
    { a1: "5-1 답변T", a2: "5-2 답변F" },
    { a1: "6-1 답변T", a2: "6-2 답변F" },
    { a1: "7-1 답변N", a2: "7-2 답변S" },
    { a1: "8-1 답변N", a2: "8-2 답변S" },
    { a1: "9-1 답변N", a2: "9-2 답변S" },
    { a1: "10-1 답변P", a2: "10-2 답변J" },
    { a1: "11-1 답변P", a2: "11-2 답변J" },
    { a1: "12-1 답변P", a2: "12-2 답변J" },
  ];

  const judge = (c) => {
    if (c === 13) {
      return console.log(userAnswer);
    }

    setBtnValue1(answer[c].a1.slice(0, answer[c].a1.length - 1));
    setBtnValue2(answer[c].a2.slice(0, answer[c].a2.length - 1));
  };

  const answerSave = (char) => {
    let answerTemp = [...userAnswer];
    answerTemp.push(char);
    setUserAnswer(answerTemp);

    let countTemp = questionCount;
    setQuestionCount(countTemp + 1);
  };

  return (
    <div className="all">
      {testing ? (
        <div className="result">
          <p
            onClick={() => {
              let a = "hello";
              console.log(a.slice(a.length - 1));
            }}
          >
            결과가 나오겠죠?
          </p>
          {userAnswer.map((ans) => (
            <p>{ans}</p>
          ))}
        </div>
      ) : (
        <div className="Test">
          <section className="qu">
            <p className="question" onClick={() => console.log(questionCount)}>
              {question[questionCount]}
            </p>
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
                if (questionCount === 12) {
                  answerSave(
                    answer[questionCount].a1.slice(
                      answer[questionCount].a1.length - 1
                    )
                  );
                  return setTesting(true);
                }
                return answerSave(
                  answer[questionCount].a1.slice(
                    answer[questionCount].a1.length - 1
                  )
                );
              }}
            >
              {btnValue1}
            </div>
            <div
              className="btn"
              onClick={() => {
                if (questionCount === 12) {
                  answerSave(
                    answer[questionCount].a2.slice(
                      answer[questionCount].a2.length - 1
                    )
                  );
                  return setTesting(true);
                }
                return answerSave(
                  answer[questionCount].a2.slice(
                    answer[questionCount].a2.length - 1
                  )
                );
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
