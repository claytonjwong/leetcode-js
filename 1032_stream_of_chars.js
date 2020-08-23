/*
 * 1032. Stream of Characters
 *
 * Q: https://leetcode.com/problems/stream-of-characters/
 * A: https://leetcode.com/problems/stream-of-characters/discuss/807725/Javascript-Python3-C%2B%2B-Trie-solutions
 */

class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}
class StreamChecker {
    constructor(A) {
        this.A = A;
        this.root = new TrieNode();
        this.cand = [];
        for (let word of A) {
            let cur = this.root;
            for (let c of word)
                cur = cur.children[c] ? cur.children[c] : cur.children[c] = new TrieNode();
            cur.isEnd = true;
        }
    }
    query(c, A = this.A, cand = this.cand, root = this.root) {
        this.cand = this.cand.filter(node => node.children[c]);  // 🚫 remove candidate nodes which do not have child c
        for (let i = 0; i < this.cand.length; ++i)
            this.cand[i] = this.cand[i].children[c];
        if (root.children[c])
            this.cand.push(root.children[c]);
        return this.cand.some(node => node.isEnd);
    }
}

let checker = new StreamChecker(['cd', 'f', 'kl']);
console.log(checker.query('a'));
console.log(checker.query('b'));
console.log(checker.query('c'));
console.log(checker.query('d'));
console.log(checker.query('e'));
console.log(checker.query('f'));
console.log(checker.query('g'));
console.log(checker.query('h'));
console.log(checker.query('i'));
console.log(checker.query('j'));
console.log(checker.query('k'));
console.log(checker.query('l'));
