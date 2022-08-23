class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    if (value !== undefined) {
      const newNode = new Node(value);
      if (this.first === null) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length++;
    }
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is Empty';
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer;
  }

  isEmpty() {
    return this.first === null;
  }
}

const myQueue = new Queue();
console.log(myQueue.enqueue('Asif'));
console.log(myQueue.enqueue('Saqlain'));
console.log(myQueue.enqueue('Adeel'));
console.log(myQueue.dequeue());