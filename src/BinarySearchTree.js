function BinarySearchTree(value) {
  this.value = value;
  this.count = 1
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.add = function(value, currentNode = this) {
  
  if (currentNode.value > value && currentNode.left !=  null) {
    BinarySearchTree.prototype.add(value, currentNode.left);
  }

  if (currentNode.value < value && currentNode.right  !=  null) {
    BinarySearchTree.prototype.add(value, currentNode.right);
  }

  if (currentNode.value === value) {
    currentNode.count++
    return;
  }
  
  if (currentNode.value > value && currentNode.left === null) {
    currentNode.left = new BinarySearchTree(value)
    return;
  }

  if (currentNode.value < value && currentNode.right  ===  null) {
    currentNode.right = new BinarySearchTree(value)
    return;
  }

};

BinarySearchTree.prototype.contains = function(value, currentNode = this) {
  console.log(value, currentNode.value)
  if (currentNode.value === value) {
    console.log('IN HERE');
    return true;
  }
  if (currentNode.left === null && currentNode.right === null) return false; 
  if (currentNode.value > value) return BinarySearchTree.prototype.contains(value, currentNode.left);
  if (currentNode.value < value) return BinarySearchTree.prototype.contains(value, currentNode.right);
};

// applies the callback in the order of depth first (preorder)
BinarySearchTree.prototype.depthFirstPre = function(callback, currentNode = this) {
  callback(currentNode.value);
  if (currentNode.left) BinarySearchTree.prototype.depthFirstPre(callback, currentNode.left)  
  if (currentNode.right) BinarySearchTree.prototype.depthFirstPre(callback, currentNode.right)
};

// applies the callback in the order of depth first (inorder)
BinarySearchTree.prototype.depthFirstIn = function(callback, currentNode = this) {

  if (currentNode.left) BinarySearchTree.prototype.depthFirstIn(callback, currentNode.left);
  callback(currentNode.value)
  if (currentNode.right) BinarySearchTree.prototype.depthFirstIn(callback, currentNode.right);

};

// applies the callback in the order of depth first (postorder)
BinarySearchTree.prototype.depthFirstPost = function(callback, currentNode = this) {
  if (currentNode.left) BinarySearchTree.prototype.depthFirstPost(callback, currentNode.left);
  if (currentNode.right) BinarySearchTree.prototype.depthFirstPost(callback, currentNode.right);
  
  callback(currentNode.value)
};

// applies the callback in the order of breath first (level order)
BinarySearchTree.prototype.breadthFirst = function(callback) {

  const queue = [this];
  while (queue.length != 0) {
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const node = queue.pop();
      callback(node.value);
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
      
    }
  } 
};

// Extra Bonus
// Return the minimum stored value
BinarySearchTree.prototype.min = function() {

};

// Extra Bonus
// Return the maximum stored value
BinarySearchTree.prototype.max = function() {

};

// Extra Bonus
// Return the height of the tree
BinarySearchTree.prototype.height = function() {
  
};

// Extra Bonus
// Remove an item from the tree and ensure that the children of the item are properly repositioned
BinarySearchTree.prototype.remove = function(item) {

};

const binarySearchTree = new BinarySearchTree(5)
const array = []
const func = function(value){ array.push(value); };
const logFunc = function(value){console.log(value); };

binarySearchTree.add(2);
binarySearchTree.add(3);
binarySearchTree.add(7);
binarySearchTree.add(6);

// console.log(binarySearchTree)

// binarySearchTree.depthFirstIn(logFunc)
// binarySearchTree.depthFirstPre(func);
// binarySearchTree.depthFirstIn(func)
// binarySearchTree.depthFirstPost(func)
binarySearchTree.breadthFirst(func)

console.log(array);



// console.log(binarySearchTree)