// do not use any native array methods
function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++
};

Stack.prototype.pop = function() {
  this.index--
  const popped = this.storage[this.index]
  delete this.storage[this.index]
  return popped;
};