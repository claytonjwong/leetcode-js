/*
 * 134. Gas Station
 *
 * Q: https://leetcode.com/problems/gas-station/
 * A: https://leetcode.com/problems/gas-station/discuss/861437/Javascript-Python3-C%2B%2B-Recursive-Brute-Force
 */

let canCompleteCircuit = (gas, cost) => {
    let N = gas.length;
    let go = (i, total, steps = 0) => {
        if (steps == N)
            return true;
        if ((total -= cost[i]) < 0)
            return false;
        let j = i + 1 < N ? i + 1 : 0;
        return go(j, total + gas[j], steps + 1)
    };
    for (let start = 0; start < N; ++start)
        if (go(start, gas[start]))
            return start;
    return -1;
};
