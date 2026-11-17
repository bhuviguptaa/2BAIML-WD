//QUESTION 1
const B = require('events');
const obj = new B();
obj.on('std event', (name, rollNo) => {
    console.log(`Welcome to the class ${name}`);
    console.log(`Welcome to class, Roll No: ${rollNo}`);
});
obj.emit('std event', 'bhuvi', 54);


//QUESTION 2
console.log("start")
setTimeout(()=>{
    console.log("timeout")
}, 2000)
setImmediate(()=>{
    console.log("immediate")
})
process.nextTick(()=>{
    console.log("next tick")
})
console.log("exit")


//QUESTION 3
const fs= require('fs')
fs.writeFile("std.txt", "Name: Bhuvi", (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("File created successfully")
  }
})
fs.appendFile(
    "std.txt",
    "\nAge: 19",
    (err,data) => {
        if(err){
            console.log(err)
        }
        else{
            console.log("Data appended successfully")
        }
    }
)
fs.readFile("std.txt", "utf-8", (err,data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})