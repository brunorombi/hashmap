import { LinkedList } from "./linkedList.js";

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);

    if (this.buckets[index] === undefined) {
      this.buckets[index] = new LinkedList();
      this.buckets[index].append(key, value);
      console.log(this.buckets[index].toString());
      return;
    }
    this.buckets[index].append(key, value);
    console.log(this.buckets[index].toString());
  }

  get(key) {
    const index = this.hash(key);
    if (this.buckets[index] !== undefined) {
      return this.buckets[index].findValue(key);
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    let hasKey = false;
    if (this.buckets[index] !== undefined) {
      hasKey = this.buckets[index].contains(key);
    }
    return hasKey;
  }

  remove(key) {
    const index = this.hash(key);
    if (this.buckets[index] !== undefined) {
      return this.buckets[index].remove(key);
    }
    return false;
  }

  length() {
    const keys = this.buckets.reduce((sum, current) => {
      if(!current) return sum;
      return sum + current.size();
    }, 0);
    return keys;
  }
}

const hashMap = new HashMap();
hashMap.set("Rama", 18);
// hashMap.set("Sita", 122);
// hashMap.set("bruno", 1120);
// console.log(hashMap.remove("Rama"));

// console.log(hashMap.buckets[3])

console.log(hashMap.length());