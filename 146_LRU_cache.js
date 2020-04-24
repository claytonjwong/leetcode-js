/*
 * 146. LRU Cache
 *
 * Q: https://leetcode.com/problems/lru-cache/
 * A: https://leetcode.com/problems/lru-cache/discuss/595305/Javascript-and-C%2B%2B-solutions
 */

class LRUCache {
    constructor(capacity) {
        this.cap = capacity;
        this.q = [];
        this.m = new Map();
    }
    get(key) {
        if (!this.m.has(key))
            return -1;
        this.q = this.q.filter(x => x != key); // O(N) ❌
        this.q.unshift(key);
        return this.m.get(key);
    }
    put(key, val) {
        this.q = this.q.filter(x => x != key); // O(N) ❌
        while (this.q.length >= this.cap) {
            let del = this.q.pop();
            this.m.delete(del);
        }
        this.q.unshift(key);
        this.m.set(key, val);
    }
}

let lc = new LRUCache(2);
lc.put(1, 1);
lc.put(2, 2);
console.log(lc.get(1));
console.log(`${lc.q} == [1,2]`);
lc.put(3, 3);
console.log(`${lc.q} == [3,1]`);
console.log(lc.get(2));
console.log(`${lc.q} == [3,1]`);
lc.put(4, 4);
console.log(`${lc.q} == [4,3]`);
console.log(lc.get(1));
console.log(lc.get(3));
console.log(lc.get(4));
