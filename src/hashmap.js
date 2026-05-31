import { LinkedList } from "./linkedList.js";

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity);
  }

  set(key, value) {
    const index = this.hash(key);

    if(this.buckets[index] === undefined) {
        this.buckets[index] = new LinkedList();
        this.buckets[index].append(key, value);
        console.log(this.buckets[index].toString());
        return;
    }
    this.buckets[index].append(key, value);
    console.log(this.buckets[index].toString());
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }
}

const hashMap = new HashMap();
hashMap.set("Rama", 18);
hashMap.set("Sita", 122);
hashMap.set("Rama", 'Novo valor');