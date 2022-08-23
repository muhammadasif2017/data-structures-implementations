class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peak() {
    if (!this.isEmpty()) return this.top;
    return undefined;
  }

  pop() {
    if (this.top) {
      if (this.top === this.bottom) {
        this.bottom = null;
      }
      const holdingPointer = this.top;
      this.top = holdingPointer.next;
      this.length--;
      return holdingPointer;
    }
    return null;
  }

  push(value) {
    if (value !== undefined) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
      }
      this.length++;
      return this;
    }
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    }
    return false;
  }
}
