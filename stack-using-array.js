class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}
class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    if (this.array[this.array.length - 1] !== undefined) {
      return this.array[this.array.length - 1]
    }
    return null;
  }

  push(value) {
    if (value !== undefined) {
      this.array.push(value);
    }
    return this;
  }

  pop() {
    return this.array.pop();
  }

  isEmpty() {
    return this.array.length === 0;
  }
}

const myStack = new Stack();
myStack.push('Oranges');
myStack.push('Apples');
console.log(myStack.push('Bananas'));
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack);
console.log(myStack.isEmpty());
