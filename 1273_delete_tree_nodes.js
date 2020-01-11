/*
 * 1273. Delete Tree Nodes
 *
 * Q: https://leetcode.com/problems/delete-tree-nodes/
 * A: https://leetcode.com/problems/delete-tree-nodes/discuss/476958/Javascript-and-C%2B%2B-solutions
 */

 // two-pass
 /*
let deleteTreeNodes = (N, parent, value) => {
    let children = [...Array(N)].map(row => []);
    for (let i = 1; i < N; ++i) { // i-th child, j-th parent
        let j = parent[i];
        children[j].push(i);
    }
    let dfs = (node, sum = 0) => {
        for (let child of children[node])
            sum += dfs(child);
        return value[node] += sum;
    };
    let bfs = (node, cnt = 1) => { // count starts at 1 to include the root node
        for (let q = children[node]; q.length > 0; q.shift()) {
            let cur = q[0];
            if (value[cur] != 0)
                q.push(...children[cur]), ++cnt;
        }
        return cnt;
    };
    dfs(0);
    return bfs(0);
};
*/

let deleteTreeNodes = (N, parent, value) => {
    let children = [...Array(N)].map(row => []);
    for (let i = 1; i < N; ++i)
        children[parent[i]].push(i);
    let dfs = (node, sum = 0) => {
        for (let child of children[node])
            sum += dfs(child);
        return value[node] += sum;
    };
    let bfs = (node, cnt = 1) => { // count starts at 1 to include the root node
        for (let q = children[node]; q.length > 0; q.shift())
            if (value[q[0]] != 0)
                q.push(...children[q[0]]), ++cnt;
        return cnt;
    };
    dfs(0);
    return bfs(0);
};

console.log(deleteTreeNodes(7, [-1,0,0,1,2,2,2], [1,-2,4,0,-2,-1,-1]));
