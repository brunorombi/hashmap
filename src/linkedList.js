export class LinkedList {
  constructor() {
    this.list = null;
  }

  append(key, value) {
    const node = new Node(key, value);

    if (this.list === null) {
      this.list = node;
    } else {
      let current = this.list;

      while (current.nextNode !== null) {
        if(current.key = node.key) {
            this.update(current, value)
            return;
        }
        current = current.nextNode;
      }
      current.nextNode = node;
    }
  }

  update(node, value) {
    const newValue = value;
    node.value = value;
  }

  size() {
    let size = 0;
    if (this.list === null) return size;

    size = 1;
    let item = this.list;

    while (item.nextNode !== null) {
      item = item.nextNode;
      size++;
    }

    return size;
  }

  pop() {
    if (!this.list) return undefined;

    const head = this.list;
    this.list = head.nextNode;

    return head.value;
  }

  contains(key) {
    if (!this.list) return undefined;

    let item = this.list;

    while (item) {
      if (item.key === key) return true;

      item = item.nextNode;
    }

    return false;
  }

  findIndex(key) {
    if (!this.list) return undefined;

    let item = this.list;
    let index = 0;

    while (item) {
      if (item.key === key) return index;
      
      index++;
      item = item.nextNode;
    }
    return -1;
  }

    toString() {
    let nodeString = "";

    let item = this.list;
    while (item) {
      nodeString += ` ( ${item.key.toString()}, ${item.value.toString()}} ) ->`
      item = item.nextNode;
    }

    return `${nodeString.slice(0, -3)} -> null`;
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
  }
}