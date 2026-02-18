// Example 1.7: Getters and Setters
// Computed properties with controlled access and validation

class Temperature {
  private _celsius: number = 0;

  constructor(celsius: number) {
    this.celsius = celsius;  // Uses setter with validation
  }

  // Getter for celsius
  get celsius(): number {
    return this._celsius;
  }

  // Setter for celsius with validation
  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error("Temperature cannot be below absolute zero (-273.15°C)");
    }
    this._celsius = value;
  }

  // Computed property - Fahrenheit (getter and setter)
  get fahrenheit(): number {
    return (this._celsius * 9/5) + 32;
  }

  set fahrenheit(value: number) {
    this.celsius = (value - 32) * 5/9;
  }

  // Read-only computed property - Kelvin
  get kelvin(): number {
    return this._celsius + 273.15;
  }

  // Description method
  describe(): string {
    return `${this._celsius.toFixed(1)}°C = ${this.fahrenheit.toFixed(1)}°F = ${this.kelvin.toFixed(2)}K`;
  }
}

// Usage
console.log("=== Temperature Conversions ===");

const temp1 = new Temperature(25);
console.log(`Room temperature: ${temp1.describe()}`);

const temp2 = new Temperature(100);
console.log(`Boiling point: ${temp2.describe()}`);

// Using setter
temp2.fahrenheit = 212;
console.log(`After setting to 212°F: ${temp2.describe()}`);

// Using setter with validation (will throw error)
try {
  const invalidTemp = new Temperature(-300);
} catch (error) {
  console.log(`Error: ${(error as Error).message}`);
}

// Output:
// === Temperature Conversions ===
// Room temperature: 25.0°C = 77.0°F = 298.15K
// Boiling point: 100.0°C = 212.0°F = 373.15K
// After setting to 212°F: 100.0°C = 212.0°F = 373.15K
// Error: Temperature cannot be below absolute zero (-273.15°C)
