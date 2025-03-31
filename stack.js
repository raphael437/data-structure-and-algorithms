class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;

    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    this.length--;
    return temp;
  }
  printstack() {
    let temp = this.top;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
  gettop() {
    if (this.top === null) return console.log('empty stack');
    return console.log(`top= ${this.top.value}`);
  }
  getlength() {
    return console.log(`the length=${this.length}`);
  }
  makeempty() {
    if (this.top === null) return console.log('already empty');
    this.top = null;
    this.length = 0;
  }
}
let myStack = new Stack(11);
myStack.push(22);
