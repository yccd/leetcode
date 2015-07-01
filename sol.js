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