/*
 * 1625. Lexicographically Smallest String After Applying Operations
 *
 * Q: https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/
 * A: https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/discuss/903526/Kt-Js-Py3-Cpp-Brute-Force-via-DFS-%2B-BFS
 */

// DFS
let findLexSmallestString = (s, amount, pivot, best = s, seen = new Set([ s ])) => {
    let ord = c => c.charCodeAt(0);
    let go = s => {
        if (0 < best.localeCompare(s))
            best = s;
        let increment = s.split('').map((c, i) => i & 1 ? String.fromCharCode(ord('0') + (ord(c) - ord('0') + amount) % 10) : c).join('');
        if (!seen.has(increment))
            seen.add(increment), go(increment);
        let rotate = s.substring(pivot) + s.substring(0, pivot);
        if (!seen.has(rotate))
            seen.add(rotate), go(rotate);
    };
    go(s);
    return best;
};

// BFS
let findLexSmallestString = (s, amount, pivot, best = s, seen = new Set([ s ])) => {
    let ord = c => c.charCodeAt(0);
    let q = [ s ];
    while (q.length) {
        let cur = q.pop();
        if (0 < best.localeCompare(cur))
            best = cur;
        let increment = cur.split('').map((c, i) => i & 1 ? String.fromCharCode(ord('0') + (ord(c) - ord('0') + amount) % 10) : c).join('');
        if (!seen.has(increment))
            seen.add(increment), q.push(increment);
        let rotate = cur.substring(pivot) + cur.substring(0, pivot);
        if (!seen.has(rotate))
            seen.add(rotate), q.push(rotate);
    }
    return best;
};
