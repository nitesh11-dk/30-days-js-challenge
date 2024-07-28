
// Activity 1: Basic Recursion
// Task 1: Factorial of a Number javascript

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}


console.log(factorial(5)); 


// Task 2: Fibonacci Number javascript

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(fibonacci(5)); 


// Activity 2: Recursion with Arrays
// Task 3: Sum of All Elements in an Array javascript
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1));
}


console.log(sumArray([1, 2, 3, 4, 5])); 



// Task 4: Maximum Element in an Array javascript


function maxElement(arr) {
    if (arr.length === 1) return arr[0];
    return Math.max(arr[0], maxElement(arr.slice(1)));
}

console.log(maxElement([1, 5, 3, 9, 2])); 




// Activity 3: String Manipulation with Recursion
// Task 5: Reverse a String javascript

function reverseString(str) {
    if (str === "") return "";
    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello")); 


// Task 6: Check if a String is a Palindrome javascript
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str.charAt(0) !== str.charAt(str.length - 1)) return false;
    return isPalindrome(str.substring(1, str.length - 1));
}




console.log(isPalindrome("racecar")); 




// Activity 4: Recursive Search
// Task 7: Binary Search on a Sorted Array javascript

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) return -1;
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
    return binarySearch(arr, target, mid + 1, end);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); 




// Task 8: Count Occurrences of a Target Element in an Array javascript
function countOccurrences(arr, target) {
    if (arr.length === 0) return 0;
    return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}



console.log(countOccurrences([1, 2, 3, 2, 2], 2));


// Activity 5: Tree Traversal (Optional)
// Task 9: In-order Traversal of a Binary Tree javascriptCopy code
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inorderTraversal(node) {
    if (node === null) return;
    inorderTraversal(node.left);
    console.log(node.value);
    inorderTraversal(node.right);
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);


inorderTraversal(root);

// Task 10: Calculate the Depth of a Binary Tree
// javascript
function treeDepth(node) {
    if (node === null) return 0;
    return 1 + Math.max(treeDepth(node.left), treeDepth(node.right));
}

// Test case
let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);


console.log(treeDepth(root2));