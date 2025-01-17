import { BankType, AccountType } from "./types";

/**
 * Bank class
 * 
 * This class is a simple implementation of a bank.
 * It allows you to create accounts, deposit and withdraw money, and get the balance of an account.
 */
export class Bank implements BankType {
    private accounts: AccountType[];
    private usernames: string[];

    /**
     * Constructor
     * @param accounts - The accounts in the bank
     * @param usernames - The usernames in the bank
     */
    constructor(accounts: AccountType[], usernames: string[]) {
        this.accounts = accounts;
        this.usernames = usernames;
    }

    /**
     * Checks if a username is already taken
     * @param username - The username to check
     * @returns true if the username is already taken, false otherwise
     */
    private isUsernameTaken(username: string): boolean {
        return this.usernames.includes(username);
    }

    /**
     * Finds an account by its account number
     * @param accountNumber - The account number to find
     * @returns The account if found, undefined otherwise
     */
    private findAccount(accountNumber: number): AccountType | undefined {
        return this.accounts.find(account => account.id === accountNumber);
    }

    /**
     * Checks if an account number is valid
     * @param accountNumber - The account number to check
     * @returns true if the account number is valid, false otherwise
     */
    private isAccountNumberValid(accountNumber: number): boolean {
        return accountNumber.toString().length === 10;
    }

    /**
     * Creates an account
     * @param username - The username of the account
     * @param age - The age of the account
     * @param accountNumber - The account number of the account
     * @returns The account created
     */
    createAccount(username: string, age: number, accountNumber: number): AccountType {
        if (this.isUsernameTaken(username)) {
            throw new Error("Username already taken");
        }
        if (age < 18) {
            throw new Error("You must be at least 18 years old to create an account");
        }
        if (this.findAccount(accountNumber)) {
            throw new Error("Account number already taken");
        }
        if (!this.isAccountNumberValid(accountNumber)) {
            throw new Error("Account number must be 10 digits long and start with 1234567890");
        }
        const account: AccountType = { id: accountNumber, balance: 0 };
        this.accounts.push(account);
        this.usernames.push(username);
        return account;
    }

    /**
     * Gets an account by its username
     * @param username - The username of the account
     * @returns The account if found, undefined otherwise
     */
    getAccount(username: string): AccountType {
        const index = this.usernames.indexOf(username);
        return this.accounts[index];
    }

    /**
     * Deposits money into an account
     * @param accountNumber - The account number of the account
     * @param amount - The amount to deposit
     */
    deposit(accountNumber: number, amount: number): void {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        if (amount < 0) {
            throw new Error("Amount must be positive");
        }
        account.balance += amount;
    }

    /**
     * Withdraws money from an account
     * @param accountNumber - The account number of the account
     * @param amount - The amount to withdraw
     */
    withdraw(accountNumber: number, amount: number): void {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        if (account.balance < amount) {
            throw new Error("Insufficient funds");
        }
        account.balance -= amount;
    }

    /**
     * Gets the balance of an account
     * @param accountNumber - The account number of the account
     * @returns The balance of the account
     */
    getBalance(accountNumber: number): number {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        return account.balance;
    }
}
