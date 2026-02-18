// Example 2.4: Method Decorator - Timing and Caching
// Performance monitoring and memoization

import "reflect-metadata";

/**
 * Measures method execution time
 */
function Timing(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    const start = performance.now();
    try {
      const result = await originalMethod.apply(this, args);
      const end = performance.now();
      console.log(`⏱ ${propertyKey}: ${(end - start).toFixed(2)}ms`);
      return result;
    } catch (error) {
      const end = performance.now();
      console.log(`❌ ${propertyKey} failed after ${(end - start).toFixed(2)}ms`);
      throw error;
    }
  };

  return descriptor;
}

/**
 * Caches method results based on arguments
 */
function Cache(ttlMs: number = 5000) {
  const cache = new Map<string, { value: any; expiry: number }>();

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const cacheKey = `${propertyKey}:${JSON.stringify(args)}`;
      const now = Date.now();

      // Check cache
      const cached = cache.get(cacheKey);
      if (cached && cached.expiry > now) {
        console.log(`💾 [CACHE HIT] ${propertyKey}`);
        return cached.value;
      }

      console.log(`🔄 [CACHE MISS] ${propertyKey}`);
      const result = await originalMethod.apply(this, args);

      // Store in cache
      cache.set(cacheKey, {
        value: result,
        expiry: now + ttlMs
      });

      return result;
    };

    return descriptor;
  };
}

/**
 * Rate limits method calls
 */
function RateLimit(maxCalls: number, windowMs: number) {
  const calls: number[] = [];

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const now = Date.now();

      // Remove old calls outside the window
      while (calls.length > 0 && calls[0] < now - windowMs) {
        calls.shift();
      }

      // Check rate limit
      if (calls.length >= maxCalls) {
        const waitTime = Math.ceil((calls[0] + windowMs - now) / 1000);
        throw new Error(
          `Rate limit exceeded. Try again in ${waitTime}s`
        );
      }

      calls.push(now);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

class ApiService {
  @Timing
  @Cache(10000)  // 10 second TTL
  async fetchUsers(): Promise<any[]> {
    console.log("  📡 Fetching users from API...");
    await this.simulateDelay(500);
    return [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" }
    ];
  }

  @Timing
  @Cache(5000)
  async fetchUser(id: number): Promise<any> {
    console.log(`  📡 Fetching user ${id} from API...`);
    await this.simulateDelay(300);
    return { id, name: `User${id}`, email: `user${id}@example.com` };
  }

  @Timing
  @RateLimit(3, 60000)  // 3 calls per minute
  async sendEmail(to: string, subject: string, body: string): Promise<boolean> {
    console.log(`  📧 Sending email to ${to}: ${subject}`);
    await this.simulateDelay(200);
    return true;
  }

  private async simulateDelay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Usage
async function demo() {
  const api = new ApiService();

  console.log("=== Caching Demo ===\n");

  console.log("--- First fetch (cache miss) ---");
  const users1 = await api.fetchUsers();
  console.log("Users:", users1.length);

  console.log("\n--- Second fetch (cache hit) ---");
  const users2 = await api.fetchUsers();
  console.log("Users:", users2.length);

  console.log("\n--- Fetch individual users ---");
  await api.fetchUser(1);
  await api.fetchUser(1);  // Cached
  await api.fetchUser(2);

  console.log("\n=== Rate Limiting Demo ===\n");

  try {
    await api.sendEmail("a@test.com", "Test 1", "Body 1");
    await api.sendEmail("b@test.com", "Test 2", "Body 2");
    await api.sendEmail("c@test.com", "Test 3", "Body 3");
    await api.sendEmail("d@test.com", "Test 4", "Body 4");  // Should fail
  } catch (error) {
    console.log("Rate limited:", (error as Error).message);
  }
}

demo();

// Output:
// === Caching Demo ===
//
// --- First fetch (cache miss) ---
// 🔄 [CACHE MISS] fetchUsers
//   📡 Fetching users from API...
// ⏱ fetchUsers: 501.23ms
// Users: 3
//
// --- Second fetch (cache hit) ---
// 💾 [CACHE HIT] fetchUsers
// ⏱ fetchUsers: 0.12ms
// Users: 3
//
// --- Fetch individual users ---
// 🔄 [CACHE MISS] fetchUser
//   📡 Fetching user 1 from API...
// ⏱ fetchUser: 301.45ms
// 💾 [CACHE HIT] fetchUser
// ⏱ fetchUser: 0.08ms
// ...
