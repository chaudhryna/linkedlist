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
console.log(list.contains('turtle'));

list.pop();
console.log(list.toString());
console.log(list.contains('turtle'));

console.log(list.head());
console.log(list.tail());
console.log(list.size());

console.log(list.find('sheep'));

console.log(list.at(7));
console.log(list.find('rabbit'));

console.log(list.toString());
