let text = "something";
console.log(text);
let a = 30;
let b = 40;
if(a>b){
    colsole.log("a is greater than b");
}
else{
    console.log("b is greater than a");
}
function greet(fname, lname){
    console.log("hello",fname ,lname);
}
greet("Bhuvi", "Gupta")
function add(num1, num2){
    console.log(num1 + num2);
}
add(10, 20);
function fullname(fname="bhuvi", lname="gupta"){
    console.log("hello",fname ,lname);
}
fullname();
function total(s1,s2,s3){
    return s1+s2+s3;
}
function add(marks){
    return (marks/300)*100;
}
let totalMarks = total(80, 90, 85);
console.log(totalMarks);
let percentage = add(totalMarks);
console.log(percentage);