// 1
let twoSum = (nums, target) => {
  let numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(target - nums[i])) return [numMap.get(target - nums[i]) + 1, i + 1];
    numMap.set(nums[i], i);
  }
};

// 13
let romanToInt = s => {
    let total = 0;
    let romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    
    for (let i = 0; i < s.length; i++) {
        let nextCharValue = romanMap[s[i + 1]] || 0;
        if (nextCharValue > romanMap[s[i]]) {
            total += nextCharValue - romanMap[s[i]];
            i++;
        } else {
            total += romanMap[s[i]];
        }
    }
    return total;
};

// 20
let isValid = s => {
  let parenMap = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  }
  let parenStack = [];
  
  for (let paren of s) {
    if ([')', '}', ']'].indexOf(paren) !== -1) {
      if (parenMap[parenStack.pop()] !== paren) return false;
    } else parenStack.push(paren);  
  }
  return parenStack.length === 0;
};

// 21
let mergeTwoLists = (l1, l2) => {
  if (!l1 && !l2) return null;
  
  let head = new ListNode(0);
  let node = head;
  
  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val > l2.val) {
        node.next = l2;
        l2 = l2.next;
      } else {
        node.next = l1;
        l1 = l1.next;
      }
    } else if (l1) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;      
    }
    node = node.next;
  } 
  return head.next;
};


// 26
let removeDuplicates = nums => {
  if (!nums.length) return 0;
  let prevNum = nums[0];
  let j = 1;
  for (let i = 1; i < nums.length; i++) {
    if (prevNum !== nums[i]) {
      prevNum = nums[i];
      let tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
      j++;
    }
  }
  nums.length = j;
  return nums.length;
};

// 27
let removeElement = (nums, val) => {
    for (let i = 0, j = 0; i < nums.length; i++) {
        if (val !== nums[i]) {
            let tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
            j++;
        }
    }
    nums.length = j;
    return nums.length;
};

// 70
let climbStairs = n => {
    let fibCache = 1;
    let result = 1;
    
    while (n-- > 1) {
      let tmp = result;
      result += fibCache;
      fibCache = tmp;
    }
    return result;
};

// 83
let deleteDuplicates = head => {
    if (!head) return null;
    let ptr = head;
    let tmp = head;
    let current = head;
    
    while (ptr) {
      while (tmp && tmp.val === current.val) {
        tmp = tmp.next;
      }
      current = tmp;
      ptr.next = tmp;
      ptr = ptr.next;
    }
    return head;
};

// 100
let isSameTree = (p, q) => {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 102
let levelOrder = root => {
    let preOrder = (root, order) => {
      if (!root) return; 
      else {
          if (!result[order]) result[order] = [];
          result[order].push(root.val);
      }
      preOrder(root.left, order + 1);
      preOrder(root.right, order + 1);
    }
  
    let result = [];
    preOrder(root, 0);
    return result;
};

// 104
let maxDepth = root => {
    if (root === null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// 111
let minDepth = root => {
    let depthFn = (root, depth) => {
      if (!root) return Number.MAX_VALUE;
      if (!root.left && !root.right) return depth + 1;
      return Math.min(depthFn(root.left, depth + 1), depthFn(root.right, depth + 1));
    }
    if (!root) return 0;
    return depthFn(root, 0);
};

// 112
let hasPathSum = (root, sum) => {
  let preOrder = (root, runningSum) => {
    if (!root) return false;
    if (!root.left && !root.right) return (runningSum + root.val) === sum;
    return (preOrder(root.left, runningSum + root.val) || 
        (preOrder(root.right, runningSum + root.val)));
  }
  
  if (!root) return false;
  return preOrder(root, 0);
};

// 118
let generate = numRows => {
  let result = [[1], [1, 1]];

  if (numRows === 0) return [];
  if (numRows < 3) return result.slice(0, numRows);

  while (numRows > result.length) {
    let prevArray = result[result.length - 1];
    let nextRow = [1];
    for (let i = 1; i < result.length; i++) {
      nextRow.push(prevArray[i - 1] + prevArray[i]);
    }
    nextRow.push(1);
    result.push(nextRow);
  }
  return result;
};

// 119
let getRow = rowIndex => {
  let pascalCache = [[1], [1, 1]];
  if (rowIndex <= 1) {
    return pascalCache[rowIndex];
  }
  let prev = pascalCache[1];
  let result = [];
  
  while (rowIndex > 1) {
    result = [1];
    for (let i = 1; i < prev.length; i++) {
      result.push(prev[i - 1] + prev[i]);
    }
    result.push(1);
    prev = result;
    rowIndex--;
  }
  return result;
};

// 125
let isPalindrome = s => {
  s = s.replace(/\W/g, '').toUpperCase();
  
  for (let i = 0, j = s.length - 1; i < s.length / 2; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
};

// 155
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(x) {
    let lastIdx = this.stack.length - 1;
    if (this.minStack[lastIdx] > x || this.minStack[lastIdx] === undefined) this.minStack.push(x);
    else this.minStack.push(this.minStack[lastIdx]);
    this.stack.push(x);
  }
  pop() {
    // should throw error if length === 0, but leetcode doesn't require it.
    this.stack.pop();
    this.minStack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.minStack[this.stack.length - 1];
  }
}

// 169
let majorityElement = nums => {
  // moore's voting algorithm
  let counter = 1;
  return nums.reduce((majority, num, index) => {
    if (num === majority) counter++;
    else {
      if (counter !== 0) counter--;
      else majority = num;
    }
    return majority;
  });
};

// 171
let titleToNumber = s => {
  let strCode = 0;
  let index = s.length - 1;
  
  for (let ch of s) {
    strCode += (ch.charCodeAt(0) - 64) * Math.pow(26, index--); 
  }
  return strCode;
};

// 203
let removeElements = (head, val) => {
  if (!head) return null;
  
  let ptr = new ListNode(0);
  let tmpHead = ptr;
  
  while (head) {
    if (head.val !== val) {
      ptr.next = new ListNode(head.val);
      ptr = ptr.next;
    }  
    head = head.next;
  }
  return tmpHead.next;
};

// 206
let reverseList = head => {
    let prev = null;
    while (head) {
        let tmp = head.next;
        head.next = prev;
        prev = head;
        head = tmp;
    }
    return prev;
};

// 217
let containsDuplicate = nums => {
    let numMap = new Map();
    for (let num of nums) {
      if (numMap.has(num)) return true;
      numMap.set(num, 1);
    }
    return false;
};

// 219
let containsNearbyDuplicate = (nums, k) => {
  let numMap = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (numMap.has(num) && i - numMap.get(num) <= k) return true;
    else numMap.set(num, i);
  }
  return false;
};

// 226
let invertTree = root => {
    let head = root;
    let preOrder = root => {
        if (root === null) return null;
        let tmp = root.left;
        root.left = root.right;
        root.right = tmp;
        preOrder(root.left);
        preOrder(root.right);
    }
    preOrder(root);
    return head;
};

// 232
class Queue {
  constructor() {
    this.stack = [];
    this.secStack = [];
  }
  push(x) {
    this.secStack = [];
    this.stack.push(x);
    let tmp = this.stack.slice();
    while (this.stack.length) {
      this.secStack.push(this.stack.pop());
    }
    this.stack = tmp;
  }
  pop() {
    this.stack.pop();
    return this.secStack.pop();
  }
  peek() {
    return this.secStack[this.stack.length - 1];
  }
  empty() {
    return this.stack.length === 0;
  }
}

// 235
let lowestCommonAncestor = (root, p, q) => {
  if (!root) return null;
  let smallerRoot = (p.val > q.val) ? q : p;
  let largerRoot = (p.val > q.val) ? p : q;
  
  let preOrder = (root, smaller, larger) => {
    if (!root) return;
    if ((root.val === smaller.val) || (root.val === larger.val)) return root;
    if ((root.val > smaller.val) && (root.val < larger.val)) return root;
    if (root.val > larger.val) {
      return preOrder(root.left, smallerRoot, largerRoot);
    } else {
      return preOrder(root.right, smallerRoot, largerRoot);
    }
  }
  return preOrder(root, smallerRoot, largerRoot);
};

// 237
let deleteNode = node => {
    node.val = node.next.val;
    node.next = node.next.next;
};

// 242
let isAnagram = (s, t) => {
    let charMap = new Map();
  
    for (let ch of s) {
      if (charMap.has(ch)) {
        charMap.set(ch, charMap.get(ch) + 1);
      } else {
        charMap.set(ch, 1);
      }
    } 
    
    for (let ch of t) {
      if (charMap.has(ch)) {
        if (charMap.get(ch) === 1) {
          charMap.delete(ch);
        } else {
          charMap.set(ch, charMap.get(ch) - 1); 
        }
      } else {
        return false;
      }
    }
    return charMap.size === 0;
};

// 257
let binaryTreePaths = root => {
  let paths = [];
  let preOrder = (root, path) => {
    if (!root) return;
    path = path.concat(root.val);
    if (!root.left && !root.right) paths.push(path.join('->'));  
    preOrder(root.left, path);
    preOrder(root.right, path);
  }
  preOrder(root, []);
  return paths;
};

// 258 
let addDigits = num => {
    let nStr = num.toString();
    
    while (nStr.length > 1) {
      nStr = nStr.split('').reduce((memo, n) => memo += +n, 0).toString();
    }
    return +nStr;
};

// 283
let moveZeroes = nums => {
    for (let i = 0, j = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let tmp = nums[j];
            nums[j] = nums[i];
            nums[i] = tmp;
            j++;
        }
    }
};

// 290
let wordPattern = (pattern, str) => {
  let charMap = new Map();
  let wordMap = new Map();
  let words = str.split(' ');
  let idx = 0;
  
  if (pattern.length !== words.length) return false;
  
  for (ch of pattern) {
    if (charMap.has(ch)) {
      if (charMap.get(ch) !== words[idx]) return false;
    } else charMap.set(ch, words[idx]);
    
    if (wordMap.has(words[idx])) {
      if (wordMap.get(words[idx]) !== ch) return false;  
    } else wordMap.set(words[idx], ch);
    
    idx++;
  }
  return true;
};

// 292
let canWinNim = n => n % 4 !== 0;