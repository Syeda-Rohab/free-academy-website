// Example 1.9: Static Factory Methods
// Controlled object creation with automatic ID assignment

class User {
  private static userIdCounter: number = 1;
  private static userCount: number = 0;

  public readonly id: number;
  public readonly name: string;
  public readonly email: string;
  private readonly createdAt: Date;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }

  // Static factory method - create regular user
  static create(name: string, email: string): User {
    const id = User.userIdCounter++;
    User.userCount++;
    return new User(id, name, email);
  }

  // Static factory method - create admin user
  static createAdmin(name: string, email: string): AdminUser {
    const id = User.userIdCounter++;
    User.userCount++;
    return new AdminUser(id, name, email);
  }

  // Static factory method - create guest user
  static createGuest(): GuestUser {
    const id = User.userIdCounter++;
    User.userCount++;
    return new GuestUser(id);
  }

  // Static method - get total user count
  static getUserCount(): number {
    return User.userCount;
  }

  // Static method - reset counter (for testing)
  static resetCounter(): void {
    User.userIdCounter = 1;
    User.userCount = 0;
  }

  // Instance method
  getInfo(): string {
    return `User ${this.id}: ${this.name} <${this.email}>`;
  }

  getCreatedAt(): string {
    return this.createdAt.toISOString();
  }
}

class AdminUser extends User {
  constructor(id: number, name: string, email: string) {
    super(id, name, email);
  }

  getInfo(): string {
    return `[ADMIN] ${super.getInfo()}`;
  }

  getPermissions(): string[] {
    return ['read', 'write', 'delete', 'manage-users'];
  }
}

class GuestUser extends User {
  constructor(id: number) {
    super(id, "Guest", `guest-${id}@guest.local`);
  }

  getInfo(): string {
    return `[GUEST] User ${this.id} (Anonymous)`;
  }

  getPermissions(): string[] {
    return ['read'];
  }
}

// Usage
console.log("=== Creating Users ===");

const user1 = User.create("Alice", "alice@example.com");
const user2 = User.create("Bob", "bob@example.com");
const admin = User.createAdmin("Charlie", "charlie@example.com");
const guest = User.createGuest();

console.log(user1.getInfo());
console.log(user2.getInfo());
console.log(admin.getInfo());
console.log(guest.getInfo());

console.log("\n=== Statistics ===");
console.log(`Total users created: ${User.getUserCount()}`);

console.log("\n=== Admin Permissions ===");
console.log(admin.getPermissions());

console.log("\n=== Guest Permissions ===");
console.log(guest.getPermissions());

// Output:
// === Creating Users ===
// User 1: Alice <alice@example.com>
// User 2: Bob <bob@example.com>
// [ADMIN] User 3: Charlie <charlie@example.com>
// [GUEST] User 4 (Anonymous)
//
// === Statistics ===
// Total users created: 4
//
// === Admin Permissions ===
// [ 'read', 'write', 'delete', 'manage-users' ]
//
// === Guest Permissions ===
// [ 'read' ]
