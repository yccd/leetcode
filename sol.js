// 136
var singleNumber = function(nums) {
    var a = 0;
    for (var i = 0; i < nums.length; i++) {
        a = a ^ nums[i];
    }
    return a;
};

// 206
var reverseList = function(head) {
    var temp = null; next = null;
    while(head !== null) {
        next = head.next;
        head.next = temp;
        temp = head;
        head = next;
    }
    return temp;
};