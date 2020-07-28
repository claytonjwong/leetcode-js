/*
 * Your interview score of 5.16/10 beats 72% of all users.
 * Time Spent: 1 hour 18 minutes 3 seconds
 * Time Allotted: 1 hour 30 minutes
 */

/*
 * 557. Reverse Words in a String III
 *
 * Q: https://leetcode.com/problems/reverse-words-in-a-string-iii/
 * A: https://leetcode.com/problems/reverse-words-in-a-string-iii/discuss/759448/Javascript-Python3-C%2B%2B-solutions
 */
let reverseWords = s => s.split(' ').map(word => word.split('').reverse().join('')).join(' ');


// class ListNode {
//     constructor(val, next) {
//         this.val = val;
//         this.next = next;
//     }
// }

// let swapPairs = head => {
//     let a = new ListNode(-1, head)
//         b = head,
//         c = head ? head.next : null;
//     if (!c)
//         return head;
//     head = c;
//     for (;;) {
//         let d = c.next;
//         b.next = c.next;
//         c.next = b;
//         a.next = c;
//         if (!d || !d.next)
//             break;
//         a = b;
//         b = d;
//         c = d.next;
//     }
//     return head
// };

// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);

// let ans = swapPairs(head);

// while (ans)
//     console.log(ans.val), ans = ans.next;


let findWords = (A, words, found = new Set()) => {
    class Node {
        constructor(c) {
            this.children = new Map();
            this.isEnd = false;
        }
        step(c) {
            if (!this.children.has(c))
                return null;
            return this.children
        }
    }
    class Trie {
        constructor() {
            this.root = new Node('\0');
        }
        add(word) {
            let cur = this.root;
            for (let c of word.split('')) {
                if (!cur.children.has(c))
                    cur.children.set(c, new Node(c));
                cur = cur.children.get(c);
            }
            cur.isEnd = true;
        }
    }
    let M = A.length,
        N = M ? A[0].length : 0;
    let trie = new Trie();
    let all = new Set();
    words.forEach(word => {
        trie.add(word);
        all.add(word);
    });
    let go = (i, j, path = [], cur = trie.root, seen = new Set()) => {
        if (!cur || seen.has(`${i},${j}`))
            return;
        seen.add(`${i},${j}`);
        if (cur.isEnd && all.has(path.join('')))
            found.add(path.join(''));
        for (let [u, v] of [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]]) {
            if (u < 0 || u == M || v < 0 || v == N)
                continue;
            go(u, v, path.concat(A[u][v]), cur.children.get(A[u][v]) || null, seen);
        }
    };
    for (let i = 0; i < M; ++i)
        for (let j = 0; j < N; ++j)
            go(i, j, [A[i][j]], trie.root.children.get(A[i][j]));
    return [...found];
};


let A = [
    ['o','a','a','n'],
    ['e','t','a','e'],
    ['i','h','k','r'],
    ['i','f','l','v']
  ];

let words = ["oath","pea","eat","rain"];

console.log(findWords(A, words));
