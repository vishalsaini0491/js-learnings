# JavaScript `new` Keyword vs C++ `new` Keyword

## 1. Purpose of `new` in C++ vs JavaScript

| Feature             | C++                          | JavaScript                        |
| ------------------- | ---------------------------- | --------------------------------- |
| `new` keyword use   | Allocates memory on the heap | Creates an instance of an object  |
| Memory management   | Manual (`delete` required)   | Automatic (garbage collected)     |
| Construction target | Class/struct constructor     | Constructor function or ES6 class |

---

## 2. Behavior of `new` in JavaScript

Using `new` in JavaScript performs the following operations:

1. Creates a new empty object.
2. Sets the prototype of the object to the constructor's prototype.
3. Binds `this` within the constructor to the new object.
4. Executes the constructor function.
5. Returns the created object (unless another object is explicitly returned).

### Example:

```javascript
function Person(name) {
    this.name = name;
}

const john = new Person("John");
console.log(john.name); // Output: John
```

---

## 3. Object Wrapper Types in JavaScript

### What Are They?

Object wrapper types are built-in constructors (`String`, `Number`, `Boolean`) that temporarily or explicitly **wrap primitive values**, allowing them to behave like objects.

### Why Do They Exist?

| Purpose                     | Description                                                          |
| --------------------------- | -------------------------------------------------------------------- |
| Method Access on Primitives | Allow primitives to use methods (e.g., `"abc".toUpperCase()`)        |
| Autoboxing                  | JS auto-wraps primitives in objects to enable property/method access |
| Custom Object Behavior      | Rarely used, enables extended object-like behavior on primitives     |
| Specification Compliance    | Maintains ECMAScript consistency                                     |

### Example:

```javascript
const str = "Vishal";
console.log(str.toUpperCase()); // Internally: new String("Vishal").toUpperCase()
```

---

## 4. `new String("Vishal")` Explanation

### Code:

```javascript
const name = new String("Vishal");
```

### What it does:

* Creates an **instance of the `String` object wrapper**.
* The result is an **object**, not a primitive.
* Enables access to string methods permanently.

### Type Comparison:

```javascript
const objStr = new String("Vishal");
const primStr = "Vishal";

console.log(typeof objStr);      // "object"
console.log(typeof primStr);     // "string"
console.log(objStr instanceof String); // true
console.log(objStr.valueOf());   // "Vishal"
```

### When to Use:

* Generally discouraged.
* Object wrappers introduce inconsistency and unnecessary complexity.

---

## 5. Summary

* `new` in JavaScript is used for **creating instances of objects**, not raw memory allocation.
* `new String("...")` wraps a primitive in a `String` object, enabling method/property access.
* JavaScript automatically applies **temporary object wrappers** (autoboxing) to primitives when needed.
* Prefer using **primitive literals**; let JavaScript manage object wrapping internally for performance and clarity.
