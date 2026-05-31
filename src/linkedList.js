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
        if (current.key === key) {
          this.update(current, value);
          return;
        }
        current = current.nextNode;
      }

      if (current.key === key) {
        this.update(current, value);
        return;
      }

      current.nextNode = node;
    }
  }

  update(node, value) {
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

  findValue(key) {
    let current = this.list;

    while (current !== null) {
      if (current.key === key) {
        return current.value;
      }
      current = current.nextNode;
    }
    return null;
  }

  contains(key) {
    if (!this.list) return false;

    let current = this.list;

    while (current !== null) {
      if (current.key === key) return true;
      current = current.nextNode;
    }

    return false;
  }

  remove(key) {
    if (!this.list) return false;

    let previous = null;
    let current = this.list;

    while (current !== null) {
      if (current.key === key) {
        if(previous === null) {
          this.list = current.nextNode;
          return true;
        } else {
          previous.nextNode = current.nextNode;
          return true;
        }
      }
      previous = current;
      current = current.nextNode;
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
      nodeString += ` ( ${item.key.toString()}, ${item.value.toString()}} ) ->`;
      item = item.nextNode;
    }

    return `${nodeString.slice(0, -3)} -> null`;
  }

  keys() {
    const arr = [];

    let current = this.list;

    while(current !== null) {
      arr.push(current.key);

      current = current.nextNode;
    }
    
    return arr;
  }

  values() {
    const arr = [];

    let current = this.list;

    while(current !== null) {
      arr.push(current.value);

      current = current.nextNode;
    }
    
    return arr;
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
  }
}
