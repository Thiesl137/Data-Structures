function HashTable() {
  this.SIZE = 16;
  this.FILLED = 0;

  // the array will be instantiated as [undefined, undefined....]
  // pop() and push() shouldn't be used on the storage
  this.storage = new Array(this.SIZE)

  for(let i = 0; i < this.storage.length; i++) {
    this.storage[i] = {};
  }

  this.checkSize = () => {

    if (this.FILLED < this.SIZE * 0.25 && this.SIZE > 16){
      this.SIZE /= 2;
      const dubArray = new Array(this.SIZE);
  
      for(let i = 0; i < this.SIZE; i++) {
        dubArray[i] = {};
      }
      
      this.storage.forEach(obj => {
        for(const key in obj) {
          if (Object.keys(obj).length){
            dubArray[hashCode(key, this.SIZE)][key] = obj[key];
          }
        }
      })

      this.storage = dubArray;
    }
  
    if (this.FILLED == (this.SIZE * 0.75) - 1) {
      this.SIZE *= 2;
      const dubArray = new Array(this.SIZE);
  
      for(let i = 0; i < this.SIZE; i++) {
        dubArray[i] = {};
      }
      
      this.storage.forEach(obj => {
        for(const key in obj) {
          dubArray[hashCode(key, this.SIZE)][key] = obj[key];
        }
      })
    
      this.storage = dubArray;
    }
  
  }
  
}


// stores a value in the storage array
// hint: use the hash function to determine where in the array to store the value
HashTable.prototype.set = function(key, value) {

  if (Object.values(this.storage[hashCode(key, this.SIZE)]).length === 0){
    this.FILLED++;
  }
  this.storage[hashCode(key, this.SIZE)][key] = value;

  this.checkSize();
};

// return a previously stored value
HashTable.prototype.get = function(key) {
  // console.log('16 --> ', hashCode(key, 16))
  // console.log('32 --> ', hashCode(key, 32))
  
  return this.storage[hashCode(key, this.SIZE)][key];
};

// returns and removes a key from the hash table
HashTable.prototype.remove = function(key) {
  if (Object.values(this.storage[hashCode(key, this.SIZE)]).length === 0){
    return undefined;
  }


  const removed = this.storage[hashCode(key, this.SIZE)][key];
  delete this.storage[hashCode(key, this.SIZE)][key]

  if (Object.values(this.storage[hashCode(key, this.SIZE)]).length === 0){
    this.FILLED--
  }

  this.checkSize();

  return removed;
};

// returns a number between 0 and size that is unique* and generated from the the inputted string
function hashCode(string, size){
  let hash = 0;
  if (string.length == 0) return hash;
  for (let i = 0; i < string.length; i++) {
    const letter = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + letter;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % size ;
}

// const hashTable = new HashTable();

// for (let i = 0; i < 30; i++) {
//   const key = 'key ' + i;
//   const value = 'value ' + i;
//   hashTable.set(key, value);
// }

// for (let i = 0; i < 30; i++) {
//   const key = 'key ' + i;
//   const value = 'value ' + i;
//   hashTable.get(key) === value;
// }

// console.log(hashTable)

const hashTable2 = new HashTable();

console.log(hashTable2)

for (let i = 0; i < 13; i++) {
  const key = 'key ' + i;
  const value = 'value ' + i;
  hashTable2.set(key, value);
}

console.log(hashTable2)

for (let i = 0; i < 6; i++) {
  const key = 'key ' + i;
  hashTable2.remove(key);
}

console.log(hashTable2)