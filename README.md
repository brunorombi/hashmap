# HashMap Implementation (The Odin Project)

## 📌 Overview

This project is a custom implementation of a **HashMap** data structure in JavaScript, built as part of **The Odin Project** curriculum.

The goal is to understand how hash maps work internally, including:

* Hashing functions
* Collision handling (via separate chaining with linked lists)
* Dynamic resizing based on load factor

---

## ⚙️ Features

* Custom hash function using prime multiplication
* Collision handling with **Linked Lists**
* Dynamic resizing when load factor exceeds threshold
* Full set of standard HashMap operations:

  * `set(key, value)`
  * `get(key)`
  * `has(key)`
  * `remove(key)`
  * `length()`
  * `clear()`
  * `keys()`
  * `values()`
  * `entries()`

---

## 🧠 How It Works

### Hashing

Keys (strings only) are converted into indices using a hash function:

* Uses a prime number (`31`)
* Applies modulo during iteration to prevent overflow
* Ensures index stays within bucket bounds

---

### Collision Handling

When multiple keys map to the same index:

* A **Linked List** is used at each bucket
* Each node stores a `[key, value]` pair

---

### Load Factor & Resizing

* Initial capacity: **16**
* Load factor: **0.75**
* When exceeded:

  * Capacity is doubled
  * All entries are rehashed into new buckets

---

## 📂 Project Structure

```
.
├── hashmap.js      # Main HashMap implementation
├── linkedList.js   # LinkedList used for collision handling
├── index.js        # Testing file
```

---

## 🚀 Usage Example

```javascript
import { HashMap } from "./hashmap.js";

const map = new HashMap();

map.set("apple", "red");
map.set("banana", "yellow");

console.log(map.get("apple")); // "red"
console.log(map.has("banana")); // true

map.remove("banana");

console.log(map.keys());   // ["apple"]
console.log(map.values()); // ["red"]
console.log(map.entries()); // [["apple", "red"]]
```

---

## 🧪 Testing

The implementation was tested using the dataset provided by The Odin Project:

* Inserts multiple key-value pairs
* Overwrites existing keys
* Triggers resizing
* Removes entries
* Validates all methods after resizing

---

## ⚠️ Limitations

* Keys are limited to **strings only**
* Hash function is simple (not cryptographic)
* Does not preserve insertion order
* No shrinking (downsize) implemented

---

## 📈 Possible Improvements

* Implement dynamic shrinking (capacity reduction)
* Support different key types (numbers, objects)
* Replace linked list with more advanced structures (e.g., trees)
* Improve hashing algorithm

---

## 🎯 Learning Outcomes

* Deep understanding of hash maps internals
* Handling collisions effectively
* Managing dynamic data structures
* Writing clean, modular JavaScript code

---

## 🙌 Acknowledgements

This project was built as part of **The Odin Project** curriculum.

---
