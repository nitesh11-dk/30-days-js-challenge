
### Day 18: Algorithms

#### Activity 1: Sorting Algorithms

**Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.**

```javascript
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let array1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sorted Array:", bubbleSort(array1));
```

**Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.**

```javascript
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // Swap the found minimum element with the first element
        let temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let array2 = [64, 25, 12, 22, 11];
console.log("Selection Sorted Array:", selectionSort(array2));
```

**Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.**

```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let array3 = [10, 7, 8, 9, 1, 5];
console.log("Quicksorted Array:", quickSort(array3));
```

#### Activity 2: Searching Algorithms

**Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.**

```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let array4 = [2, 3, 4, 10, 40];
let target1 = 10;
console.log("Linear Search Index:", linearSearch(array4, target1));
```

**Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.**

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let array5 = [2, 3, 4, 10, 40];
let target2 = 10;
console.log("Binary Search Index:", binarySearch(array5, target2));
```

#### Activity 3: String Algorithms

**Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.**

```javascript
function countOccurrences(str) {
    let counts = {};
    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    return counts;
}

let string1 = "hello world";
console.log("Character Counts:", countOccurrences(string1));
```

**Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.**

```javascript
function lengthOfLongestSubstring(s) {
    let map = new Map();
    let left = 0, right = 0;
    let maxLength = 0;

    while (right < s.length) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);
        }
        map.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }

    return maxLength;
}

let string2 = "abcabcbb";
console.log("Length of Longest Substring Without Repeating Characters:", lengthOfLongestSubstring(string2));
```

#### Activity 4: Array Algorithms

**Task 8: Write a function to rotate an array by k positions. Log the rotated array.**

```javascript
function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}

let array6 = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log("Rotated Array:", rotateArray(array6, k));
```

**Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.**

```javascript
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

let array7 = [1, 3, 5];
let array8 = [2, 4, 6];
console.log("Merged Sorted Array:", mergeSortedArrays(array7, array8));
```

#### Activity 5: Dynamic Programming (Optional)

**Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.**

```javascript
function fibonacci(n) {
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp.slice(0, n + 1);
}

let n1 = 10;
console.log("Fibonacci Sequence:", fibonacci(n1));
```

**Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.**

```javascript
function knapsack(weights, values, capacity) {
    let n = weights.length;
    let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][capacity];
}

let weights = [1, 3, 4, 5];
let values = [1, 4, 5, 7];
let capacity = 7;
console.log("Maximum Value in Knapsack:", knapsack(weights, values, capacity));
```
