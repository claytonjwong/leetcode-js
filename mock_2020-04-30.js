/*
 * Facebook- On-Site Interview
 * CompletedApril 30, 2020 7:50 AM
 * 83%
 * Your interview score of 6.00/10 beats 83% of all users.
 * Time Spent: 1 hour 56 minutes 23 seconds
 * Time Allotted: 2 hours
 */

 /*
  * 67. Add Binary
  *
  * Q: https://leetcode.com/problems/add-binary/
  * A: https://leetcode.com/problems/add-binary/discuss/606766/Javascript-and-C%2B%2B-solutions
  */
let addBinary = (a, b, carry = 0, ans = []) => {
    let M = a.length,
        N = b.length;
    let A = a.split('').reverse(),
        B = b.split('').reverse();
    for (let i = 0; i < Math.max(M, N); ++i) {
        let x = Number(i < M && A[i] == '1')
              + Number(i < N && B[i] == '1')
              + carry;
        ans.push(x & 1);
        carry = Number(x > 1);
    }
    if (carry)
        ans.push(1);
    return ans.reverse().join('');
};
console.log(addBinary('1010', '1011'));

// incorrect and complicated algorithm
// let leastInterval = (A, K, cnt = new Map(), last = [], total = 0, steps = 0) => {
//     A.forEach(x => {
//         ++total;
//         cnt.set(x, 1 + (cnt.get(x) || 0))
//     });
//     while (total) {
//         let found = false;
//         let del = new Set();
//         for (let [x, freq] of [...cnt.entries()].sort((a, b) => b[1] - a[1])) { // greedy descending frequency
//             if (!freq) {
//                 del.add(x);
//                 continue;
//             }
//             if (last.indexOf(x) > -1)
//                 continue;
//             found = true;
//             --total;
//             cnt.set(x, -1 + cnt.get(x));
//             last.push(x);
//             if (last.length > K)
//                 last.shift();
//             ++steps;
//         }
//         for (let x of del)
//             cnt.delete(x);
//         if (!found) { // idle
//             last.push('?');
//             if (last.length > K)
//                 last.shift();
//             ++steps;
//         }
//     }
//     return steps;
// };
// console.log(leastInterval(['A','A','A','B','B','B'], 0));

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
};

// incorrect algorithm
// let serialize = (root, A = []) => {
//     let dfs = root => {
//         if (!root)
//             return 0;
//         return 1 + Math.max(dfs(root.left), dfs(root.right));
//     };
//     let max = dfs(root);
//     let go = (root, depth = 0) => {
//         if (!root) {
//             if (depth < max)
//                 A.push('null');
//             return;
//         }
//         A.push(root.val);
//         go(root.left, depth + 1);
//         go(root.right, depth + 1);
//     };
//     go(root);
//     let N = A.length;
//     return A.join(',');
// };

// incorrect algorithm
// let serialize = (root, A = []) => {
//     let q = [ root ];
//     while (q.length) {
//         let K = q.length;
//         let next = [];
//         while (K--) {
//             let cur = q.shift();
//             if (!cur) {
//                 next.push('null');
//                 continue;
//             }
//             next.push(cur.val);
//             q.push(cur.left);
//             q.push(cur.right);
//         }
//         if (next.every(x => x == 'null'))
//             break;
//         A.push(...next);
//     }
//     return A.join(',');
// };

// let root = new TreeNode(5);
// root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.right.left = new TreeNode(2);
// root.right.left.left = new TreeNode(3);
// root.right.left.right = new TreeNode(1);
// root.right.right = new TreeNode(4);

// console.log(serialize(root));

// incorrect algorithm
// let deserialize = s => {
//     if (!s.length)
//         return null;
//     let A = s.split(',');
//     let N = A.length;
//     let next = i => A[i] == 'null' ? null : new TreeNode(A[i]);
//     let root = next(0);
//     let roots = Array(N).fill(null)
//     roots[0] = root;
//     for (let i = 0; i < Math.floor(N / 2); ++i) {
//         let L = 2 * i + 1,
//             R = 2 * i + 2;
//         roots[i].left = roots[L] = next(L);
//         roots[i].right = roots[R] = next(R);
//     }
//     return root;
// };
// let root = deserialize('1,2,3,null,null,4,5');
// console.log(root.val);

let serialize = root => {
    let go = (root, A = []) => {
        if (root == null) {
            A.push('null');
        } else {
            A.push(root.val);
            A = go(root.left, A);
            A = go(root.right, A);
        }
        return A;
    };
    let A = go(root);
    return A.join(',');
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(serialize(root));

let deserialize = s => {
    let A = s.split(',');
    let go = () => {
        let x = A.shift();
        if (x == 'null')
            return null;
        let root = new TreeNode(x);
        root.left = go();
        root.right = go();
        return root;
    };
    return go();
};
let ans = deserialize('1,2,null,null,3,null,null');
console.log(ans);