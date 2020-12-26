/*
 * 1701. Average Waiting Time
 *
 * Q: https://leetcode.com/problems/average-waiting-time/
 * A: https://leetcode.com/problems/average-waiting-time/discuss/987309/Kt-Js-Py3-Cpp-Average-Wait-Time
 */

let averageWaitingTime = (A, time = 0, last = 0, wait = []) => {
    for (let [i, j] of A) {
        time = Math.max(i, last);
        last = time + j;
        wait.push(last - i);
    }
    return _.sum(wait) / wait.length;
};
