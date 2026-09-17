class BankAccount {
    static bankInfo(){
        console.log("ABC Bank");
        console.log("Savings, Current, Fixed Deposit");
    }
    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`${amount} deposited successfully.`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }
    displayBalance() {
        console.log(`Account No: ${this.accountNo}`);
        console.log(`Holder Name: ${this.holderName}`);
        console.log(`Balance: ${this.balance}`);
    }
};
BankAccount.bankInfo();
let acc1 = new BankAccount(101, "Bhuvi", 5000);
acc1.displayBalance();
acc1.deposit(2000);
acc1.withdraw(1500);
acc1.displayBalance();
let acc2 = new BankAccount(102, "Rahul", 3000);
acc2.displayBalance();
acc2.deposit(1000);
acc2.withdraw(5000); 
acc2.displayBalance();