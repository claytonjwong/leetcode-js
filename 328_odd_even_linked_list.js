/*
 * 328. Odd Even Linked List
 *
 * Q: https://leetcode.com/problems/odd-even-linked-list/
 * A: https://leetcode.com/problems/odd-even-linked-list/discuss/635092/Javascript-and-C%2B%2B-solutions
 */

// concise
let oddEvenList = (head, evenHead = null) => {
    if (!head)
        return null;
    let odd = head,
        even = evenHead = head.next;
    while (even && even.next)
        odd = odd.next = even.next,
        even = even.next = odd.next;
    odd.next = evenHead;
    return head;
};

// verbose
let oddEvenList = (head, oddTail = null, evenHead = null) => {
    if (!head)
        return null;
    let odd = oddTail = head,
        even = evenHead = head.next;
    while (odd && even)
        if (odd.next == even)
            odd = odd.next = even.next,
            oddTail = odd ? odd : oddTail;
        else if (even.next == odd)
            even = even.next = odd.next;
    oddTail.next = evenHead;
    return head;
};