var a = 1;
let b = 2;

function myFunction(){
    var a = 3;
    let b = 4;

    if(true){
        var a = 5;
        let b = 6;

        console.log(a);
        console.log(b);
    }
    console.log(a);
    console.log(b);

}
myFunction();

console.log(a);
console.log(b);