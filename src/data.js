// 유형 사진
import ytPic from "./pic/yellotulip.jpg";
// 질문 사진
import qu1 from "./pic/qu1.png";
import qu2 from "./pic/qu2.jpg";
import qu3 from "./pic/qu3.jpg";
import qu4 from "./pic/qu4.jpg";
import qu5 from "./pic/qu5.jpg";
import qu6 from "./pic/qu6.jpg";
import qu7 from "./pic/qu7.jpg";
import qu8 from "./pic/qu8.jpg";

function TypeMake(name, img, explain) {
  this.name = name;
  this.img = <img className="typeImg" src={img.img} alt={img.imgEx} />;
  this.explain = [...explain];
}

export const yelloTulip = new TypeMake(
  "외유내강 노랑튤립",
  { img: ytPic, imgEx: "고유림" },
  ["대충 이런 설명1", "대충 이런 설명2", "대충 이런 설명3", "대충 이런 설명4"]
);

// TypeMake 생성자 함수 결과물
// yelloTulip = {
//   name: "외유내강 노랑튤립",
//   img: "",
//   explain: [
//     "대충 이런 설명1",
//     "대충 이런 설명2",
//     "대충 이런 설명3",
//     "대충 이런 설명4",
//   ],
// };

export const question = [
  "",
  "친해지고 싶은 사람이 있을 때, 나는?",
  "친구와 단둘이 있을 때, 나는?",
  "같은 반에 전학을 온 친구가 있다, 나는?",
  "누군가 나를 싫어하는 걸 알았을 때, 나는?",
  "?? : 그 친구가 잘못했다고 한마디만 해줘...",
  "다음 장면을 보고 나는",
  "처음으로 펜싱 칼을 들어보았다",
  "여덜 번째 질문입니다",
  "아홉 번째 질문입니다",
  "열 번째 질문입니다",
  "열 한 번째 질문입니다",
  "열 두 번째 질문입니다",
];

export const answer = [
  {},
  {
    a1: "일단 인사부터 건넨다!E",
    a2: "말을 걸까 고민하다가 고민만 한다...I",
  },
  {
    a1: "질문이나 주제를 꺼내며 대화를 시작한다.E",
    a2: "친구가 하는 말에 귀를 기울인다.I",
  },
  {
    a1: "우리 학교 소개해줄까? 말을 건다.E",
    a2: "어떤 친구인지 멀리서 관찰한다.I",
  },
  {
    a1: "왜? 이유가 뭐야? (진짜 궁금함)T",
    a2: "나를 왜 싫어하지..? ㅠㅠ (상처)F",
  },
  {
    a1: "상황을 알려줘야 판단하지..T",
    a2: "무조건 그 친구가 잘못했네!!F",
  },
  {
    a1: "'기분이 좋아지는구나' 라고 생각했다.T",
    a2: "같이 기분이 좋아졌다!F",
  },
  {
    a1: "안무겁나? 찔리면 얼마나 아플까? 🤔🤔N",
    a2: "무겁네S",
  },
  {
    a1: "8-1 답변N",
    a2: "8-2 답변S",
  },
  {
    a1: "9-1 답변N",
    a2: "9-2 답변S",
  },
  {
    a1: "10-1 답변P",
    a2: "10-2 답변J",
  },
  {
    a1: "11-1 답변P",
    a2: "11-2 답변J",
  },
  {
    a1: "12-1 답변P",
    a2: "12-2 답변J",
  },
];

export const imgList = ["", qu1, qu2, qu3, qu4, qu5, qu6, qu7, qu8];
