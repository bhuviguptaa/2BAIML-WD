// let first = "bhuvi";
// let last = "gupta"
// FullName = (first, last) => {
//     return `${first} ${last}`;
// }
// console.log(`${FullName(first, last)}`);

const pattern = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += "*";
        }

        console.log(row);
    }
};

pattern(3);