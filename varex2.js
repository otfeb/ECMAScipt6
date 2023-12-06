/*
var : 함수형 변수 (업데이트 O , 재선언 O)
let : 영역형 변수 (업데이트 가능 , 재선언 X)
const : 영역형 변수 상수(final)
*/

//var test : 재선언 가능, 업데이트 가능
var hello = "안녕";
var hello = "헬로우";
var cnt = 5;

if(cnt<6){
    var hello1 = "say hello";
    console.log(hello1);
}

console.log(hello1);
console.log(hello);

//let
let hi = "hi";
hi ="하이라고 할게";

let times = 5;

if(times>3){
    let hi1 = "say hi";
    console.log(hi1);
}

//console.log(hi1);
console.log(hi);

//const
const hey = {
    message:"3th say Hi",
    times:4
};

console.log(hey);

hey.message = "이건됨?"
hey.times = 44;

console.log(hey);

if(0){
    const test1 = {
        test3:"영역 테스트",
        test2:"됨?"
    };
    console.log(hello1);
}
console.log(test1.test3);