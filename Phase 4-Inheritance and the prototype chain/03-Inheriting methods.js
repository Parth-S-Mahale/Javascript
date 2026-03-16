const parent = {
  value: 2,
  method() {
    return this.value + 1; // 'this' = whoever calls this fn
  },
};

const child = {
    __proto__: parent,
}

console.log(parent.method()); // 3 (this = parent, parent.value = 2)
console.log(child.method()); // 3 (this = child, child.value -> parent.value = 2)

child.value = 10 // add own 'value' to child
console.log(child.method()); // 11 (this = child, child.value = 10)
// parent.value is still 2 — child shadows it
