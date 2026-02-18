# Exercise 2: Authorization Decorator Factory

**Chapter**: 2 - Decorators

**Difficulty**: Medium | **Estimated Time**: 25 minutes

---

## Problem Statement

Create an authorization system using a decorator factory `@Authorize()` that restricts method access based on user roles.

---

## Requirements

1. Create `@Authorize(...roles: string[])` decorator factory that:
   - Accepts one or more role names
   - Checks if the user has any of the required roles
   - Throws an error if access is denied
   - Allows the method to proceed if access is granted

2. Create an `AdminService` class with methods:
   - `deleteUser(userId: number)` - requires "admin" role
   - `viewReports()` - requires "admin" or "manager" role
   - `editContent(content: string)` - requires "editor" or "admin" role
   - `viewProfile(userId: number)` - requires "admin", "manager", or "user" role

3. Create a `User` type with `role` and `name` properties

4. Each protected method should accept a `user` object as the first parameter

---

## Starter Code

```typescript
function Authorize(...requiredRoles: string[]) {
  // Implement your decorator factory here
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    
    // Modify the method to check authorization
    
    return descriptor;
  };
}

type User = {
  role: string;
  name: string;
};

class AdminService {
  // Add your methods with @Authorize decorator
}

// Test
const service = new AdminService();
const admin = { role: "admin", name: "Alice" };
const manager = { role: "manager", name: "Bob" };
```

---

## Constraints

- The decorator must support multiple roles (OR logic)
- Error messages must include the user's name and required roles
- The original method should only execute if authorization passes

---

## Test Cases

### Test Case 1

**Input**:
```typescript
const admin = { role: "admin", name: "Alice" };
service.deleteUser(admin, 123);
```

**Expected Output**:
```
✓ Access granted to Alice (admin) for deleteUser
  Deleting user 123
```

### Test Case 2

**Input**:
```typescript
const user = { role: "user", name: "Charlie" };
service.deleteUser(user, 456);
```

**Expected Output**:
```
Error: 🚫 Access denied for Charlie (user). Required: admin
```

### Test Case 3

**Input**:
```typescript
const manager = { role: "manager", name: "Bob" };
service.viewReports(manager);
```

**Expected Output**:
```
✓ Access granted to Bob (manager) for viewReports
  Here are the reports
```

---

## Hints

<details>
<summary>Hint 1</summary>

The decorator factory returns the actual decorator, which receives the target, propertyKey, and descriptor.

</details>

<details>
<summary>Hint 2</summary>

Use `requiredRoles.includes(user.role)` to check if the user has any required role.

</details>

<details>
<summary>Hint 3</summary>

The first argument to the decorated method will be the user object.

</details>

---

## Solution

<details>
<summary>View Solution</summary>

```typescript
function Authorize(...requiredRoles: string[]) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (user: { role: string; name: string }, ...args: any[]) {
      if (!requiredRoles.includes(user.role)) {
        throw new Error(
          `🚫 Access denied for ${user.name} (${user.role}). Required: ${requiredRoles.join(" or ")}`
        );
      }
      console.log(`✓ Access granted to ${user.name} (${user.role}) for ${propertyKey}`);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

type User = {
  role: string;
  name: string;
};

class AdminService {
  @Authorize("admin")
  deleteUser(user: User, userId: number): void {
    console.log(`  Deleting user ${userId}`);
  }

  @Authorize("admin", "manager")
  viewReports(user: User): string {
    console.log("  Here are the reports");
    return "Reports data";
  }

  @Authorize("editor", "admin")
  editContent(user: User, content: string): void {
    console.log(`  Editing content: ${content}`);
  }

  @Authorize("admin", "manager", "user")
  viewProfile(user: User, userId: number): string {
    console.log(`  Viewing profile for user ${userId}`);
    return `Profile data for user ${userId}`;
  }
}

// Test
const service = new AdminService();

const admin = { role: "admin", name: "Alice" };
const manager = { role: "manager", name: "Bob" };
const user = { role: "user", name: "Charlie" };

console.log("=== Admin Actions ===");
service.deleteUser(admin, 123);
service.viewReports(admin);

console.log("\n=== Manager Actions ===");
service.viewReports(manager);
try {
  service.deleteUser(manager, 456);
} catch (error) {
  console.log("Error:", (error as Error).message);
}

console.log("\n=== User Actions ===");
service.viewProfile(user, 789);
try {
  service.viewReports(user);
} catch (error) {
  console.log("Error:", (error as Error).message);
}
```

**Explanation**: The decorator factory captures the required roles and returns a decorator that checks the user's role against the allowed roles. If the user's role is not in the list, an error is thrown.

</details>

---

## Submission

Complete the decorator factory and verify all test cases pass. Run with `npx ts-node --experimentalDecorators filename.ts`.
