/*
 * https://leetcode.com/contest/weekly-contest-201/
 * https://www.youtube.com/watch?v=cMqzxy8npo0&feature=youtu.be
 *
 * Rank            Name            Score    Finish Time    Q1 (3)     Q2 (4)    Q3 (6)   Q4 (7)
 * 3742 / 10002    claytonjwong    7        1:02:06        0:06:59    1:02:06
 */

/*
 * 1544. Make The String Great
 *
 * Q: https://leetcode.com/problems/make-the-string-great/
 * A: https://leetcode.com/problems/make-the-string-great/discuss/780878/Javascript-Python3-C%2B%2B-solutions
 */
let makeGood = (t, s = []) => {
    for (let c of t)
        for (s.push(c); 2 <= s.length && Math.abs(s[s.length - 2].charCodeAt(0) - s[s.length - 1].charCodeAt(0)) == 32; s.pop(), s.pop());
    return s.join('');
};

/*
 * 1545. Find Kth Bit in Nth Binary String
 *
 * Q: https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/
 * A: https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/discuss/780890/Javascript-Python3-C%2B%2B-solutions
 */
let findKthBit = (n, k) => {
    let go = i => {
        if (!i)
            return ['0'];
        let pre = go(i - 1);
        return pre.concat('1', [...pre].map(c => c == '0' ? '1' : '0').reverse());
    };
    return go(n - 1)[k - 1];
};

// incorrect algorithm
let maxNonOverlapping = (A, T, sum = 0, cnt = 0) => {
    if (!T)
        return A.filter(x => !x).length;
    let N = A.length,
        i = 0,
        j = 0;
    while (j < N) {
        if (sum < T) {
            if (i < j && sum + A[j] < sum - A[i])
                sum -= A[i++]
            else
                sum += A[j++];
        }
        if (sum == T) {
            i = j, sum = 0, ++cnt
        }
        if (T < sum) {
            sum -= A[i++];
        }
    }
    return cnt;
};

// -5,5,-4,5,4
// -5 0 -4 1 5


console.log(`${maxNonOverlapping([1,1,1,1,1], 2)} == 2`)
console.log(`${maxNonOverlapping([-1,3,5,1,4,2,-9], 6)} == 2`)
console.log(`${maxNonOverlapping([-2,6,6,3,5,4,1,2,8], 10)} == 3`)
console.log(`${maxNonOverlapping([0,0,0], 0)} == 3`)
console.log(`${maxNonOverlapping([-5,5,-4,5,4], 5)} == 2`)
console.log(`${maxNonOverlapping([-1,-2,8,-3,8,-5,5,-4,5,4,1], 5)} == 5`)

