/*

https://leetcode.com/contest/biweekly-contest-18/ranking/

Rank	        Name	        Score	Finish Time 	Q1 (3)	        Q2 (4)	        Q3 (5)	    Q4 (10)
1366 / 3007	    claytonjwong 	7	    1:07:32	        0:32:18  *1	    0:52:32  *2

*/

/*

5155. Rank Transform of an Array

Q1: https://leetcode.com/problems/rank-transform-of-an-array/
A1: https://leetcode.com/problems/rank-transform-of-an-array/discuss/489711/Javascript-and-C%2B%2B-solutions


**Synopsis:**

Create a `map` to store the array `A` value and index.  Thus for each element `A[i]`, the value of `A[i]` is stored in `map[i][0]`
and the index of `A[i]` is stored in `map[i][1]`. Iterate through the `map` keeping track of the current minimum value to determine the `rank`.
Whenever the minimum value is updated, increment the rank and assign the current rank to the index in the answer corresponding to the value's index `i`
in `A` (ie. `map[i][1]).

/
*/

// let arrayRankTransform = A => {
//     let N = A.length, map = Array(N), ans = Array(N);
//     for (let i = 0; i < N; ++i)
//         map[i] = [A[i], i];
//     map.sort((a, b) => a[0] - b[0]);
//     let rank = 0, min = -(1e9 + 1);
//     for (let i = 0; i < N; ++i) {
//         if (min < map[i][0])
//             min = map[i][0],
//             ++rank;
//         ans[map[i][1]] = rank;
//     }
//     return ans;
// };
// // console.log(arrayRankTransform([40,10,20,30]));
// // console.log(arrayRankTransform([100,100,100]));
// // console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]));
// console.log(arrayRankTransform([2,-11,24,15,26,-31,-48,-49,22,37,-36]));

/*

5151. Break a Palindrome

Q2: https://leetcode.com/problems/break-a-palindrome/
A2: https://leetcode.com/problems/break-a-palindrome/discuss/489717/Javascript-and-C%2B%2B-solutions

**Synopsis:**

Iterate through the first `half` of characters the palindrome string `s` and modify the palindrome string `s` to create candidates `t` in a greedy manner.
Sort all candidates and return the lexicographically smallest candidate as the answer.

There are 2 use cases under consideration:

* **Case 1:** If the current character under consideration is already `'a'`, then the best change for this character pair is
to the corresponding second half of `t`, who's value is also `a`.  The corresponding second half's value `'a'` is changed to `'b'`
for this candidate.

* **Case 2:** Otherwise if the current character under consideration is not `'a'`, then change it to `'a'`.

**Note:** The greedy approach is based on the lexicographically smallest character in the alphabet `'a'` and the second smallest character in the alpabet `'b'`.

**Note:** since `s` is a palindrome, we know `s[i] == s[N - 1 - i]` (ie. the first half's characters match the corresponding second half's characters
per the definition of a palindrome).

**Note:** `half` depends on the length of `s`.  If `s` has odd length, then we cannot consider modification to the middle character
as a possible candidate, because changing the middle character of an odd length
palindrome would result in another palindrome, which is not eligible as an answer per the problem statement.

*/

let breakPalindrome = (s, cand = []) => {
    let N = s.length;
    if (N == 1)
        return '';
    let half = (N % 2 == 0) ? (N / 2) : Math.ceil(N / 2.0) - 1;
    for (let i = 0; i < half; ++i) {
        let t = s.split('');
        if (t[i] == 'a')
            t[N - 1 - i] = 'b';
        else
            t[i] = 'a';
        cand.push(t.join(''));
    }
    cand.sort();
    return cand[0];
};
console.log(breakPalindrome('abccba'));
console.log(breakPalindrome('aba'));
console.log(breakPalindrome('aa'));