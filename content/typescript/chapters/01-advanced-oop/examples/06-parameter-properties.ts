// Example 1.6: Parameter Properties
// Concise way to declare and initialize class properties

class Product {
  constructor(
    public id: number,
    public name: string,
    private price: number,
    public readonly category: string,
    protected discount: number = 0
  ) {}

  public getPrice(): number {
    return this.price;
  }

  public getFinalPrice(): number {
    return this.price * (1 - this.discount / 100);
  }

  public applyDiscount(percent: number): void {
    if (percent >= 0 && percent <= 100) {
      this.discount = percent;
      console.log(`${this.name}: ${percent}% discount applied`);
    }
  }

  public getInfo(): string {
    return `${this.name} (${this.category}) - $${this.getFinalPrice().toFixed(2)}`;
  }
}

class DigitalProduct extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    category: string,
    private downloadUrl: string
  ) {
    super(id, name, price, category);
  }

  public getInfo(): string {
    return `${super.getInfo()} [Digital Download]`;
  }
}

// Usage
const laptop = new Product(1, "Laptop", 999.99, "Electronics");
const ebook = new DigitalProduct(2, "TypeScript Guide", 29.99, "Books", "https://example.com/ebook");

console.log(laptop.getInfo());
console.log(ebook.getInfo());

laptop.applyDiscount(15);
console.log(`After discount: ${laptop.getInfo()}`);

// Output:
// Laptop (Electronics) - $999.99
// TypeScript Guide (Books) - $29.99 [Digital Download]
// Laptop: 15% discount applied
// After discount: Laptop (Electronics) - $849.99
