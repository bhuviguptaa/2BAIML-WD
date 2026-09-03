function sum(name,...values){
    let total = 0;
    for( let n of values){
        total+=n
    }
    console.log(name,total);
}
sum("bhuvi", 10, 20);
sum("bhuvi", 10, 100, 1000);

