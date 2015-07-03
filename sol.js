// 1
var twoSum = function(nums, target) {
    var numHash = {};
    for (var i = 0; i < nums.length; i++) {
        if (!numHash[target - nums[i]]) {
            numHash[nums[i]] = i + 1;
        } else {
            return [numHash[target - nums[i]], i + 1];
        }
    }
};

// 2
var addTwoNumbers = function(l1, l2) {
    var l3 = new ListNode(null), head = l3, l1Value, l2Value, sum = 0, overflow = 0;
    
    while (l1 !== null || l2 !== null || overflow !== 0) {
        if (l1 !== null) {
            l1Value = l1.val || 0;
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2Value = l2.val || 0;
            l2 = l2.next;
        }
        sum = l1Value + l2Value + overflow;
        if (sum > 9) {
            sum = sum - 10;
            overflow = 1;
        } else {
            overflow = 0;
        }
        l3.next = new ListNode(sum);
        l3 = l3.next;
        l1Value = l2Value = sum = 0;
    }
    return head.next;
};

// 20
var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    var parenStack = [],
    parenMap = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    },
    leftParen = Object.keys(parenMap);
    
    for (var i = 0; i < s.length; i++) {
        if (leftParen.indexOf(s.charAt(i)) > -1) {
            parenStack.push(s.charAt(i));
        } else {
            if (!parenStack.length) {
                return false;
            }
            if (parenMap[parenStack.pop()] !== s.charAt(i)) {
                return false;
            }
        }
    }
    return (parenStack.length) ? false : true;
};

// 136
var singleNumber = function(nums) {
    var singleNum = 0;
    for (var i = 0; i < nums.length; i++) {
        singleNum = singleNum ^ nums[i];
    }
    return singleNum;
};

// 206
var reverseList = function(head) {
    var temp = null,
        next = null;
    while (head !== null) {
        next = head.next;
        head.next = temp;
        temp = head;
        head = next;
    }
    return temp;
};

// 217
var containsDuplicate = function(nums) {
    var numHash = {};
    for (var i = 0; i < nums.length; i++) {
        if (numHash[nums[i]]) {
            return true;
        } else {
            numHash[nums[i]] = 1;
        }
    }
    return false;
};
