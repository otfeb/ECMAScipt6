// es6가 좀 더 언어적으로 바뀜, set,Map가능(컬렉션)
let set=new Set("abcccdddeeefffff");    //중복문자 걸러짐
console.log(set);

set.add("g");   //없으니까 추가됨
console.log(set);

console.log(set.has("a"));
console.log(set.has("y"));
console.log("길이: "+set.size);

console.log(...set);
set.delete("a");    //하나씩 삭제
console.log(...set);

set.clear();    //전체삭제
console.log(set.size);

//비교연산자
let a=6;
let b="6";

console.log(a==b);  //값으로만 비교 - true

console.log(a===b); //타입도 같아야함 - false