# Exercise 2: Bank Account with Access Modifiers

**Chapter**: 1 - Advanced OOP in TypeScript

**Difficulty**: Medium | **Estimated Time**: 20 minutes

---

## Problem Statement

Implement a secure banking system using proper access modifiers. Create a `BankAccount` class with encapsulated balance and a `SavingsAccount` subclass that adds interest functionality.

---

## Requirements

1. Create `BankAccount` class with:
   - `accountNumber` (public, readonly)
   - `accountHolder` (public, readonly)
   - `balance` (private)
   - `transactionCount` (private, static)
   - Methods: `deposit()`, `withdraw()`, `getBalance()`, `getTransactionCount()` (static)

2. Create `SavingsAccount` class that extends `BankAccount`:
   - `interestRate` (private, default: 0.05)
   - `addInterest()` method that calculates and adds interest to balance
   - Override `withdraw()` to limit withdrawals to 3 per month

3. Implement proper validation:
   - Cannot deposit negative amounts
   - Cannot withdraw more than balance
   - Savings account limited to 3 withdrawals per month

---

## Starter Code

```typescript
class BankAccount {
  // Add public readonly properties
  
  // Add private properties
  
  constructor(accountNumber: string, accountHolder: string, initialBalance: number) {
    // Initialize properties
  }
  
  // Implement deposit method
  
  // Implement withdraw method
  
  // Implement getBalance method
  
  // Implement static getTransactionCount method
}

class SavingsAccount extends BankAccount {
  // Add interest rate and withdrawal tracking
  
  constructor(accountNumber: string, accountHolder: string, initialBalance: number) {
    // Call parent constructor
  }
  
  // Implement addInterest method
  
  // Override withdraw method
}

// Test your implementation
const savings = new SavingsAccount("SAV-001", "Alice", 1000);
```

---

## Constraints

- Use appropriate access modifiers
- All monetary values should be validated
- Track transaction count across all accounts (static)

---

## Test Cases

### Test Case 1

**Input**:
```typescript
const account = new BankAccount("ACC-001", "Bob", 500);
account.deposit(200);
account.withdraw(100);
console.log(account.getBalance());
console.log(BankAccount.getTransactionCount());
```

**Expected Output**:
```
600
2
```

### Test Case 2

**Input**:
```typescript
const savings = new SavingsAccount("SAV-001", "Alice", 1000);
savings.addInterest();
console.log(savings.getBalance());
```

**Expected Output**:
```
1050
```

### Test Case 3

**Input**:
```typescript
const savings = new SavingsAccount("SAV-001", "Alice", 1000);
savings.withdraw(100);  // 1
savings.withdraw(100);  // 2
savings.withdraw(100);  // 3
savings.withdraw(100);  // 4 - should fail
```

**Expected Output**:
```
Withdrawal limit reached for this month
```

---

## Hints

<details>
<summary>Hint 1</summary>

Use a private static property to track transaction count across all instances.

</details>

<details>
<summary>Hint 2</summary>

For `addInterest()`, multiply balance by interest rate and add to balance.

</details>

<details>
<summary>Hint 3</summary>

Track monthly withdrawals with a private counter that resets isn't needed for this exercise.

</details>

---

## Solution

<details>
<summary>View Solution</summary>

```typescript
class BankAccount {
  public readonly accountNumber: string;
  public readonly accountHolder: string;
  private balance: number;
  private static transactionCount: number = 0;

  constructor(accountNumber: string, accountHolder: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Invalid deposit amount");
      return;
    }
    this.balance += amount;
    BankAccount.transactionCount++;
    console.log(`Deposited $${amount}. Balance: $${this.balance}`);
  }

  withdraw(amount: number): boolean {
    if (amount <= 0 || amount > this.balance) {
      console.log("Invalid withdrawal amount or insufficient funds");
      return false;
    }
    this.balance -= amount;
    BankAccount.transactionCount++;
    console.log(`Withdrew $${amount}. Balance: $${this.balance}`);
    return true;
  }

  getBalance(): number {
    return this.balance;
  }

  static getTransactionCount(): number {
    return BankAccount.transactionCount;
  }
}

class SavingsAccount extends BankAccount {
  private interestRate: number = 0.05;
  private withdrawalCount: number = 0;
  private maxWithdrawals: number = 3;

  constructor(accountNumber: string, accountHolder: string, initialBalance: number) {
    super(accountNumber, accountHolder, initialBalance);
  }

  addInterest(): void {
    const balance = this.getBalance();
    const interest = balance * this.interestRate;
    this.deposit(interest);
    console.log(`Interest added: $${interest.toFixed(2)}`);
  }

  withdraw(amount: number): boolean {
    if (this.withdrawalCount >= this.maxWithdrawals) {
      console.log("Withdrawal limit reached for this month");
      return false;
    }
    const success = super.withdraw(amount);
    if (success) {
      this.withdrawalCount++;
    }
    return success;
  }
}

// Test
const account = new BankAccount("ACC-001", "Bob", 500);
account.deposit(200);
account.withdraw(100);
console.log(account.getBalance());
console.log(BankAccount.getTransactionCount());
```

**Explanation**: Private properties encapsulate sensitive data. Static properties track class-wide statistics. The subclass extends functionality while respecting parent class encapsulation.

</details>

---

## Submission

Complete the starter code and verify all test cases pass.
