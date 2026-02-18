/**
 * ============================================
 * MODULES AND NAMESPACES IN TYPESCRIPT
 * ES6 Modules, Import/Export, Declaration Files
 * ============================================
 */

// ============================================
// 1. ES6 MODULES - EXPORT PATTERNS
// ============================================

// Named exports
export const PI = 3.14159;
export const E = 2.71828;

export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

// Export interfaces and types
export interface Point {
  x: number;
  y: number;
}

export type Vector = Point[];

// Export classes
export class Calculator {
  constructor(private name: string) {}
  
  calculate(operation: string, a: number, b: number): number {
    switch (operation) {
      case 'add': return a + b;
      case 'multiply': return a * b;
      default: throw new Error('Unknown operation');
    }
  }
}

// ============================================
// 2. DEFAULT EXPORTS
// ============================================

// Default export
export default class Logger {
  private prefix: string;
  
  constructor(prefix: string = 'LOG') {
    this.prefix = prefix;
  }
  
  log(message: string): void {
    console.log(`[${this.prefix}] ${message}`);
  }
  
  error(message: string): void {
    console.error(`[${this.prefix}] ERROR: ${message}`);
  }
  
  warn(message: string): void {
    console.warn(`[${this.prefix}] WARN: ${message}`);
  }
}

// ============================================
// 3. RE-EXPORTS
// ============================================

// Re-export from another module
export { add, multiply } from './03-advanced-generics';

// Re-export with alias
export { Calculator as MathCalculator } from './03-advanced-generics';

// Re-export all
export * from './01-advanced-oop';

// ============================================
// 4. TYPE-ONLY EXPORTS
// ============================================

// Export types only (removed at runtime)
export type { Point as Point2D, Vector as Vector2D } from './03-advanced-generics';

// ============================================
// 5. MODULE AUGMENTATION
// ============================================

// Declare module augmentation
declare global {
  interface Array<T> {
    customFilter(predicate: (item: T) => boolean): T[];
  }
}

// Implement the augmentation
Array.prototype.customFilter = function<T>(predicate: (item: T) => boolean): T[] {
  return this.filter(predicate);
};

// ============================================
// 6. NAMESPACES
// ============================================

// Namespace definition
namespace MathUtils {
  export const PI = 3.14159;
  export const E = 2.71828;
  
  export function add(a: number, b: number): number {
    return a + b;
  }
  
  export function multiply(a: number, b: number): number {
    return a * b;
  }
  
  // Nested namespace
  export namespace Geometry {
    export function circleArea(radius: number): number {
      return PI * radius * radius;
    }
    
    export function rectangleArea(width: number, height: number): number {
      return width * height;
    }
    
    export namespace ThreeD {
      export function sphereVolume(radius: number): number {
        return (4/3) * PI * radius * radius * radius;
      }
      
      export function cubeVolume(side: number): number {
        return side * side * side;
      }
    }
  }
}

// Usage
const area = MathUtils.Geometry.circleArea(5);
const volume = MathUtils.Geometry.ThreeD.sphereVolume(3);

// ============================================
// 7. NAMESPACE MERGING
// ============================================

// First declaration
namespace Validation {
  export function isEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
}

// Second declaration (merged)
namespace Validation {
  export function isNumber(value: string): boolean {
    return /^\d+$/.test(value);
  }
}

// Third declaration (merged)
namespace Validation {
  export function isNotEmpty(value: string): boolean {
    return value.trim().length > 0;
  }
}

// All functions are available
Validation.isEmail("test@example.com");
Validation.isNumber("123");
Validation.isNotEmpty("hello");

// ============================================
// 8. NAMESPACES WITH CLASSES
// ============================================

namespace Database {
  export interface ConnectionConfig {
    host: string;
    port: number;
    username: string;
    password: string;
  }
  
  export class Connection {
    constructor(private config: ConnectionConfig) {}
    
    connect(): void {
      console.log(`Connecting to ${this.config.host}:${this.config.port}`);
    }
    
    disconnect(): void {
      console.log('Disconnected');
    }
  }
  
  export class QueryBuilder {
    constructor(private tableName: string) {}
    
    select(columns: string[]): string {
      return `SELECT ${columns.join(', ')} FROM ${this.tableName}`;
    }
    
    insert(data: Record<string, any>): string {
      const keys = Object.keys(data).join(', ');
      const values = Object.values(data).map(v => `'${v}'`).join(', ');
      return `INSERT INTO ${this.tableName} (${keys}) VALUES (${values})`;
    }
  }
  
  // Factory function
  export function createConnection(config: ConnectionConfig): Connection {
    return new Connection(config);
  }
}

// Usage
const db = Database.createConnection({
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'secret'
});

const queryBuilder = new Database.QueryBuilder('users');
console.log(queryBuilder.select(['id', 'name', 'email']));

// ============================================
// 9. DECLARATION FILES (.d.ts)
// ============================================

// Example: math-utils.d.ts
/*
declare module 'math-utils' {
  export const PI: number;
  export const E: number;
  
  export function add(a: number, b: number): number;
  export function subtract(a: number, b: number): number;
  export function multiply(a: number, b: number): number;
  export function divide(a: number, b: number): number;
  
  export class Calculator {
    constructor(name: string);
    calculate(operation: string, a: number, b: number): number;
  }
  
  export default Calculator;
}
*/

// ============================================
// 10. MODULE DECLARATION FOR THIRD-PARTY
// ============================================

// Example: declaring a module without types
/*
declare module 'some-library' {
  interface SomeLibraryOptions {
    debug?: boolean;
    timeout?: number;
  }
  
  class SomeLibrary {
    constructor(options?: SomeLibraryOptions);
    connect(): Promise<void>;
    disconnect(): void;
    query(sql: string): Promise<any[]>;
  }
  
  export = SomeLibrary;
}
*/

// ============================================
// 11. GLOBAL AUGMENTATION
// ============================================

// Augment Window interface
declare global {
  interface Window {
    appVersion: string;
    debugMode: boolean;
    showNotification(message: string): void;
  }
}

// Implementation (in actual code)
window.appVersion = '1.0.0';
window.debugMode = true;
window.showNotification = (message: string) => {
  console.log(`Notification: ${message}`);
};

// ============================================
// 12. AMBIENT MODULES
// ============================================

// Declare external modules
declare module 'analytics' {
  export function track(event: string, data?: Record<string, any>): void;
  export function identify(userId: string, traits?: Record<string, any>): void;
  export function page(name: string): void;
  
  export default class Analytics {
    constructor(writeKey: string);
    track(event: string, data?: Record<string, any>): this;
    identify(userId: string, traits?: Record<string, any>): this;
    flush(): Promise<void>;
  }
}

// ============================================
// 13. UMD MODULES
// ============================================

// Universal Module Definition
/*
export as namespace MyLibrary;

export function greet(name: string): string;
export function farewell(name: string): string;

export = MyLibrary;

declare namespace MyLibrary {
  function greet(name: string): string;
  function farewell(name: string): string;
}
*/

// ============================================
// 14. DYNAMIC IMPORTS
// ============================================

async function loadModule(moduleName: string) {
  // Dynamic import with type assertion
  const module = await import('./03-advanced-generics') as typeof import('./03-advanced-generics');
  return module;
}

async function loadModuleOnDemand() {
  if (Math.random() > 0.5) {
    const { Calculator } = await import('./03-advanced-generics');
    return new Calculator('dynamic');
  }
  return null;
}

// ============================================
// 15. COMPLETE EXAMPLE - PLUGIN SYSTEM
// ============================================

// Plugin interface
export interface Plugin {
  name: string;
  version: string;
  initialize(): void;
  execute(...args: any[]): any;
}

// Plugin registry namespace
namespace PluginSystem {
  export class Registry {
    private plugins: Map<string, Plugin> = new Map();
    
    register(plugin: Plugin): void {
      this.plugins.set(plugin.name, plugin);
      plugin.initialize();
      console.log(`Plugin registered: ${plugin.name} v${plugin.version}`);
    }
    
    unregister(name: string): boolean {
      return this.plugins.delete(name);
    }
    
    get(name: string): Plugin | undefined {
      return this.plugins.get(name);
    }
    
    execute(name: string, ...args: any[]): any {
      const plugin = this.plugins.get(name);
      if (!plugin) {
        throw new Error(`Plugin not found: ${name}`);
      }
      return plugin.execute(...args);
    }
    
    list(): string[] {
      return Array.from(this.plugins.keys());
    }
  }
  
  // Base plugin class
  export abstract class BasePlugin implements Plugin {
    constructor(
      public name: string,
      public version: string
    ) {}
    
    abstract initialize(): void;
    abstract execute(...args: any[]): any;
    
    protected log(message: string): void {
      console.log(`[${this.name}] ${message}`);
    }
  }
}

// Example plugins
class LoggerPlugin extends PluginSystem.BasePlugin {
  constructor() {
    super('logger', '1.0.0');
  }
  
  initialize(): void {
    this.log('Logger initialized');
  }
  
  execute(level: string, message: string): void {
    console.log(`[${level.toUpperCase()}] ${message}`);
  }
}

class MathPlugin extends PluginSystem.BasePlugin {
  constructor() {
    super('math', '1.0.0');
  }
  
  initialize(): void {
    this.log('Math plugin initialized');
  }
  
  execute(operation: string, a: number, b: number): number {
    switch (operation) {
      case 'add': return a + b;
      case 'subtract': return a - b;
      case 'multiply': return a * b;
      case 'divide': return a / b;
      default: throw new Error('Unknown operation');
    }
  }
}

// Usage
const registry = new PluginSystem.Registry();
registry.register(new LoggerPlugin());
registry.register(new MathPlugin());

console.log('Registered plugins:', registry.list());
registry.execute('logger', 'INFO', 'Hello World');
console.log('2 + 3 =', registry.execute('math', 'add', 2, 3));

// ============================================
// 16. COMMONJS INTEROP
// ============================================

// Import CommonJS module
// import fs = require('fs');

// Export for CommonJS
// export = MyClass;

// ============================================
// 17. SIDE EFFECT IMPORTS
// ============================================

// Import for side effects only (polyfills, CSS, etc.)
// import 'polyfill';
// import './styles.css';

// ============================================
// 18. CONDITIONAL EXPORTS
// ============================================

// Package.json exports field example:
/*
{
  "exports": {
    ".": {
      "import": "./dist/esm/index.js",
      "require": "./dist/cjs/index.js",
      "types": "./dist/types/index.d.ts"
    },
    "./utils": {
      "import": "./dist/esm/utils.js",
      "require": "./dist/cjs/utils.js"
    }
  }
}
*/

export {};
