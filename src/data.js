// 유형 사진
import ytPic from "./pic/yellotulip.jpg";
// 질문 사진
import qu1 from "./pic/qu1.png";
import qu2 from "./pic/qu2.jpg";

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

export const answer = [
  {},
  { a1: "일단 인사부터 건넨다!E", a2: "말을 걸까 고민하다, 고민만 한다...I" },
  {
    a1: "질문이나 주제를 꺼내며 대화를 시작한다.E",
    a2: "친구가 하는 말에 귀를 기울인다.I",
  },
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

export const imgList = ["", qu1, qu2];
