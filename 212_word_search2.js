/*
 * 212. Word Search II
 *
 * Q: https://leetcode.com/problems/word-search-ii/
 * A: https://leetcode.com/problems/word-search-ii/discuss/713117/Javascript-and-C%2B%2B-solutions
 */

let findWords = (A, words, found = new Set()) => {
    class TrieNode {
        constructor() {
            this.children = new Map();
            this.isEnd = false;
        }
    }
    let root = new TrieNode();
    let add = word => {
        let cur = root;
        for (let c of word) {
            if (!cur.children.has(c))
                cur.children.set(c, new TrieNode(c));
            cur = cur.children.get(c);
        }
        cur.isEnd = true;
    };
    words.forEach(word => add(word));
    let M = A.length,
        N = M ? A[0].length : 0;
    let go = (i, j, cur, path = [], seen = new Set()) => {
        if (seen.has(`${i},${j}`)) // ❌ already seen i,j 👀
            return;
        if (cur.isEnd) // 🎯 found word
            found.add(path.join(''));
        seen.add(`${i},${j}`);    // 👀 ✅ seen forward-tracking
        for (let [u, v] of [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]]) // clockwise [ 👆, 👉, 👇, 👈 ]
            if (0 <= u && u < M && 0 <= v && v < N && cur.children.has(A[u][v]))
                go(u, v, cur.children.get(A[u][v]), path.concat(A[u][v]), seen); // ⭐️ implicit path forward/back-tracking
        seen.delete(`${i},${j}`); // 👀 🚫 seen back-tracking
    };
    A.forEach((row, i) => {
        row.forEach((c, j) => {
            if (root.children.has(c))
                go(i, j, root.children.get(c), [c]);
        });
    });
    return [...found];
};
