/*
 * 1262. Greatest Sum Divisible by Three
 *
 * Q: https://leetcode.com/problems/greatest-sum-divisible-by-three/
 * A: https://leetcode.com/problems/greatest-sum-divisible-by-three/discuss/439097/Javascript-and-C%2B%2B-solutions
 */

// verbose
let maxSumDivThree = A => {
    let N = A.length;
    let buckets = [...Array(N + 1)].map(_ => Array(3).fill(0));
    for (let i = 1; i <= N; ++i) {
        buckets[i] = [...buckets[i - 1]]; // create current from previous 🤔
        for (let j of [0, 1, 2]) {
            let sum = A[i - 1] + buckets[i - 1][j]; // add A[i] onto each previous bucket (A[i - 1] for A[i] because buckets is offset by 1)
            buckets[i][sum % 3] = Math.max(buckets[i][sum % 3], sum); // update each (current sum % 3) bucket to max of itself and the current sum
        }
    }
    return buckets[N][0]; // max sum of all N items of A which is evenly divisible by 3 🎯
};

// memory optimization
let maxSumDivThree = A => {
    let N = A.length;
    let cur = Array(3).fill(0);
    for (let i = 1; i <= N; ++i) {
        let pre = [...cur]; // create current from previous 🤔
        for (let j of [0, 1, 2]) {
            let sum = A[i - 1] + pre[j]; // add A[i] onto each previous bucket (A[i - 1] for A[i] because buckets is offset by 1)
            cur[sum % 3] = Math.max(cur[sum % 3], sum); // update each (current sum % 3) bucket to max of itself and the current sum
        }
    }
    return cur[0]; // max sum of all N items of A which is evenly divisible by 3 🎯
};

// memory optimization + more concise
let maxSumDivThree = A => {
    let N = A.length;
    let cur = Array(3).fill(0);
    for (let x of A) {
        let pre = [...cur]; // create current from previous 🤔
        for (let y of pre) {
            let sum = x + y; // add A[i] (ie. x) onto each previous bucket value (ie. y)
            cur[sum % 3] = Math.max(cur[sum % 3], sum); // update each (current sum % 3) bucket to max of itself and the current sum
        }
    }
    return cur[0]; // max sum of all N items of A which is evenly divisible by 3 🎯
};

// memory optimization + most concise
let maxSumDivThree = (A, cur = [0, 0, 0]) => {
    for (let x of A) {
        let pre = [...cur]; // create current from previous 🤔
        for (let y of pre)
            cur[(x + y) % 3] = Math.max(cur[(x + y) % 3], x + y); // add A[i] (ie. x) onto each previous bucket and update each current bucket to max of itself and the current sum (x + y)
    }
    return cur[0]; // max sum of all N items of A which is evenly divisible by 3 🎯
};
