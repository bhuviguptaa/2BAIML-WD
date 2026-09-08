function sum(...values){
    let total = 0;
    for( let n of values){
        total+=n
    }
    console.log(total);
}
let arr = [1,2,3,4,5];  
sum(...arr);

