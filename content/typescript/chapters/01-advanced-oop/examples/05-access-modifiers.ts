// Example 1.5: Access Modifiers (public, private, protected, readonly)

class BankAccount {
  public accountNumber: string;      // Accessible everywhere
  private balance: number;           // Accessible only within class
  protected accountType: string;     // Accessible in class and subclasses
  public readonly createdAt: Date;   // Cannot be modified after creation
  private static interestRate: number = 0.05;  // Class-level private

  constructor(accountNumber: string, initialBalance: number, accountType: string) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.accountType = accountType;
    this.createdAt = new Date();
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Invalid deposit amount");
    }
  }

  public withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. Remaining balance: $${this.balance}`);
      return true;
    }
    console.log("Invalid withdrawal amount or insufficient funds");
    return false;
  }

  public getBalance(): number {
    return this.balance;
  }

  protected addInterest(): void {
    const interest = this.balance * BankAccount.interestRate;
    this.balance += interest;
    console.log(`Interest added: $${interest.toFixed(2)}`);
  }

  public static setInterestRate(rate: number): void {
    if (rate >= 0 && rate <= 1) {
      BankAccount.interestRate = rate;
    }
  }
}

class SavingsAccount extends BankAccount {
  private interestRate: number;

  constructor(accountNumber: string, initialBalance: number) {
    super(accountNumber, initialBalance, "Savings");
    this.interestRate = 0.05;
  }

  public addAnnualInterest(): void {
    super.addInterest();  // Can access protected method
    console.log(`Account type: ${this.accountType}`);  // Can access protected property
  }

  // This would cause errors if uncommented:
  // console.log(this.balance);      // Error: private, not accessible
  // console.log(this.accountNumber); // OK: public
}

// Usage
const savings = new SavingsAccount("SAV-001", 1000);

console.log(`Account: ${savings.accountNumber}`);  // OK: public
savings.deposit(500);
savings.addAnnualInterest();
console.log(`Final balance: $${savings.getBalance()}`);

// These would cause compile errors:
// console.log(savings.balance);      // Error: private
// console.log(savings.accountType);  // Error: protected
// savings.createdAt = new Date();    // Error: readonly
