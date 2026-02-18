// Example 2.6: Decorator Factories
// Creating parameterized decorators

import "reflect-metadata";

/**
 * Authorization decorator factory
 * Restricts method access based on user roles
 */
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

/**
 * Timeout decorator factory
 * Adds timeout to async methods
 */
function Timeout(ms: number) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error(`⏰ Timeout after ${ms}ms`)), ms);
      });

      const methodPromise = originalMethod.apply(this, args);

      return Promise.race([methodPromise, timeoutPromise]);
    };

    return descriptor;
  };
}

/**
 * Retry decorator factory
 * Retries failed operations with exponential backoff
 */
function Retry(maxRetries: number = 3, initialDelay: number = 100) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      let lastError: Error;
      let delay = initialDelay;

      for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
          return await originalMethod.apply(this, args);
        } catch (error) {
          lastError = error as Error;
          
          if (attempt < maxRetries) {
            console.log(
              `⚠ Attempt ${attempt + 1} failed: ${lastError.message}. Retrying in ${delay}ms...`
            );
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2;  // Exponential backoff
          }
        }
      }

      throw new Error(`Failed after ${maxRetries + 1} attempts. Last error: ${lastError!.message}`);
    };

    return descriptor;
  };
}

/**
 * Log decorator factory with custom logger
 */
function UseLogger(logger: { log: (msg: string) => void; prefix?: string }) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    const prefix = logger.prefix || "";

    descriptor.value = function (...args: any[]) {
      logger.log(`${prefix}Calling ${propertyKey} with ${args.length} arguments`);
      const result = originalMethod.apply(this, args);
      logger.log(`${prefix}${propertyKey} completed`);
      return result;
    };

    return descriptor;
  };
}

// Service classes using decorator factories

class AdminService {
  @Authorize("admin")
  deleteUser(userId: number): void {
    console.log(`  🗑️  Deleting user ${userId}`);
  }

  @Authorize("admin", "manager")
  viewReports(): string {
    return "📊 Here are the confidential reports";
  }

  @Authorize("admin", "manager", "user")
  viewProfile(userId: number): string {
    return `👤 Profile for user ${userId}`;
  }
}

class ExternalApiService {
  @Retry(3, 100)
  @Timeout(5000)
  async fetchData(endpoint: string): Promise<any> {
    console.log(`  📡 Fetching from ${endpoint}...`);
    
    // Simulate random failures
    if (Math.random() < 0.7) {
      throw new Error("Network error");
    }
    
    return { data: "success", endpoint };
  }

  @Timeout(1000)
  async quickOperation(): Promise<string> {
    console.log("  ⚡ Quick operation...");
    await new Promise(resolve => setTimeout(resolve, 500));
    return "Done";
  }
}

class LoggingService {
  private customLogger = {
    log: (msg: string) => console.log(`[LOG] ${msg}`),
    prefix: ">> "
  };

  @UseLogger(this.customLogger)
  processData(data: any): any {
    console.log("  Processing:", data);
    return { processed: true, data };
  }
}

// Usage
async function demo() {
  console.log("=== Authorization Demo ===\n");

  const adminService = new AdminService();
  const admin = { role: "admin", name: "Alice" };
  const manager = { role: "manager", name: "Bob" };
  const user = { role: "user", name: "Charlie" };

  // Admin can do everything
  console.log("--- Admin Actions ---");
  adminService.viewProfile(admin, 123);
  adminService.viewReports(admin);
  adminService.deleteUser(admin, 456);

  // Manager can view reports but not delete users
  console.log("\n--- Manager Actions ---");
  adminService.viewProfile(manager, 123);
  adminService.viewReports(manager);
  try {
    adminService.deleteUser(manager, 789);
  } catch (error) {
    console.log("Error:", (error as Error).message);
  }

  // Regular user has limited access
  console.log("\n--- User Actions ---");
  adminService.viewProfile(user, 123);
  try {
    adminService.viewReports(user);
  } catch (error) {
    console.log("Error:", (error as Error).message);
  }

  console.log("\n=== Retry & Timeout Demo ===\n");

  const apiService = new ExternalApiService();
  
  try {
    const result = await apiService.fetchData("/api/users");
    console.log("Result:", result);
  } catch (error) {
    console.log("Final error:", (error as Error).message);
  }

  console.log("\n=== Custom Logger Demo ===\n");

  const loggingService = new LoggingService();
  loggingService.processData({ id: 1, value: "test" });
}

demo();

// Output (sample):
// === Authorization Demo ===
//
// --- Admin Actions ---
// ✓ Access granted to Alice (admin) for viewProfile
//   👤 Profile for user 123
// ✓ Access granted to Alice (admin) for viewReports
//   📊 Here are the confidential reports
// ✓ Access granted to Alice (admin) for deleteUser
//   🗑️  Deleting user 456
//
// --- Manager Actions ---
// ✓ Access granted to Bob (manager) for viewProfile
//   👤 Profile for user 123
// ✓ Access granted to Bob (manager) for viewReports
//   📊 Here are the confidential reports
// Error: 🚫 Access denied for Bob (manager). Required: admin
//
// === Retry & Timeout Demo ===
//   📡 Fetching from /api/users...
// ⚠ Attempt 1 failed: Network error. Retrying in 100ms...
//   📡 Fetching from /api/users...
// Result: { data: 'success', endpoint: '/api/users' }
