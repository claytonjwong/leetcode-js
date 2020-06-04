/*
 * 344. Reverse String
 *
 * Q: https://leetcode.com/problems/reverse-string/
 * A: https://leetcode.com/problems/reverse-string/discuss/670042/Javascript-and-C%2B%2B-solutions
 */

// the "easy" way
let reverseString = S => S.reverse();

// the "hard" way
let reverseString = S => {
    let N = S.length;
    for (let i = 0; i < N / 2; ++i)
        [S[i], S[N - 1 - i]] = [S[N - 1 - i], S[i]];
};
