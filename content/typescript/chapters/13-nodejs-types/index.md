# Chapter 13: Node.js Type Definitions

**Duration**: 35 minutes | **Difficulty**: Advanced

---

## Topics

### Built-in Types

```typescript
import * as fs from 'fs';
import * as path from 'path';
import { EventEmitter } from 'events';

// fs types
fs.readFile('file.txt', (err: NodeJS.ErrnoException | null, data: Buffer) => {
  if (err) throw err;
  console.log(data.toString());
});

// path types
const fullPath: string = path.join('/usr', 'local', 'bin');
```

### Express Typing

```typescript
import { Request, Response, NextFunction } from 'express';

app.get('/users/:id', (req: Request, res: Response) => {
  const id: string = req.params.id;
  res.json({ id });
});

// Middleware typing
function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`${req.method} ${req.path}`);
  next();
}
```

### Third-party Types

```typescript
// Install: npm install -D @types/lodash
import _ from 'lodash';

const result = _.chunk([1, 2, 3, 4, 5], 2);

// Custom type augmentation
declare module 'express' {
  interface Request {
    user?: { id: string; name: string };
  }
}
```

### Module Augmentation

```typescript
// global.d.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      API_KEY: string;
    }
  }
}
```

---

## Summary

You've completed the TypeScript course! Review all chapters and practice with real projects.
