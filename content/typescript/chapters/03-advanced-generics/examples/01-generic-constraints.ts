// Example 3.1: Generic Constraints with extends
// Ensures type parameters have required properties

interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(`Length: ${arg.length}`);
  return arg;
}

// Works with strings
logLength("hello");      // Length: 5

// Works with arrays
logLength([1, 2, 3]);    // Length: 3
logLength(["a", "b"]);   // Length: 2

// Works with objects that have length
logLength({ length: 5, name: "test" });  // Length: 5

// This would cause an error:
// logLength(5);  // Error: number doesn't have length property
// logLength(true);  // Error: boolean doesn't have length property

// Constraint with multiple properties
interface HasIdAndName {
  id: number;
  name: string;
}

function processEntity<T extends HasIdAndName>(entity: T): string {
  return `${entity.name} (ID: ${entity.id})`;
}

interface User extends HasIdAndName {
  email: string;
}

interface Product extends HasIdAndName {
  price: number;
}

const user: User = { id: 1, name: "Alice", email: "alice@example.com" };
const product: Product = { id: 101, name: "Laptop", price: 999.99 };

console.log(processEntity(user));     // "Alice (ID: 1)"
console.log(processEntity(product));  // "Laptop (ID: 101)"

// Output:
// Length: 5
// Length: 3
// Length: 2
// Length: 5
// Alice (ID: 1)
// Laptop (ID: 101)
