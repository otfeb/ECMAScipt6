let irum="윤호석";
let birth=1997;
let likefood="삼겹살";

let curYear=new Date().getFullYear();   //숫자 4자리 반환

//예전방식
let result="이름: "+irum+"\n태어난 연도: "+birth+"\n나이: "+(curYear-birth)+"\n좋아하는음식: "+likefood;

//console.log(result);

//리터럴(백틱 `)..중간변수 ${변수명}
let result2=`이름: ${irum}
태어난 연도: ${birth}
나이: ${curYear-birth}
최애음식: ${likefood}`;

console.log(result2);