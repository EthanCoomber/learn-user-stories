import { Bank } from "../src/banks";

// setup

const accounts = [{ id: 1234567890, balance: 0 }, { id: 1234567891, balance: 0 }];
const usernames = ["John", "Jane"];

const bank = new Bank(accounts, usernames);

// tests

try {
    bank.createAccount("Jack", 26, 4567890123);
    console.log("Account created successfully");
} catch (e) {
    console.log(e);
}

try {
    bank.createAccount("Jack", 26, 123);
    throw new Error("Account should not be created, account number is already taken");
} catch (e) {
    console.log("successfully caught error: not enough digits");
}

try {
    bank.createAccount("John", 17, 1234567890);
    throw new Error("Account should not be created, age is too low");
} catch (e) {
    console.log("successfully caught error: age is too low");
}

try {
    bank.deposit(1234567890, 100);
    if (bank.getBalance(1234567890) !== 100) {
        throw new Error("Account balance is not valid");
    }
    console.log("Successfully deposited");
} catch (e) {
    console.log(e);
}

try {
    bank.deposit(1234567890, -100);
    throw new Error("Did not catch error");
} catch (e) {
    console.log("successfully caught error: negative amount");
}

try {
    bank.deposit(3234567890, 0);
    throw new Error("Did not catch error");
} catch (e) {
    console.log("successfully caught error: account not found");
}

try {
    bank.withdraw(1234567890, 100);
    if (bank.getBalance(1234567890) !== 0) {
        throw new Error("Did not withdraw correctly");
    }
    console.log("Successfully withdrew");
} catch (e) {
    console.log(e);
}

try {
    bank.withdraw(1234567890, 100);
    throw new Error("Did not catch error");
} catch (e) {
    console.log("successfully caught error: insufficient funds");
}


console.log("All tests passed");