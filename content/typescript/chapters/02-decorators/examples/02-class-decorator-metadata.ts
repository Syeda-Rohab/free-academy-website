// Example 2.2: Class Decorator with Metadata
// Using reflect-metadata for runtime type information

import "reflect-metadata";

const CLASS_METADATA_KEY = "class_metadata";
const COMPONENT_VERSION_KEY = "component_version";

/**
 * Registers a component with a name
 */
function RegisterComponent(name: string, version: string = "1.0.0") {
  return function (constructor: Function) {
    Reflect.defineMetadata(CLASS_METADATA_KEY, name, constructor);
    Reflect.defineMetadata(COMPONENT_VERSION_KEY, version, constructor);
    console.log(`✓ Registered component: ${name} v${version}`);
  };
}

/**
 * Marks a component as deprecated
 */
function Deprecated(message: string) {
  return function (constructor: Function) {
    Reflect.defineMetadata("deprecated", message, constructor);
    console.log(`⚠ Deprecated: ${constructor.name} - ${message}`);
  };
}

@RegisterComponent("UserProfile", "2.1.0")
class UserProfile {
  constructor(public userId: number, public username: string) {}

  getProfile(): string {
    return `User: ${this.username} (ID: ${this.userId})`;
  }
}

@RegisterComponent("Dashboard", "1.5.0")
@Deprecated("Use DashboardV2 instead")
class Dashboard {
  constructor(public data: any) {}

  render(): string {
    return `Dashboard with ${Object.keys(this.data).length} items`;
  }
}

@RegisterComponent("Navigation", "3.0.0")
class Navigation {
  constructor(public items: string[]) {}

  render(): string {
    return `Nav: ${this.items.join(" → ")}`;
  }
}

// Component Registry System
class ComponentRegistry {
  private static components: Map<string, Function> = new Map();

  static register(name: string, constructor: Function): void {
    this.components.set(name, constructor);
  }

  static get(name: string): Function | undefined {
    return this.components.get(name);
  }

  static getComponentInfo(constructor: Function): {
    name?: string;
    version?: string;
    deprecated?: string;
  } {
    return {
      name: Reflect.getMetadata(CLASS_METADATA_KEY, constructor),
      version: Reflect.getMetadata(COMPONENT_VERSION_KEY, constructor),
      deprecated: Reflect.getMetadata("deprecated", constructor)
    };
  }

  static listAllComponents(): void {
    console.log("\n=== Registered Components ===");
    this.components.forEach((constructor, name) => {
      const info = this.getComponentInfo(constructor);
      const deprecated = info.deprecated ? ` [DEPRECATED: ${info.deprecated}]` : "";
      console.log(`- ${info.name} v${info.version}${deprecated}`);
    });
  }
}

// Auto-register components
ComponentRegistry.register("UserProfile", UserProfile);
ComponentRegistry.register("Dashboard", Dashboard);
ComponentRegistry.register("Navigation", Navigation);

// Usage
console.log("\n=== Creating Components ===");
const profile = new UserProfile(1, "alice_dev");
console.log(profile.getProfile());

const dashboard = new Dashboard({ users: 100, posts: 500 });
console.log(dashboard.render());

const nav = new Navigation(["Home", "Profile", "Settings"]);
console.log(nav.render());

// Get component metadata
console.log("\n=== Component Metadata ===");
const info = ComponentRegistry.getComponentInfo(UserProfile);
console.log(`UserProfile metadata:`, info);

// List all components
ComponentRegistry.listAllComponents();

// Output:
// ✓ Registered component: UserProfile v2.1.0
// ✓ Registered component: Dashboard v1.5.0
// ⚠ Deprecated: Dashboard - Use DashboardV2 instead
// ✓ Registered component: Navigation v3.0.0
//
// === Creating Components ===
// User: alice_dev (ID: 1)
// Dashboard with 2 items
// Nav: Home → Profile → Settings
//
// === Component Metadata ===
// UserProfile metadata: { name: 'UserProfile', version: '2.1.0', deprecated: undefined }
//
// === Registered Components ===
// - UserProfile v2.1.0
// - Dashboard v1.5.0 [DEPRECATED: Use DashboardV2 instead]
// - Navigation v3.0.0
