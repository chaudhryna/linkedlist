class Node {
	constructor(value, nextNode) {
		this.value = value;
		this.nextNode = null;
	}
}

class LinkedList {
	constructor() {
		this.headNode = null;
	}
	append(value) {
		// adds a new node containing value to the end of the list
		const newNode = new Node(value);
		if (!this.headNode) {
			this.headNode = newNode;
			return 
		}
		let currentNode = this.headNode;
		while (currentNode.nextNode) {
			currentNode = currentNode.nextNode;
		}
		currentNode.nextNode = newNode;
	}

	prepend(value) {
		// adds a new node containing value to the start of the list
		const newHeadNode = new Node(value);
		newHeadNode.nextNode = this.headNode;
		this.headNode = newHeadNode;
	}

	size() {
		// returns the total number of nodes in the list
		let numNodes = 0;
		let currentNode = this.headNode;
		while (currentNode) {
			numNodes++;
			currentNode = currentNode.nextNode;
		}
		return numNodes;
	}

	head() {
		// returns the first node in the list
		return `Currently the head is: ${this.headNode.value}`;
	}

	tail() {
		// returns the last node in the list
		let tailNode;
		let currentNode = this.headNode;
		while (currentNode) {
			if (currentNode.nextNode === null) {
				tailNode = currentNode;
			}
			currentNode = currentNode.nextNode;
		}
		return `Currently the tail is: ${tailNode.value}`;
	}

	at(index) {
		// returns the node at the given index
		while (currentNode) {
			if (currentNode.nextNode === null) {
				
			}
			currentNode = currentNode.nextNode;
		}
		
	}

	pop() {
		// removes the last element from the list
		if (!this.headNode) {
			return;
		} 
		let currentNode = this.headNode;
		while (currentNode.nextNode.nextNode) {
			currentNode = currentNode.nextNode;
		}
		currentNode.nextNode = null;
	}

	contains(value) {
		// returns true if the passed in value is in the list and otherwise returns false
	}

	find(value) {
		// returns the index of the node containing value, or null if not found
	}

	toString() {
		// represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
		let currentNode = this.headNode;
		let strNodes = '';

		while (currentNode) {
			strNodes += `(${currentNode.value}) -> `;
			currentNode = currentNode.nextNode;
		}
		strNodes += `null`;
		return strNodes;
	}
}

module.exports = { Node, LinkedList };
