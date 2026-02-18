// Example 1.3: Using super() Keyword
// Demonstrates calling parent constructor and methods

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `Hi, I'm ${this.name}, ${this.age} years old`;
  }

  celebrateBirthday(): number {
    this.age++;
    return this.age;
  }
}

class Employee extends Person {
  employeeId: number;
  private salary: number;

  constructor(name: string, age: number, employeeId: number, salary: number) {
    super(name, age);  // Must call super() before using 'this'
    this.employeeId = employeeId;
    this.salary = salary;
  }

  // Override parent method and extend functionality
  introduce(): string {
    const parentIntro = super.introduce();
    return `${parentIntro}, Employee ID: ${this.employeeId}`;
  }

  // New method specific to Employee
  getAnnualRaise(percent: number): number {
    return this.salary * (percent / 100);
  }

  // Access parent method
  haveBirthday(): string {
    const newAge = super.celebrateBirthday();
    return `${this.name} is now ${newAge} years old`;
  }
}

// Usage
const emp = new Employee("Alice", 30, 12345, 75000);
console.log(emp.introduce());
console.log(emp.haveBirthday());
console.log(`Annual raise (5%): $${emp.getAnnualRaise(5)}`);

// Output:
// Hi, I'm Alice, 30 years old, Employee ID: 12345
// Alice is now 31 years old
// Annual raise (5%): $3750
