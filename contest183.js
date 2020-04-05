/*
 * https://leetcode.com/contest/weekly-contest-183/
 *
 * Rank           Name           Score   Finish Time    Q1 (4)     Q2 (4)     Q3 (6)    Q4 (7)
 * 2373 / 12539	  claytonjwong   10      1:00:28                   0:10:59    1:00:28
 */


/*
 * 1404. Number of Steps to Reduce a Number in Binary Representation to One
 *
 * Q: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/
 * A: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/discuss/564286/Javascript-and-C%2B%2B-solutions
 */

let numSteps = (s, steps = 0) => {
    let A = s.split('').map(Number);
    let div = () => A.pop();
    let inc = () => {
        let N = A.length, i = N - 1, carry = 1;
        A[i] = 0; // 1 + 1 = 0 and carry = 1
        while (--i >= 0 && carry)
            if (A[i])
                A[i] = 0; // 1 + 1 = 0 and carry = 1
            else
                A[i] = 1, // 0 + 1 = 1 and carry = 0
                carry = 0;
        if (carry) A.unshift(1);
    }
    while (A.length > 1) {
        if (A[A.length - 1] == 0)
            div();
        else
            inc();
        ++steps;
    }
    return steps;
};

console.log(numSteps("1101"))
console.log(numSteps("10"))
console.log(numSteps("1"))


/*
 * 1405. Longest Happy String
 *
 * Q: https://leetcode.com/problems/longest-happy-string/
 * A: https://leetcode.com/problems/longest-happy-string/discuss/565380/Javascript-and-C%2B%2B-solutions
 */

let longestDiverseString = (a, b, c, found = false, ans = []) => {
    let m = new Map([['a', a], ['b', b], ['c', c]]);
    do {
        found = false
        let A = [...m].sort((a, b) => b[1] - a[1]);
        let N = ans.length;
        for (let i = 0; i < 3; ++i) {
            let [cur, cnt] = A[i];
            if (cnt > 0 && (N < 2 || ans[N - 2] != cur || ans[N - 1] != cur)) {
                ans.push(cur);
                m.set(cur, m.get(cur) - 1);
                found = true;
                break;
            }            
        }
    } while (found);
    return ans.join('');
};

console.log(longestDiverseString(1, 1, 7));
console.log(longestDiverseString(2, 2, 1));
console.log(longestDiverseString(7, 1, 0));


// let minSubsequence = (A, best = []) => {
//     let N = A.length;
//     let go = (j, cur = []) => {

//         for (let i = 0; i < j; ++i)
//             if (A[i] > A[j])
//                 go(i, cur.concat(A[i]));
//     };
//     for (let j = 1; j < N; ++j)
//         go(j);
//     return best;
// };