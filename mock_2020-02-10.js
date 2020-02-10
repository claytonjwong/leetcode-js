/*

Facebook- Online Assessment
Completed February 10, 2020 1:09 PM
Your interview score of 7.61/10 beats 86% of all users.

Q1: https://leetcode.com/problems/merge-two-sorted-lists/
A1: https://leetcode.com/problems/merge-two-sorted-lists/discuss/505426/Javascript-and-C%2B%2B-solutions

Q2: https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/
A2: https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/discuss/505436/Javascript-and-C%2B%2B-solutions

*/

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let mergeTwoLists = (a, b) => {
    let sentinel = new ListNode(0), head = sentinel;
    for (; a && b; head = head.next) {
        head.next = new ListNode(0);
        if (a.val < b.val)
            head.next.val = a.val, a = a.next;
        else
            head.next.val = b.val, b = b.next;
    }
    head.next = a || b;
    return sentinel.next;
};

let a = new ListNode(1);
a.next = new ListNode(3);
a.next.next = new ListNode(5);

let b = new ListNode(2);
b.next = new ListNode(4);
b.next.next = new ListNode(6);

let c = mergeTwoLists(a, b);
while (c) {
    console.log(c.val);
    c = c.next;
}



let maxSubArrayLen = (A, target, ans = 0) => {
    let N = A.length;
    let S = Array(N + 1).fill(0);
    for (let i = 1; i <= N; ++i)
        S[i] = S[i - 1] + A[i - 1];
    for (let i = 0; i < N; ++i)
        for (let j = i + 1; j <= N; ++j)
            if (S[j] - S[i] == target)
                ans = Math.max(ans, j - i);
    return ans;
};