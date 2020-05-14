/*
 * 208. Implement Trie (Prefix Tree)
 *
 * Q: https://leetcode.com/problems/implement-trie-prefix-tree/
 * A: https://leetcode.com/problems/implement-trie-prefix-tree/discuss/631834/Javascript-and-C%2B%2B-solutions
 */

class Node {
    constructor(isEnd = false) {
        this.isEnd = isEnd;
        this.children = new Map();
    }
};
class Trie {
    constructor() {
        this.root = new Node();
    }
    insert(word) {
        let cur = this.root;
        for (let c of word) {
            if (!cur.children.has(c))
                cur.children.set(c, new Node());
            cur = cur.children.get(c);
        }
        cur.isEnd = true;
    }
    _find(word, isPrefix) {
        let cur = this.root;
        for (let c of word) {
            if (!cur.children.has(c))
                return false;
            cur = cur.children.get(c);
        }
        return isPrefix ? true : cur.isEnd; // prefix is true, word is true if cur.isEnd
    }
    search(word) {
        return this._find(word, false);
    }
    startsWith(word) {
        return this._find(word, true);
    }
};

let T = new Trie();
T.insert('apple');
T.search('apple');