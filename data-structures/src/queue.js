class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(element) {
    this.data.push(element)
  }

  dequeue() {
    let rValue = this.data[0];
    this.data.splice(0, 1);
    return rValue;
  }

  peek() {
    return this.data[0];
  }

  size() {
    return this.data.length;
  }
}
