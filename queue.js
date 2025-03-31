//enque add from the last (push=0(1))
//deque remove from the first (shift=0(1))
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }

    this.length--;
    return temp;
  }
  getlength() {
    return console.log(`length=${this.length}`);
  }
  printqueue() {
    let temp = this.first;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
  getfirst() {
    if (this.first === null) return console.log('first=null');
    else {
      return console.log(`first=${this.first.value}`);
    }
  }
  getlast() {
    if (this.last === null) return console.log('last=null');
    else {
      return console.log(`last=${this.last.value}`);
    }
  }
  makeEmpty() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
}
let myQueue = new Queue(4);
