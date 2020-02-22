/*
 * 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance
 *
 * Q: https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/
 * A: https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/discuss/517093/Javascript-and-C%2B%2B-solutions
 */

// BFS is an incorrect algorithm!

// /**
//  * @param {number} n
//  * @param {number[][]} edges
//  * @param {number} distanceThreshold
//  * @return {number}
//  */
// let findTheCity = (N, E, T) => {
//     let G = [...Array(N)].map(row => []), // graph (adjacency matrix)
//         R = [...Array(N)].map(row => []); // reachable nodes
//     for (let [u, v, w] of E) {
//         G[u].push([v, w]);
//         G[v].push([u, w]);
//     }
//     for (let i = 0; i < N; ++i) {
//         let q = [[i, T]]; // start BFS traversal at node i with T available
//         let seen = new Set([i]);
//         while (q.length > 0) {
//             let [u, avail] = q[0]; q.shift();
//             for (let [v, w] of G[u]) {
//                 if (avail < w || seen.has(v))
//                     continue;
//                 seen.add(v);
//                 R[i].push(v);
//                 q.push([v, avail - w]);
//             }
//         }
//     }
//     let min = Infinity, ans = Infinity;
//     for (let i = N - 1; i >= 0; --i) {
//         if (min > R[i].length)
//             min = R[i].length,
//             ans = i;
//     }
//     return ans;
// };
// console.log(findTheCity(4, [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], 4));
// console.log(findTheCity(5, [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], 2));
// console.log(findTheCity(8,[[3,5,9558],[1,2,1079],[1,3,8040],[0,1,9258],[4,7,7558],[5,6,8196],[3,4,7284],[1,5,6327],[0,4,5966],[3,6,8575],[2,5,8604],[1,7,7782],[4,6,2857],[3,7,2336],[0,6,6],[5,7,2870],[4,5,5055],[0,7,2904],[1,6,2458],[0,5,3399],[6,7,2202],[0,2,3996],[0,3,7495],[1,4,2262],[2,6,1390]], 7937));

let findTheCity = (N, E, T) => {
    let dist = [...Array(N)].map(row => Array(N).fill(Infinity));
    for (let i = 0; i < N; ++i)
        dist[i][i] = 0;
    let minCity = () => {
        let min = Infinity, city = -1;
        for (let i = 0; i < N; ++i) {
            let cnt = 0;
            for (let j = 0; j < N; ++j)
                if (i != j && dist[i][j] <= T)
                    ++cnt;
            if (min >= cnt) {
                min = cnt;
                city = i;
            }
        }
        return city;
    };
    let bellmanFord = (dist) => {
        for (let k = 1; k < N; ++k) {
            for (let [u, v, w] of E) {
                if (dist[u] > dist[v] + w) dist[u] = dist[v] + w;
                if (dist[v] > dist[u] + w) dist[v] = dist[u] + w;
            }
        }
    };
    // let adj = [...Array(N)].map(row => []);
    // for (let [u, v, w] of E) {
    //     adj[u].push([v, w]);
    //     adj[v].push([u, w]);
    // }
    // let SPFA = (adj, dist, i) => {
    //     dist[i] = 0
    //     let q = [i];
    //     while (q.length > 0) {
    //         let u = q[0]; q.shift();
    //         for (let [v, w] of adj[u])
    //             if (dist[v] > dist[u] + w)
    //                 dist[v] = dist[u] + w,
    //                 q.push(v);
    //     }
    // };
    for (let i = 0; i < N; ++i) {
        bellmanFord(dist[i]);
        // SPFA(adj, dist[i], i);
    }
    return minCity();
};