/*
 * 211. Add and Search Word - Data structure design
 *
 * Q: https://leetcode.com/problems/add-and-search-word-data-structure-design/
 * A: https://leetcode.com/problems/add-and-search-word-data-structure-design/discuss/528035/Javascript-and-C%2B%2B-solutions
 */

class TrieNode {
    constructor() {
        this.isEnd = false;
        this.children = new Map();
    }
}
class WordDictionary {
    constructor() {
        this.trieRoot = new TrieNode();
    }
    addWord(word) {
        let node = this.trieRoot;
        for (let c of word) {
            if (!node.children.has(c))
                node.children.set(c, new TrieNode());
            node = node.children.get(c);
        }
        node.isEnd = true;
    }
    search(word, startNode) {
        let node = startNode ? startNode : this.trieRoot;
        for (let i = 0; i < word.length; ++i) {
            let c = word[i];
            if (c == '.')
                for (let child of node.children.values())
                    if (this.search(word.substr(i + 1), child))
                        return true;
            if (!node.children.has(c))
                return false;
            node = node.children.get(c);
        }
        return node.isEnd;
    }
}