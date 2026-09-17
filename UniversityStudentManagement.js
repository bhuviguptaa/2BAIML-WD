class Student {
    static totalstudents = 0;
    constructor(rollno, name, marks) {
        this.rollno = rollno;
        this.name = name;
        this.marks = marks;
        Student.totalstudents++;
    }
    displayresult = () => {
        console.log(`Roll No: ${this.rollno}, Name: ${this.name}, Marks: ${this.marks}`);
        if (this.marks >= 35) {
            console.log(`${this.name} is Passed`);
        } else {
            console.log(`${this.name} is Failed`);
        }
    };
}
let s1 = new Student(101, "Bhuvi", 95);
s1.displayresult();
let s2 = new Student(102, "abc", 25);
s2.displayresult();
let s3 = new Student(103, "xyz", 75);
s3.displayresult();
console.log(`Total Students: ${Student.totalstudents}`);