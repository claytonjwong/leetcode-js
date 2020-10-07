/*
 * 61. Rotate List
 *
 * Q: https://leetcode.com/problems/rotate-list/
 * A: https://leetcode.com/problems/rotate-list/discuss/152985/Javascript-Python3-C%2B%2B-Self-Documented
 */

let rotateRight = (oldHead, K, N = 0) => {
    for (let it = oldHead; it; ++N, it = it.next);
    let rotate = N ? K % N : 0;
    if (!rotate)
        return oldHead;
    let tail = new ListNode(-1, oldHead);
    for (let pivot = N - rotate; pivot--; tail = tail.next);
    let newHead = tail.next; tail.next = null;
    for (tail = newHead; tail.next; tail = tail.next);
    tail.next = oldHead;
    return newHead;
};
