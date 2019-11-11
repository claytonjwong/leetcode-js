/*
 * 1232. Check If It Is a Straight Line
 */

/**
 * @param {A[][]} coordinates
 * @return {boolean}
 */
let checkStraightLine = (A) => {
    let isLine = ([x, y]) => {
       let [p, q] = A[0];
       let [u, v] = A[1];
       return (y - q) * (x - u) == (y - v) * (x - p);
    };
    for (let i=2; i < A.length; ++i)
        if (!isLine(A[i]))
            return false;
    return true;
};
let ans = checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]);
console.log(ans);