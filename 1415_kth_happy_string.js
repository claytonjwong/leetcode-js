/*
 * 1415. The k-th Lexicographical String of All Happy Strings of Length n
 *
 * Q: https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/
 * A: https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/discuss/589380/Javascript-and-C%2B%2B-solutions
 */

let getHappyString = (N, K, happy = []) => {
    let go = (chars, A = []) => {
        if (chars == 0) {
            happy.push(A.join(''));
            return;
        }
        for (let c of ['a', 'b', 'c']) {
            if (A.length > 0 && c == A[A.length - 1])
                continue; // not a happy string ❌
            A.push(c);
            go(chars - 1, A);
            A.pop(c);
        }
    };
    go(N);
    if (happy.length >= K)
        return happy[K - 1]; // -1 for 0-based index 🎯
    return '';
};