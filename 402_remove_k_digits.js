/*
 * 402. Remove K Digits
 *
 * Q: https://leetcode.com/problems/remove-k-digits/
 * A: https://leetcode.com/problems/remove-k-digits/discuss/630343/Javascript-and-C%2B%2B-solutions
 */

let removeKdigits = (num, K, S = []) => {
    let A = num.split('').map(Number);
    for (let x of A) {
        while (K && S.length && x < S[S.length - 1])
            S.pop(), --K; // greedily remove up to K values greater-than x from the stack
        S.push(x);
    }
    let beg = S.findIndex(x => x > 0), // begin at first non-zero index
        end = S.length - K;            // end before remaining K
    return !S.length || beg == -1 || beg == end ? "0" : S.slice(beg, end).join('').toString();
};