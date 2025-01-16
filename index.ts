class BankAccount {
    private balance: number;

    constructor() {
        this.balance = 0;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
    }

    getBalance(): number {
        return this.balance;
    }
}

// Test the bank account
const account = new BankAccount();

// Test deposits
account.deposit(100);
account.deposit(50);

// Test balance check
console.log(`Current balance: ${account.getBalance()}`);

// Test withdrawals
account.withdraw(30);
account.withdraw(20);

// Final balance check
console.log(`Final balance: ${account.getBalance()}`);

// Test error cases
try {
    account.withdraw(1000); // Should throw insufficient funds error
} catch (error) {
    if (error instanceof Error) {
        console.log(`Error: ${error.message}`);
    } else {
        console.log(`Unknown error occurred.`);
    }
}

try {
    account.deposit(-50); // Should throw invalid amount error
} catch (error) {
    if (error instanceof Error) {
        console.log(`Error: ${error.message}`);
    } else {
        console.log(`Unknown error occurred.`);
    }
}
