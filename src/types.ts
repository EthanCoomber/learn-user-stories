/**
 * Account type
 * This type represents an account in the bank.
 * It contains the account number and the balance.
 */
export type AccountType = {
  id: number;
  balance: number;
};

export interface BankType {
  createAccount: (username: string, age: number, accountNumber: number) => AccountType;
}
