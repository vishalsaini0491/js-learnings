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

## 3. `new String("Vishal")` Explanation

### Code:

```javascript
const name = new String("Vishal");
```

### What it does:

* Creates an **instance of the `String` object wrapper**.
* It is **not** a primitive string.
* The result is an object with the internal string value `"Vishal"`.

### Type Comparison:

```javascript
const objStr = new String("Vishal");
const primStr = "Vishal";

console.log(typeof objStr);      // "object"
console.log(typeof primStr);     // "string"
console.log(objStr instanceof String); // true
console.log(objStr.valueOf());   // "Vishal" (primitive)
```

### When to use:

* Avoid using `new String()`, `new Number()`, or `new Boolean()` in practice.
* These object wrappers are rarely necessary and may lead to confusion.

---

## 4. Summary

* `new` in JavaScript creates **instances of objects** via constructors, not raw memory.
* `new String("...")` creates a **String object**, not a primitive string.
* Prefer using primitive types (`"text"`, `42`, `true`) directly unless object behavior is explicitly required.
