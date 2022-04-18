import React, { useEffect } from "react";
import "./Result.css";
import { yelloTulip } from "../data.js";

const Result = (props) => {
  useEffect(() => {
    if (props.mbti) {
      console.log(props.mbti);
    }
  }, []);

  let type = [];

  const goYelloTulip = () => {
    type = yelloTulip;
  };
  const go8tTruck = () => {};
  const goRedSporty = () => {};

  return (
    <div className="Result">
      <section className="rsTop">
        {/* 로고 넣을 위치 */}
        <p className="title">스물다섯 스물하나</p>
        <p className="sub">인물 유형 테스트</p>
      </section>
      <section className="rsMid">
        <p className="typeTitle">당신의 유형은...</p>
        {/* 유형 이름 */}
        <p className="typeName">{type.name}</p>
        {/* 일러스트 */}
        <div className="imgCon1">{type.img}</div>
        {/* 유형 특징 */}
        <div className="explainCon">
          {type.explain.map((ex, key) => (
            <p key={key} className="ex">
              ⚬ {ex}
            </p>
          ))}
        </div>
      </section>
      <section className="rsBot">
        <div className="rsBtnCon">
          {/* 재검사 버튼 */}
          <div className="reBtn" onClick={() => window.location.reload()}>
            다시 해보기
          </div>
          w{/* sns btn */}
          <div className="snsBtn">
            <p
              className="githubBtn"
              onClick={() =>
                window.open("https://github.com/juhyoungRyu/2521test")
              }
            >
              소스코드가 궁금하다면?
            </p>
            <p
              className="instaBtn"
              onClick={() => window.open("https://www.instagram.com/jo.oh_/")}
            >
              개발자가 누군지 궁금하다면?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Result;

// 일러스트 ( 극중 역할 사진 )
// 유형 이름 - 극중 역할 이름
// 특징 나열
// 잘 맞는 유형 / 안 맞는 유형
// 재검사 버튼
// 개발자 인스타 & 깃허브
