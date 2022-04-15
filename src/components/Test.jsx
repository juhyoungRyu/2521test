import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./Test.css";
import { question, answer, imgList } from "../data.js";

const Test = () => {
  const [questionCount, setQuestionCount] = useState(1);
  const [btnValue1, setBtnValue1] = useState("");
  const [btnValue2, setBtnValue2] = useState("");
  const [userAnswer, setUserAnswer] = useState([""]);
  const [userMbti, setUserMbti] = useState([""]);
  const [testing, setTesting] = useState(false);

  useEffect(() => {
    return judge(questionCount);
  }, [questionCount]);

  const judge = (c) => {
    if (c === 13) {
      return setUserMbti(mbti());
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

  const mbti = () => {
    const judge = (char, i, j) => {
      let cnt = 0;
      for (i; i < j; i++) {
        if (userAnswer[i] === char) {
          cnt++;
        }
      }
      return cnt;
    };

    let result = [];

    if (judge("E", 1, 4) >= 2) {
      result.push("E");
    } else {
      result.push("I");
    }

    if (judge("N", 7, 10) >= 2) {
      result.push("N");
    } else {
      result.push("S");
    }

    if (judge("T", 4, 7) >= 2) {
      result.push("T");
    } else {
      result.push("F");
    }

    if (judge("P", 10, 13) >= 2) {
      result.push("P");
    } else {
      result.push("J");
    }

    return result;
  };

  return (
    <div className="all">
      {testing ? (
        <Loading mbti={userMbti} />
      ) : (
        <div className="Test">
          <section className="qu">
            <p className="question" onClick={() => console.log(questionCount)}>
              {question[questionCount]}
            </p>
            <p className="questionCount">
              {questionCount}/{question.length - 1}
            </p>
            <div className="imgCon">
              <img className="quImg" alt="" src={imgList[questionCount]} />
            </div>
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
