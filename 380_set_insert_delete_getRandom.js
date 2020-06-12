/*
 * 380. Insert Delete GetRandom O(1)
 *
 * Q: https://leetcode.com/problems/insert-delete-getrandom-o1/
 * A: https://leetcode.com/problems/insert-delete-getrandom-o1/discuss/683603/Javascript-and-C%2B%2B-solutions\
 */

class RandomizedSet {
    constructor() {
        this.S = new Set();
    }
    insert(x, S = this.S) {
        if (S.has(x))
            return false;
        S.add(x);
        return true;
    }
    remove(x, S = this.S) {
        if (!S.has(x))
            return false;
        S.delete(x);
        return true;
    }
    getRandom(S = this.S) {
        return [...S][Math.floor(Math.random() * S.size)];
    }
}

class RandomizedSet {
    constructor() {
        this.A = [];
        this.m = new Map();
    }
    insert(x, A = this.A, m = this.m) {
        if (m.has(x))
            return false;
        A.push(x);
        m.set(x, A.length - 1);
        return true;
    }
    remove(x, A = this.A, m = this.m) {
        if (!m.has(x))
            return false;
        let i = m.get(x); // value x exists at A[i]
        m.delete(x); // erase mapping to removed value x
        [A[i], A[A.length - 1]] = [A[A.length -1], A[i]], A.pop(); // erase A[i] in O(1) via swap/pop back
        m.set(A[i], i); // update mapped index for the element which replaced A[i]
        return true;
    }
    getRandom(A = this.A) {
        return A[Math.floor(Math.random() * A.length)];
    }
}