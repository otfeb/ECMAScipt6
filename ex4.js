function func1(x,y=200,z=300){
    console.log(x,y,z);
}
func1(3,4,5);
func1(100);
func1();

function func2(a,b){
    return a+b;
}

console.log(func2(5,6));

let arr=[3,5,9];
let r2=func2(arr[0],arr[1]);

console.log(r2);

//... : es6에서 추가된 기능..펼침연산자
func1(...arr);

let r3 = func2(...arr);
console.log(r3);
