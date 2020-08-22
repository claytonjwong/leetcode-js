/*
 * 1557. Minimum Number of Vertices to Reach All Nodes
 *
 * Q: https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
 * A: https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/discuss/805698/Javascript-Python3-C%2B%2B-In-Degree-0
 */

let findSmallestSetOfVertices = (N, E) => {
    let deg = Array(N).fill(0);
    E.forEach(([_, tail]) => ++deg[tail]);
    return deg.map((x, i) => x ? -1 : i).filter(x => -1 < x);
};

// simplified
let findSmallestSetOfVertices = (N, E) => {
    let all = new Set([...Array(N).keys()]);
    E.forEach(([_, tail]) => all.delete(tail));
    return [...all];
};
