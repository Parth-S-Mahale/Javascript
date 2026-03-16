const o = {
  a: 1,
  b: 2,
  __proto__: {
    b: 3, // <- b also exists in parent
    c: 4,
  },
};

console.log(o.a); // 1 <- (own property)
console.log(o.b); // 2 <- (own property SHADOWS the parent's b:3)
console.log(o.c); // 4 <- (not on o, found on parent)
console.log(o.d); // undefined <- (not found anywhere)

console.log(Object.hasOwn(o, 'a')); // true <- (own property)
console.log(Object.hasOwn(o, 'c')); // false <- (inherited from prototype)
