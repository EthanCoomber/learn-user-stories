import { BankAccount } from '../src/index';

describe('BankAccount', () => {
    let account: BankAccount;

    beforeEach(() => {
        account = new BankAccount();
    });

    describe('deposit', () => {
        it('should increase the balance by the deposited amount', () => {
            account.deposit(100);
            expect(account.getBalance()).toBe(100);

            account.deposit(50);
            expect(account.getBalance()).toBe(150);
        });

        it('should throw an error when depositing a non-positive amount', () => {
            expect(() => account.deposit(0)).toThrow("Deposit amount must be positive");
            expect(() => account.deposit(-50)).toThrow("Deposit amount must be positive");
        });
    });

    describe('withdraw', () => {
        beforeEach(() => {
            account.deposit(200);
        });

        it('should decrease the balance by the withdrawn amount', () => {
            account.withdraw(50);
            expect(account.getBalance()).toBe(150);

            account.withdraw(100);
            expect(account.getBalance()).toBe(50);
        });

        it('should throw an error when withdrawing a non-positive amount', () => {
            expect(() => account.withdraw(0)).toThrow("Withdrawal amount must be positive");
            expect(() => account.withdraw(-30)).toThrow("Withdrawal amount must be positive");
        });

        it('should throw an error when withdrawing more than the balance', () => {
            expect(() => account.withdraw(250)).toThrow("Insufficient funds");
        });
    });

    describe('getBalance', () => {
        it('should return the current balance', () => {
            expect(account.getBalance()).toBe(0);

            account.deposit(100);
            expect(account.getBalance()).toBe(100);

            account.withdraw(40);
            expect(account.getBalance()).toBe(60);
        });
    });
});
