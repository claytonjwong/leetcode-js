/*
 * https://leetcode.com/contest/weekly-contest-173/
 *
 * Rank         Name            Score   Finish Time     Q1 (3)      Q2 (4)          Q3 (5)      Q4 (6)
 * 2667 / 6103  claytonjwong    4       0:49:06                     0:39:06  *2
 */


// let removePalindromeSub = s => {
//     let isPalindrome = s => {
//         let N = s.length;
//         for (let i = 0; i < Math.floor(N / 2); ++i)
//             if (s[i] != s[N - 1 - i])
//                 return false;
//         return true;
//     };
//     let go = (i, j) => {
//         if (i >= j)
//             return 0;
//         if (isPalindrome(s.substring(i, j + 1)))
//             return 1;
//         if (s.substring(i, j + 1) == "aabaa")
//             console.log('here!');
//         return 1 + Math.min(go(i + 1, j), go(i, j - 1));
//     };
//     return go(0, s.length - 1);
// };

// console.log(removePalindromeSub("ababa"));
// console.log(removePalindromeSub("abb"));
// console.log(removePalindromeSub("baabb"));
// console.log(removePalindromeSub(""));
// console.log(removePalindromeSub("bbaabaaa"));


/*
 * Filter Restaurants by Vegan-Friendly, Price and Distance
 *
 * Q: https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/
 * A: https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/discuss/490369/Javascript-and-C%2B%2B-solutions
 */

/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
class Restaurant {
    constructor(id, rank, vegan, cost, dist) {
        this.id = id;
        this.rank = rank;
        this.vegan = vegan;
        this.cost = cost;
        this.dist = dist;
    }
}
let filterRestaurants = (restaurants, veganFriendly, maxCost, maxDist) => {
    let R = [];
    for (let restaurant of restaurants)
        R.push(new Restaurant(...restaurant));
    return R
        .filter(r => (veganFriendly == 1 ? r.vegan == 1 : true) && r.cost <= maxCost && r.dist <= maxDist)
        .sort((a, b) => a.rank == b.rank ? b.id - a.id : b.rank - a.rank)
        .map(r => r.id);
};
let restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], veganFriendly = 1, maxPrice = 50, maxDistance = 10;
// let restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], veganFriendly = 0, maxPrice = 50, maxDistance = 10;
// let restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], veganFriendly = 0, maxPrice = 30, maxDistance = 3;
// let restaurants = [
// [2817,54550,0,24368,82491],
// [94849,38849,0,97406,43608],
// [94567,93218,1,66548,87859], // no
// [24884,39764,1,77016,65453], // no
// [66229,51558,0,62945,31817]],
// veganFriendly = 1,
// maxPrice = 54305,
// maxDistance = 87130;
console.log(filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance));

/*

create adj matrix

bfs from each city, tracking reachable neighbors

sort descending by length, ties are broken by the greater city id value

*/

// /**
//  * @param {number} n
//  * @param {number[][]} edges
//  * @param {number} distanceThreshold
//  * @return {number}
//  */
// let findTheCity = (N, edges, T) => {
//     let A = [...Array(N)].map(_ => new Array()),
//         R = [...Array(N)].map(_ => new Set());
//     for (let [u, v, w] of edges) {
//         A[u].push([v, w]);
//         A[v].push([u, w]);
//     }
//     let min = Infinity, ans = Infinity;
//     for (let u = 0; u < N; ++u) {
//         let q = [...A[u]];
//         for (let x of q)
//             x.push(T);
//         while (q.length > 0) {
//             let [v, w, dist] = q[0]; q.shift();
//             if (w > dist)
//                 continue;
//             R[u].add(v);
//             if (w < dist)
//                 q.push([v, w, dist - w]);
//         }
//         if (min >= R[u].size)
//             min = R[u].size,
//             ans = u;
//     }
//     return ans;
// };

// let N = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], T = 4;
// // let N = 4, edges = [[0,1,1],[1,2,1],[2,3,1],[2,3,1]], T = 1;
// console.log(findTheCity(N, edges, T));
