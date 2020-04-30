/*
 * 1078. Occurrences After Bigram
 *
 * Q: https://leetcode.com/problems/occurrences-after-bigram/
 * A: https://leetcode.com/problems/occurrences-after-bigram/discuss/603664/Javascript-and-C%2B%2B-solutions
 */

let findOcurrences = (text, first, second, ans = []) => {
    let A = text.split(' ');
    for (let i = 2; i < A.length; ++i)
        if (A[i - 2] == first && A[i - 1] == second)
            ans.push(A[i]);
    return ans;
};