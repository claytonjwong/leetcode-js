/*
 * Random Set- Phone Interview
 * Completed May 28, 2020 7:18 AM
 * Time Spent: 11 minutes 51 seconds
 * Time Allotted: 1 hour 30 minutes
 */

/*
 * 46. Permutations
 *
 * Q: https://leetcode.com/problems/permutations/
 * A: https://leetcode.com/problems/permutations/discuss/657552/Javascript-and-C%2B%2B-solutions
 */
let permute = A => A.length == 1 ? [ A ] :
    A.reduce((res, _, i, A, B = [...A]) => {
        B.splice(i, 1);                                                 // B is A without A[i]
        return res.concat(permute(B).map(arr => [].concat(A[i], arr))); // insert A[i] into all other positions
    }, []);

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
        return isPrefix ? true : cur.isEnd;
    }
    search(word) {
        return this._find(word, false);
    }
    startsWith(word) {
        return this._find(word, true);
    }
};