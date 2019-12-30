class Node{
    // node keeps track of current data and data
    constructor(data, next = null) {
        this.data = data,
        this.next = next
    }
}

// linked list keeps track of where the head is
class LinkedList{
    // Linkedlists hold the head and length
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }

    addToHead(value) {
        const newNode = { value }; // 1
        newNode.next = this.head;  // 2
        this.head = newNode;       // 3
        this.length++;
        return this;
    }
}