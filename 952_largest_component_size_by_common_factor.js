/*
 * 952. Largest Component Size by Common Factor
 *
 * Q: https://leetcode.com/problems/largest-component-size-by-common-factor/
 * A: https://leetcode.com/problems/largest-component-size-by-common-factor/discuss/204260/Javascript-Python3-C%2B%2B-Union-Find
 */

let largestComponentSize = (A, N = 100001, m = {}) => {
    let P = [...Array(N).keys()],              // 🙂 parent representative of disjoint sets
        L = Array(N).fill(1);                  // 🤥 length of parent representative's set
    let find = x => P[x] = x == P[x] ? P[x] : find(P[x]);
    let union = (a, b) => {
        a = find(a);
        b = find(b);
        if (a == b)
            return;
        P[b] = a;  // arbitrary choice
        L[a] += L[b];
    }
    for (let x of A) {
        m[x] ? union(m[x], x) : m[x] = x;      // case 1: x as a factor of itself
        for (let i = 2; i * i <= x; ++i) {
            if (x % i)
                continue;
            let j = Math.floor(x / i);
            m[i] ? union(m[i], x) : m[i] = x;  // case 2: i-th factor of x
            m[j] ? union(m[j], x) : m[j] = x;  // case 3: j-th factor of x
        }
    }
    return Math.max(...L);                     // 🎯 maximum length of any parent representative's set
};

console.log(4, largestComponentSize([4,6,15,35]));
console.log(2, largestComponentSize([20,50,9,63]));
console.log(8, largestComponentSize([2,3,6,7,4,12,21,39]));
console.log(4, largestComponentSize([83,99,39,11,19,30,31]));
console.log(6, largestComponentSize([100,68,70,79,80,20,25,27]));
