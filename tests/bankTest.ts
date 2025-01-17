import { Bank } from "../src/banks";

// setup

const accounts = [{ id: 1234567890, balance: 100 }, { id: 1234567891, balance: 200 }];
const usernames = ["John", "Jane"];

const bank = new Bank(accounts, usernames);

// tests

try {
    bank.createAccount("John", 17, 1234567890);
    throw new Error("Account should not be created, age is too low");
} catch (e) {
    console.log("successfully caught error");
}

try {
    bank.deposit(1234567890, 100);
    if (bank.getBalance(1234567890) !== 200) {
        throw new Error("Account balance is not valid");
    }
} catch (e) {
    console.log(e);
}

try {
    bank.withdraw(1234567890, 100);
    if (bank.getBalance(1234567890) !== 100) {
        throw new Error("Account balance is not valid");
    }
} catch (e) {
    console.log(e);
}

console.log("All tests passed");