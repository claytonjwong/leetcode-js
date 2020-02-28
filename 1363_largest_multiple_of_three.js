/*
 * 1363. Largest Multiple of Three
 *
 * Q: https://leetcode.com/problems/largest-multiple-of-three/
 * A: https://leetcode.com/problems/largest-multiple-of-three/discuss/522770/Javascript-and-C%2B%2B-solutions
 */

/*

count the amount of each digit using a map
and track the sum of all digits

x     = 0 1 2 3 4 5 6 7 8 9
x % 3 = 0 1 2 0 1 2 0 1 2 0

x % 3 == 0 -> { 0, 3, 6, 9 }
x % 3 == 1 -> { 1, 4, 7 }
x % 3 == 2 -> { 2, 5, 8 }

N = digits.length
mod = sum % 3
while (N > 0 && mod) {
    if (mod == 1) {

    }

    if (mod == 2) {

    }
}
return empty string;

*/

// let largestMultipleOfThree = (A, sum = 0, cnt = {}) => {
//     for (let i = 0; i < 10; ++i)
//         cnt[i] = 0;
//     for (let x of A)
//         ++cnt[x], sum += x;
//     if (sum == 0)
//         return '0';
//     while (sum % 3) {
//         if (sum % 3 == 1) {
//             for (let y of [1, 4, 7, 2, 5, 8]) {
//                 if (cnt[y] == 0)
//                     continue;
//                 --cnt[y], sum -= y; break;
//             }
//         }
//         if (sum % 3 == 2) {
//             for (let y of [2, 5, 8, 1, 4, 7]) {
//                 if (cnt[y] == 0)
//                     continue;
//                 --cnt[y], sum -= y; break;
//             }
//         }
//     }
//     return Object.entries(cnt).map(pair => {
//         let [key, val] = pair;
//         if (val == 0)
//             return '';
//         return key.toString().repeat(val);
//     }).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).reverse().join('');
// };

/**
 * @param {number[]} digits
 * @return {string}
 */
let largestMultipleOfThree = (A, sum = 0, cnt = {}) => {
    for (let x of A) {
        if (!cnt[x])
            cnt[x] = 0;
        ++cnt[x], sum += x;
    }
    if (sum == 0)
        return '0';
    let mod = {
        1: [1, 4, 7, 2, 5, 8],
        2: [2, 5, 8, 1, 4, 7],
    };
    while (sum % 3) {
        for (let x of mod[sum % 3]) {
            if (cnt[x]) {
                --cnt[x], sum -= x; break;
            }
        }
    }
    return Object.entries(cnt).map(pair => pair[0].toString().repeat(pair[1]))
        .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).reverse().join('');
};
console.log(largestMultipleOfThree([1,8,9]));
console.log(largestMultipleOfThree([8,7,6,1,0]));
console.log(largestMultipleOfThree([1]));
console.log(largestMultipleOfThree([0,0,0,0,0]));
