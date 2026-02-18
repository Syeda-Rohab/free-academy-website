/**
 * ============================================
 * DECORATORS IN TYPESCRIPT
 * Class, Method, Property, Parameter Decorators
 * ============================================
 */

// Enable decorators in tsconfig.json:
// "experimentalDecorators": true
// "emitDecoratorMetadata": true

// ============================================
// 1. CLASS DECORATORS
// ============================================

// Class decorator function
function LogClass(constructor: Function) {
  console.log(`Class ${constructor.name} created`);
}

@LogClass
class Product {
  constructor(public name: string, public price: number) {}
}

// Decorator factory (returns decorator)
function LogClassFactory(prefix: string) {
  return function(constructor: Function) {
    console.log(`${prefix}: ${constructor.name} created`);
  };
}

@LogClassFactory('[LOG]')
class Order {
  constructor(public id: number) {}
}

// Class decorator with metadata
function RegisterComponent(options: { name: string, version: string }) {
  return function(constructor: Function) {
    // Add metadata to class
    constructor.prototype.componentInfo = options;
    console.log(`Component registered: ${options.name} v${options.version}`);
  };
}

@RegisterComponent({ name: 'UserPanel', version: '1.0.0' })
class UserPanel {
  render() {
    console.log('Rendering UserPanel');
  }
}

// ============================================
// 2. METHOD DECORATORS
// ============================================

// Method decorator descriptor
function LogMethod(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function(...args: any[]) {
    console.log(`Calling ${propertyName} with args:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result:`, result);
    return result;
  };
  
  return descriptor;
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
  
  @LogMethod
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const calc = new Calculator();
calc.add(5, 3);
calc.multiply(4, 7);

// ============================================
// 3. PROPERTY DECORATORS
// ============================================

function LogProperty(target: any, propertyName: string) {
  console.log(`Property ${propertyName} defined on ${target.constructor.name}`);
}

function MaxLength(length: number) {
  return function(target: any, propertyName: string) {
    let value: string;
    
    Object.defineProperty(target, propertyName, {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length > length) {
          throw new Error(`${propertyName} cannot exceed ${length} characters`);
        }
        value = newValue;
      },
      enumerable: true,
      configurable: true
    });
  };
}

function ReadOnly(target: any, propertyName: string) {
  Object.defineProperty(target, propertyName, {
    writable: false,
    enumerable: true,
    configurable: true
  });
}

class User {
  @LogProperty
  name: string;
  
  @MaxLength(50)
  email: string;
  
  @ReadOnly
  createdAt: Date;
  
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }
}

const user = new User("John", "john@example.com");
// user.createdAt = new Date(); // ERROR - readonly

// ============================================
// 4. PARAMETER DECORATORS
// ============================================

function LogParameter(target: any, methodName: string, paramIndex: number) {
  console.log(`Parameter ${paramIndex} of ${methodName} is decorated`);
}

class Logger {
  logMessage(
    @LogParameter message: string,
    @LogParameter level: string
  ) {
    console.log(`[${level}] ${message}`);
  }
}

// ============================================
// 5. DECORATOR FACTORIES WITH METADATA
// ============================================

// Metadata storage
const metadataStore = new Map<string, Map<string, any>>();

function Metadata(key: string, value: any) {
  return function(target: any, propertyName?: string | symbol) {
    const className = target.constructor?.name || target.name;
    
    if (!metadataStore.has(className)) {
      metadataStore.set(className, new Map());
    }
    
    const classMetadata = metadataStore.get(className)!;
    const metadataKey = propertyName ? `${String(propertyName)}.${key}` : key;
    classMetadata.set(metadataKey, value);
  };
}

function GetMetadata(key: string) {
  return function(target: any, propertyName?: string | symbol) {
    const className = target.constructor?.name || target.name;
    const classMetadata = metadataStore.get(className);
    
    if (classMetadata) {
      const metadataKey = propertyName ? `${String(propertyName)}.${key}` : key;
      return classMetadata.get(metadataKey);
    }
    return undefined;
  };
}

@Metadata('table', 'users')
class DatabaseModel {
  @Metadata('column', true)
  @Metadata('primaryKey', true)
  id!: number;
  
  @Metadata('column', true)
  @Metadata('indexed', true)
  email!: string;
  
  @Metadata('column', true)
  password!: string;
  
  @Metadata('ignore', true)
  tempData!: string;
}

// ============================================
// 6. AUTHORIZATION DECORATOR
// ============================================

function RequireAuth(roles: string[]) {
  return function(
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(user: { role: string; name: string }, ...args: any[]) {
      if (!roles.includes(user.role)) {
        throw new Error(`Access denied. Required roles: ${roles.join(', ')}`);
      }
      console.log(`User ${user.name} authorized for ${propertyName}`);
      return originalMethod.apply(this, args);
    };
    
    return descriptor;
  };
}

function LogExecutionTime() {
  return function(
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {
      const start = performance.now();
      const result = originalMethod.apply(this, args);
      const end = performance.now();
      console.log(`${propertyName} executed in ${(end - start).toFixed(2)}ms`);
      return result;
    };
    
    return descriptor;
  };
}

class AdminService {
  @RequireAuth(['admin', 'superadmin'])
  @LogExecutionTime()
  deleteUser(userId: number): void {
    console.log(`Deleting user ${userId}...`);
    // Simulate operation
    for (let i = 0; i < 1000000; i++) {}
  }
  
  @RequireAuth(['admin', 'moderator', 'user'])
  viewProfile(userId: number): void {
    console.log(`Viewing profile ${userId}`);
  }
}

// ============================================
// 7. CACHING DECORATOR
// ============================================

const cache = new Map<string, any>();

function Cache(ttl: number = 5000) {
  return function(
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(...args: any[]) {
      const cacheKey = `${propertyName}:${JSON.stringify(args)}`;
      
      if (cache.has(cacheKey)) {
        const cached = cache.get(cacheKey);
        if (Date.now() - cached.timestamp < ttl) {
          console.log(`Cache hit for ${cacheKey}`);
          return cached.value;
        }
      }
      
      console.log(`Cache miss for ${cacheKey}, computing...`);
      const result = originalMethod.apply(this, args);
      cache.set(cacheKey, { value: result, timestamp: Date.now() });
      return result;
    };
    
    return descriptor;
  };
}

class DataService {
  @Cache(10000) // 10 second cache
  fetchData(query: string): string {
    console.log(`Fetching data for: ${query}`);
    // Simulate expensive operation
    for (let i = 0; i < 5000000; i++) {}
    return `Data for ${query}`;
  }
}

// ============================================
// 8. VALIDATION DECORATORS
// ============================================

interface ValidationRule {
  type: string;
  message: string;
  params?: any;
}

const validationRules = new Map<string, Map<string, ValidationRule[]>>();

function MinLength(min: number, message?: string) {
  return function(target: any, propertyName: string) {
    const className = target.constructor.name;
    
    if (!validationRules.has(className)) {
      validationRules.set(className, new Map());
    }
    
    const rules = validationRules.get(className)!;
    if (!rules.has(propertyName)) {
      rules.set(propertyName, []);
    }
    
    rules.get(propertyName)!.push({
      type: 'minLength',
      params: { min },
      message: message || `${propertyName} must be at least ${min} characters`
    });
  };
}

function MaxLengthValidation(max: number, message?: string) {
  return function(target: any, propertyName: string) {
    const className = target.constructor.name;
    
    if (!validationRules.has(className)) {
      validationRules.set(className, new Map());
    }
    
    const rules = validationRules.get(className)!;
    if (!rules.has(propertyName)) {
      rules.set(propertyName, []);
    }
    
    rules.get(propertyName)!.push({
      type: 'maxLength',
      params: { max },
      message: message || `${propertyName} must be at most ${max} characters`
    });
  };
}

function IsEmail(message?: string) {
  return function(target: any, propertyName: string) {
    const className = target.constructor.name;
    
    if (!validationRules.has(className)) {
      validationRules.set(className, new Map());
    }
    
    const rules = validationRules.get(className)!;
    if (!rules.has(propertyName)) {
      rules.set(propertyName, []);
    }
    
    rules.get(propertyName)!.push({
      type: 'email',
      message: message || `${propertyName} must be a valid email`
    });
  };
}

function IsRequired(message?: string) {
  return function(target: any, propertyName: string) {
    const className = target.constructor.name;
    
    if (!validationRules.has(className)) {
      validationRules.set(className, new Map());
    }
    
    const rules = validationRules.get(className)!;
    if (!rules.has(propertyName)) {
      rules.set(propertyName, []);
    }
    
    rules.get(propertyName)!.push({
      type: 'required',
      message: message || `${propertyName} is required`
    });
  };
}

// Validation decorator on class
function Validatable(target: any) {
  const originalConstructor = target;
  
  const newConstructor = function(...args: any[]) {
    const instance = new originalConstructor(...args);
    instance.validate = function() {
      const className = this.constructor.name;
      const rules = validationRules.get(className);
      const errors: string[] = [];
      
      if (rules) {
        for (const [prop, propRules] of rules.entries()) {
          const value = this[prop];
          
          for (const rule of propRules) {
            switch (rule.type) {
              case 'required':
                if (!value) errors.push(rule.message);
                break;
              case 'minLength':
                if (value && value.length < rule.params.min) {
                  errors.push(rule.message);
                }
                break;
              case 'maxLength':
                if (value && value.length > rule.params.max) {
                  errors.push(rule.message);
                }
                break;
              case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value && !emailRegex.test(value)) {
                  errors.push(rule.message);
                }
                break;
            }
          }
        }
      }
      
      return {
        isValid: errors.length === 0,
        errors
      };
    };
    
    return instance;
  };
  
  newConstructor.prototype = originalConstructor.prototype;
  return newConstructor as any;
}

@Validatable
class RegistrationForm {
  @IsRequired()
  @MinLength(3, 'Username must be at least 3 characters')
  username: string;
  
  @IsRequired()
  @IsEmail()
  email: string;
  
  @IsRequired()
  @MinLength(8, 'Password must be at least 8 characters')
  @MaxLengthValidation(100)
  password: string;
  
  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  
  validate!: () => { isValid: boolean; errors: string[] };
}

// ============================================
// 9. COMPLETE EXAMPLE - API CONTROLLER
// ============================================

function ApiController(basePath: string) {
  return function(constructor: Function) {
    constructor.prototype.basePath = basePath;
    console.log(`API Controller registered: ${basePath}`);
  };
}

function Route(method: 'GET' | 'POST' | 'PUT' | 'DELETE', path: string) {
  return function(
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    if (!target.routes) {
      target.routes = [];
    }
    target.routes.push({
      method,
      path,
      handler: descriptor.value
    });
  };
}

function ValidateBody() {
  return function(
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function(req: { body: any }, res: any) {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'Request body required' });
      }
      return originalMethod.apply(this, arguments);
    };
    
    return descriptor;
  };
}

@ApiController('/api/users')
class UserController {
  basePath!: string;
  
  @Route('GET', '/')
  getAll() {
    console.log(`${this.basePath} - GET all users`);
    return { users: [] };
  }
  
  @Route('GET', '/:id')
  getById(id: number) {
    console.log(`${this.basePath} - GET user ${id}`);
    return { user: { id } };
  }
  
  @Route('POST', '/')
  @ValidateBody()
  create(req: { body: any }) {
    console.log(`${this.basePath} - CREATE user`, req.body);
    return { created: req.body };
  }
  
  @Route('PUT', '/:id')
  @ValidateBody()
  update(id: number, req: { body: any }) {
    console.log(`${this.basePath} - UPDATE user ${id}`, req.body);
    return { updated: { id, ...req.body } };
  }
  
  @Route('DELETE', '/:id')
  delete(id: number) {
    console.log(`${this.basePath} - DELETE user ${id}`);
    return { deleted: id };
  }
}

// ============================================
// USAGE EXAMPLES
// ============================================

console.log('\n=== Calculator ===');
const calculator = new Calculator();
calculator.add(10, 5);

console.log('\n=== Admin Service ===');
const adminService = new AdminService();
try {
  adminService.deleteUser(123);
} catch (e) {
  console.error(e);
}

console.log('\n=== Data Service (Caching) ===');
const dataService = new DataService();
console.log(dataService.fetchData('query1'));
console.log(dataService.fetchData('query1')); // Cached

console.log('\n=== Validation ===');
const form = new RegistrationForm('jo', 'invalid', '123');
console.log(form.validate());

console.log('\n=== API Controller ===');
const userController = new UserController();
console.log('Routes:', (UserController as any).routes);

export {};
