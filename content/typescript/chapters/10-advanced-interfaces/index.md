# Chapter 10: Advanced Interfaces

**Duration**: 30 minutes | **Difficulty**: Intermediate

---

## Topics

### Index Signatures

```typescript
interface StringArray {
  [index: number]: string;
}

interface Dictionary {
  [key: string]: number;
}

interface Mixed {
  named: string;
  [key: string]: string | number;
}
```

### Interface Extensions

```typescript
interface Animal { name: string; }
interface Mammal extends Animal { hasHair: boolean; }
interface Dog extends Mammal { breed: string; }
```

### Declaration Merging

```typescript
interface Box {
  width: number;
}

interface Box {
  height: number;
}

// Combined: { width: number; height: number; }
```

### Cross-type Compatibility

```typescript
interface Point2D { x: number; y: number; }
interface Point3D { x: number; y: number; z: number; }

let p2d: Point2D = { x: 1, y: 2 };
let p3d: Point3D = { x: 1, y: 2, z: 3 };

p2d = p3d;  // OK - 3D has all 2D properties
p3d = p2d;  // Error - 2D missing z
```

---

## Next Steps

Continue to Chapter 11: Async & External
