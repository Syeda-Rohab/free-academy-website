// Example 3.4: Keyof and Indexed Access Types

interface Person {
  name: string;
  age: number;
  email: string;
  address: {
    street: string;
    city: string;
    zip: string;
  };
}

/**
 * Get property value using keyof constraint
 */
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
  address: {
    street: "123 Main St",
    city: "NYC",
    zip: "10001"
  }
};

console.log(getProperty(person, "name"));   // "Alice"
console.log(getProperty(person, "age"));    // 30
console.log(getProperty(person, "email"));  // "alice@example.com"

// keyof Person = "name" | "age" | "email" | "address"
type PersonKeys = keyof Person;

/**
 * Set property value with type safety
 */
function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProperty(person, "age", 31);
console.log("Updated age:", person.age);  // 31

/**
 * Extract all property types from an interface
 */
type PersonPropertyTypes = Person[keyof Person];
// = string | number | { street: string; city: string; zip: string; }

/**
 * Get only the keys of a specific type
 */
type KeysOfType<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

type StringKeys = KeysOfType<Person, string>;  // "name" | "email"
type NumberKeys = KeysOfType<Person, number>;  // "age"

/**
 * Make specific properties readonly
 */
type ReadonlyProperties<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

type PersonWithReadonlyName = ReadonlyProperties<Person, "name" | "email">;

const readonlyPerson: PersonWithReadonlyName = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
  address: { street: "123 Main St", city: "NYC", zip: "10001" }
};

// readonlyPerson.name = "Bob";  // Error - name is readonly
// readonlyPerson.email = "new@example.com";  // Error - email is readonly
readonlyPerson.age = 31;  // OK - age is mutable

/**
 * Indexed access with union of keys
 */
type PersonContact = Person["email" | "name"];  // string

type PersonNested = Person["address"]["city"];  // string

/**
 * Dynamic property extraction
 */
function getNestedProperty<T, K1 extends keyof T, K2 extends keyof T[K1]>(
  obj: T,
  key1: K1,
  key2: K2
): T[K1][K2] {
  return obj[key1][key2];
}

console.log(getNestedProperty(person, "address", "city"));  // "NYC"
console.log(getNestedProperty(person, "address", "street"));  // "123 Main St"

/**
 * Create a type with only specific properties
 */
type PickProperties<T, K extends keyof T> = {
  [P in K]: T[P];
};

type PersonNameAndAge = PickProperties<Person, "name" | "age">;
// = { name: string; age: number; }

// Output:
// Alice
// 30
// alice@example.com
// Updated age: 31
// NYC
// 123 Main St
