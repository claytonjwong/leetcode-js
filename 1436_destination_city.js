/*
 * 1436. Destination City
 *
 * Q: https://leetcode.com/problems/destination-city/
 * A: https://leetcode.com/problems/destination-city/discuss/611838/Javascript-and-C%2B%2B-solutions
 */

let destCity = A => {
    let U = new Set(A.map(path => path[0])),
        V = new Set(A.map(path => path[1]));
    return [...V].filter(x => !U.has(x)).pop();
};