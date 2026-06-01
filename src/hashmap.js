import { LinkedList } from "./linkedList.js";

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity);
    this.size = 0;
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
      this.size++;
      return;
    }
    if(!this.buckets[index].append(key, value)) {
      this.size++;
      if(this.size > (this.capacity * this.loadFactor)) {
        this.resize();
      }
     }
  }

  resize() {
    const oldHash = this.buckets;
    
    this.capacity = this.capacity * 2;

    this.buckets = new Array(this.capacity);

    this.size = 0;

    oldHash.forEach(bucket => {
      
      if(bucket !== undefined) {
        let current = bucket.list;
        while(current !== null) {
          this.set(current.key, current.value)
          current = current.nextNode;
        }
      }
    })
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
      const removed = this.buckets[index].remove(key);

      if(removed) this.size--;

      return removed;
      
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

  clear() {
    this.buckets.fill(undefined);
  }

  keys() { 
    const result = [];

    this.buckets.forEach((bucket) => {
      if(bucket) {
        result.push(...bucket.keys());
      }
    })

    return result;
  }

  values() {
    const result = [];

    this.buckets.forEach((bucket) => {
      if(bucket) {
        result.push(...bucket.values());
      }
    })

    return result;
  }

  entries() {
    const result = [];

    this.buckets.forEach((bucket) => {
      if(bucket) {
        result.push(...bucket.entries());
      }
    })

    return result;
  }
}