/*

Weekly Contest 178
Mar 01, 2020 at 5:30 AM
Duration    Score   Finish Time   AC      Ranking
1 h 30 m    3/19    0:16:11       1/4     3470/5907

*/

// let smallerNumbersThanCurrent = (A) => {
//     let N = A.length;
//     let ans = Array(N).fill(0);
//     for (let i = 0; i < N; ++i)
//         for (let j = 0; j < N; ++j)
//             if (i != j && A[i] > A[j])
//                 ++ans[i];
//     return ans;
// };
// console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
// console.log(smallerNumbersThanCurrent([6,5,4,8]));
// console.log(smallerNumbersThanCurrent([7,7,7,7]));


/*

count # of char at each position

0: {A, 5}
1: {B, 2}, {C, 3}
2: {B, 3}, {C, 2}

store max count # and max set (in case of tie)

WXYZ, XYZW

0: {W, 1}, {X, 1} tie
1: {X, 1}, {Y, 1}
2: {Y, 1}, {Z, 1}
3: {Z, 1}, {W, 1}

if tie, the move to next position and only consider the set from prev position

if still tie and at last position, then sort lexicographically and return min

*/

//
// incorrect algorithm
//

// let rankTeams = (A, m = {}, ranked = new Set()) => {
//     let M = A.length,
//         N = A[0].length;
//     let ans = Array(N);
//     for (let j = 0; j < N; ++j) {
//         for (let i = 0; i < M; ++i) {
//             if (!m[j])
//                 m[j] = {};
//             if (!m[j][A[i][j]])
//                 m[j][A[i][j]] = 1;
//             else
//                 ++m[j][A[i][j]];
//         }
//     }
//     for (let j = 0; j < N; ++j) {
//         let k = j, max = 0, best = new Set();
//         do {
//             let next;
//             if (best.size == 0)
//                 next = Object.entries(m[k]);
//             else
//                 next = Object.entries(m[k]).filter(entry => best.has(entry[0]));
//             best = new Set();
//             for (let [c, cnt] of next) {
//                 if (max == cnt) {
//                     best.add(c);
//                 }
//                 if (max < cnt) {
//                     max = cnt;
//                     best = new Set([c]);
//                 }
//             }
//         } while (best.size > 1 && ++k < N);
//         let B = [...best].sort();
//         for (let x of B) {
//             if (!ranked.has(x)) {
//                 ans[j] = x;
//                 ranked.add(x);
//                 break;
//             }
//         }
//     }
//     return ans.join('');
// };
// // console.log(rankTeams(["ABC","ACB","ABC","ACB","ACB"]));
// console.log(rankTeams(["WXYZ","XYZW"])); // algo is incorrect!
// // console.log(rankTeams(["ZMNAGUEDSJYLBOPHRQICWFXTVK"]));
// // console.log(rankTeams(["BCA","CAB","CBA","ABC","ACB","BAC"]));
// // console.log(rankTeams(["M","M","M","M"]));


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */

//
// incorrect algorithm -- think through recursion better to avoid inifite loop or wrong answer
//
let isSubPath = (head, root) => {
    let go = (tail, root) => {
        if (!root)
            return false;
        let ok = false;
        if (root.val == tail.val) {
            if (!tail.next)
                return true;
            ok |= go(tail.next, root.left);
            ok |= go(tail.next, root.right);
        }
        if (root.val == head.val) {
            ok |= go(head.next, root.left);
            ok |= go(head.next, root.right);
        } else {
            ok |= go(head, root);
        }
        return ok;
    };
    return go(head, root);
};
let root = new TreeNode(1);
root.left = new TreeNode(5);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
console.log(isSubPath(head, root));