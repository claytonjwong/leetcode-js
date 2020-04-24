/*
 * 168. Excel Sheet Column Title
 *
 * Q: https://leetcode.com/problems/excel-sheet-column-title/
 * A: https://leetcode.com/problems/excel-sheet-column-title/discuss/594280/Javascript-and-C%2B%2B-solutions
 */

// 1-based indexing
let convertToTitle = (N, ans = []) => {
    do {
        let x = N % 26 ? N % 26 : 26;
        ans.unshift(x);
        N = Math.floor((N - x) / 26);
    } while (N > 0);
    return ans.map(x => String.fromCharCode('A'.charCodeAt(0) + x - 1)).join('');
};

// 0-based indexing (iterative)
let convertToTitle = (N, ans = []) => {
    for (; N; N = Math.floor(N / 26))
        --N, ans.push(String.fromCharCode('A'.charCodeAt(0) + N % 26)); // -1 for 1-based to 0-based indexing
    return ans.reverse().join('');
};

// 0-based indexing (recursive)
let convertToTitle = N => !N ? '' : convertToTitle(Math.floor(--N / 26)) + String.fromCharCode('A'.charCodeAt(0) + N % 26);

console.log(convertToTitle(1));
console.log(convertToTitle(26));
console.log(convertToTitle(28));
console.log(convertToTitle(676));
console.log(convertToTitle(677));
console.log(convertToTitle(701));
console.log(convertToTitle(702));