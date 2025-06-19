const { LinkedList } = require('./LinkedList');

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

list.prepend('rabbit');

console.log(list.toString());

list.pop();
console.log(list.toString());

console.log(list.head());
console.log(list.tail());
