// do not use any native array methods
function Queue() {
  this.storage = {};
  this.index = 0;

}

Queue.prototype.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++
};

Queue.prototype.dequeue = function() {
  if (this.index === 0) return undefined;

  this.index--
  const dequeued = this.storage[0];
  delete this.storage[0]
  const newStore = {};

  for (const index in this.storage) {
    newStore[index - 1] = this.storage[index];
  }
  this.storage = newStore;
  return dequeued;
};


const queue = new Queue();

queue.enqueue(0);
queue.enqueue('test');
queue.enqueue(true);
queue.enqueue(() => 'test');
console.log(Object.keys(queue.storage)[0])

queue.dequeue();
