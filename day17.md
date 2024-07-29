# DAY- 17 


### Activity 1: Linked List

#### Task 1: Implement a Node class
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

#### Task 2: Implement a LinkedList class
```javascript
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  remove() {
    if (!this.head) return null;
    if (!this.head.next) {
      const value = this.head.value;
      this.head = null;
      return value;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    const value = current.next.value;
    current.next = null;
    return value;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
```

### Activity 2: Stack

#### Task 3: Implement a Stack class
```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) return null;
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) return null;
    return this.items[this.items.length - 1];
  }
}
```

#### Task 4: Use the Stack class to reverse a string
```javascript
function reverseString(str) {
  const stack = new Stack();
  for (const char of str) {
    stack.push(char);
  }
  let reversedStr = '';
  while (stack.peek() !== null) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}


console.log(reverseString("hello")); 
```

### Activity 3: Queue

#### Task 5: Implement a Queue class
```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) return null;
    return this.items.shift();
  }

  front() {
    if (this.items.length === 0) return null;
    return this.items[0];
  }
}
```

#### Task 6: Simulate a simple printer queue
```javascript
class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  addPrintJob(job) {
    this.queue.enqueue(job);
  }

  processPrintJobs() {
    while (this.queue.front() !== null) {
      const job = this.queue.dequeue();
      console.log(`Printing: ${job}`);
    }
  }
}


const printer = new PrinterQueue();
printer.addPrintJob("Document 1");
printer.processPrintJobs();

```

### Activity 4: Binary Tree

#### Task 7: Implement a TreeNode class
```javascript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
```

#### Task 8: Implement a BinaryTree class
```javascript
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (!node.right) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  inOrderTraversal(node = this.root) {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
}


const tree = new BinaryTree();
tree.insert(5);

tree.insert(1);
tree.inOrderTraversal(); 
```

### Activity 5: Graph (Optional)

#### Task 9: Implement a Graph class
```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
console.log(graph.bfs('A')); 
```
