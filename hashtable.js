class Hashtable {
  constructor(size = 7) {
    this.datamap = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.datamap.length;
    }
    return hash;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.datamap[index]) {
      this.datamap[index] = [];
    }
    this.datamap[index].push([key, value]);
    return this;
  }
  get(key) {
    let index = this._hash(key);
    if (this.datamap[index]) {
      for (let i = 0; i < this.datamap[index].length; i++) {
        if (this.datamap[index][i][0] === key) {
          return this.datamap[index][i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    let allKeys = [];
    for (let i = 0; i < this.datamap.length; i++) {
      if (this.datamap[i]) {
        for (let j = 0; j < this.datamap[i].length; j++) {
          allKeys.push(this.datamap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
  printTable() {
    //if only the full indexes
    /*
    for (let i = 0; i < this.datamap.length; i++) {
      if (this.datamap[i]) {
        console.log(i + ':' + this.datamap[i]);
      }
    }
    */

    //all the indexes
    for (let i = 0; i < this.datamap.length; i++) {
      console.log(i + ':' + this.datamap[i]);
    }
  }
}
function itemInCommon(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true;
  }
  return false;
}
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 5];
itemInCommon(arr1, arr2);

let myHashtable = new Hashtable();
myHashtable.set('bolts', 1400);
myHashtable.set('washers', 50);
