const _ = require('lodash');

class TrieNode {
    constructor() {
        this.words = new Map();
        this.children = new Map();
    }
}
class MapSum {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word, value) {
        let node = this.root;
        node.words.set(word, value);
        for (let c of word) {
            let next = node.children.get(c) || new TrieNode();
            next.words.set(word, value);
            node.children.set(c, next);
            node = next;
        }
    }
    sum(word) {
        let node = this.root;
        for (let c of word)
            node = node?.children.get(c);
        return node ? _.sum([...node.words].map(([_, t]) => t)) : 0;
    }
}
