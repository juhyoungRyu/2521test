import ytPic from "./pic/yellotulip.jpg";

function TypeMake(name, img, explain) {
  this.name = name;
  this.img = <img className="typeImg" src={img.img} alt={img.imgEx} />;
  this.explain = [...explain];
}

export const yelloTulip = new TypeMake(
  "외유내강 노랑튤립",
  { img: ytPic, imgEx: "고유림" }[
    ("대충 이런 설명1", "대충 이런 설명2", "대충 이런 설명3", "대충 이런 설명4")
  ]
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
