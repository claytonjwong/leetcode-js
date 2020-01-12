/*
 * Weekly Contest 171
 *
 * https://leetcode.com/contest/weekly-contest-171/ranking/35/
 *
 * Rank	        Name	        Score	Finish Time 	Q1 (3)	    Q2 (4)	    Q3 (5)	    Q4 (7)
 * 867 / 7189	claytonjwong 	12	    0:33:15	        0:06:46	    0:16:28	    0:33:15
 *
 * Q1: https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/
 * A1: https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/discuss/477795/Javascript-and-C%2B%2B-solutions
 * 
 * Q2: https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/
 * A2: https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/discuss/478305/Javascript-and-C%2B%2B-solutions
 * 
 * Q3: https://leetcode.com/problems/number-of-operations-to-make-network-connected/
 * A3: https://leetcode.com/problems/number-of-operations-to-make-network-connected/discuss/477783/Javascript-and-C%2B%2B-solutions
 * 
 * Q4:
 * A4:
 */

 /**
 * @param {number} n
 * @return {number[]}
 */
/*
let getNoZeroIntegers = x => {
    let ok = x => !x.toString().includes('0');
    for (let i = 1;; ++i) {
        let j = x - i;
        if (ok(i) && ok(j))
            return [i, j];
    }
};
*/
/*
let getNoZeroIntegers = (x, i = 1) => {
    let ok = x => !x.toString().includes('0');
    while (!(ok(i) && ok(x - i)))
        ++i;
    return [i, x - i];
};
*/

// console.log(getNoZeroIntegers(2));
// console.log(getNoZeroIntegers(11));
// console.log(getNoZeroIntegers(10000));
// console.log(getNoZeroIntegers(69));


/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
/*
let minFlips = (a, b, c, cnt = 0) => {
    let isSet = (x, i) => x & (1 << i);
    for (let i = 0; i <= 31; ++i) {
        let bit = isSet(c, i);
        if (bit) {
            if (isSet(a, i) || isSet(b, i))
                continue;
            ++cnt;
        } else {
            let on = 0;
            if (isSet(a, i)) ++on;
            if (isSet(b, i)) ++on;
            cnt += on;
        }
    }
    return cnt;
};
*/
/*
let minFlips = (a, b, c, cnt = 0) => {
    let isSet = (x, i) => x & (1 << i);
    for (let i = 0; i <= 31; ++i) {
        if (isSet(c, i)) {
            if (!isSet(a, i) && !isSet(b, i))
                ++cnt;
        } else {
            let on = 0;
            if (isSet(a, i)) ++on;
            if (isSet(b, i)) ++on;
            cnt += on;
        }
    }
    return cnt;
};
*/
/*
let minFlips = (a, b, c, cnt = 0) => {
    let isSet = (x, i) => x & (1 << i) ? 1 : 0;
    for (let i = 0; i <= 31; ++i)
        if (isSet(c, i))
            cnt += !isSet(a, i) && !isSet(b, i);
        else
            cnt += isSet(a, i),
            cnt += isSet(b, i);
    return cnt;
};
*/
/*
let minFlips = (a, b, c, cnt = 0) => {
    let isSet = (x, i) => x & (1 << i) ? 1 : 0;
    for (let i = 0; i <= 31; ++i)
        cnt += isSet(c, i) ? !isSet(a, i) && !isSet(b, i) : isSet(a, i) + isSet(b, i);
    return cnt;
};

console.log(minFlips(2, 6, 5));
console.log(minFlips(4, 2, 7));
console.log(minFlips(1, 2, 3));
*/
/*

union-find, when parents are same during union, increment count of same (redundant connections which can be reconnected to other connected components)

count connected components by finding parent reps of each index, and insert into set (ie. set size is # of connected components K)

if same >= K - 1
    return K - 1

*/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
let makeConnected = (N, connections, same = 0) => {
    let P = [...Array(N)].map((_, i) => i);
    let find = x => {
        if (P[x] == x)
            return P[x];
        return P[x] = find(P[x]);
    }
    let union = (a, b) => {
        a = find(a);
        b = find(b);
        if (a == b)
            ++same;
        else
            P[a] = b; // arbitrary choice
    };
    for (let [u, v] of connections)
        union(u, v);
    for (let i = 0; i < N; ++i)
        find(i);
    let K = new Set([...P]).size - 1;
    if (same >= K)
        return K;
    return -1;
};
console.log(makeConnected(4, [[0,1],[0,2],[1,2]]));
console.log(makeConnected(6, [[0,1],[0,2],[0,3],[1,2],[1,3]]));
console.log(makeConnected(6, [[0,1],[0,2],[0,3],[1,2]]));
console.log(makeConnected(5, [[0,1],[0,2],[3,4],[2,3]]));


// incorrect algorithm -- greedy ain't gunna cut it!  Gotta DP it!
// /**
//  * @param {string} word
//  * @return {number}
//  */
// let minimumDistance = (word, minCost = Infinity) => {
//     let coord = i => {
//         let x = word.charCodeAt(i) - 65;
//         let f = Math.floor;
//         return [f(x / 6), f(x % 6)];
//     };
//     let type = j => {
//         let i = 0, cost = 0;
//         let a = coord(word[i]);
//         let b = null;
//         for (; i < word.length; ++i) {
//             if (i == j) {
//                 b = coord(i); // start 2nd finger here
//                 continue;
//             }
//             let [tx, ty] = coord(i); // target
//             let [ax, ay] = a;
//             let abs = Math.abs;
//             if (b) {
//                 let [bx, by] = b;
//                 let u = abs(tx - ax) + abs(ty - ay),
//                     v = abs(tx - bx) + abs(ty - by);
//                 if (u < v)
//                     cost += u, a = [tx, ty];
//                 else
//                     cost += v, b = [tx, tx];
//             } else {
//                 if (i > 0)
//                     cost += abs(tx - ax) + abs(ty - ay);
//             }
//         }
//         return cost;
//     };
//     for (let j = 1; j < word.length; ++j) {
//         minCost = Math.min(minCost, type(j));
//     }
//     return minCost;
// };
// // console.log(minimumDistance("CAKE"));
// // console.log(minimumDistance("HAPPY"));
// // console.log(minimumDistance("NEW"));
// console.log(minimumDistance("YEAR"));