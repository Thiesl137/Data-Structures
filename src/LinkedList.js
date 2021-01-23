function LinkedList(values) {
  this.head = null;
  this.tail = null;

  if (arguments) {

    Object.values(arguments).forEach(value => {
      const node = new Node(value);

      if (this.head === null) {
        this.head = node;
        this.tail = this.head;
        this.back = this.head;
      } else {
        this.tail.next = node;
        this.back = this.tail;
        this.tail = node;
      }

    });
  }
}

function Node(val) {
  this.value = val;
  this.next = null;
  this.back = null;
}

// adds node to end of list
LinkedList.prototype.push = function(value) {
  const node = new Node(value);

  if (this.head === null) {
    this.head = node;
    node.back = this.head;
    this.tail = this.head;
  } else {
    node.back = this.tail;
    this.tail.next = node;
    this.tail = this.tail.next;
  }

};

// returns true if value is present in the list
LinkedList.prototype.contains = function(value, currentNode = this.head) {
  if (currentNode.value === value) return true;
  if (currentNode.next === null) return false;

  return LinkedList.prototype.contains(value, currentNode.next)
};

// Bonus
// adds node to beginning of list
LinkedList.prototype.addToHead = function(value) {
  const node = new Node(value);
  const currentHead = this.head;
  let newHead;

  if (this.head === null) {
    this.head = node;
    this.tail = this.head;
  } else {
    newHead = node
    newHead.next = currentHead;
    this.head = newHead;
  }
};

// Extra Bonus
// insert an item at the position specified
LinkedList.prototype.insert = function(value, position) {

  if (position === 0) {
    this.addToHead(value);
    return;
  }

  let currentNode = this.head;
  let previousNode;

  const node = new Node(value);

  for (let i = 0; i < position; i++){
    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  node.next = currentNode;
  previousNode.next = node;
};

// Extra Bonus
// remove first occurrence of value from list
LinkedList.prototype.removeItem = function(value) {

};

// Extra Bonus
// remove element at specified position in list
LinkedList.prototype.removePosition = function(position) {

};
