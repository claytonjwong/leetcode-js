/*
 * 1349. Maximum Students Taking Exam
 *
 * Q: https://leetcode.com/problems/maximum-students-taking-exam/
 * A: https://leetcode.com/problems/maximum-students-taking-exam/discuss/516182/Javascript-and-C%2B%2B-solutions
 */

// let maxStudents = (A, ans = 0) => {
//     let M = A.length,
//         N = A[0].length;
//     let ok = (i, j) => {
//         if (A[i][j] == '#' || A[i][j] == 'x')
//             return false;
//         let frontLeft = i == 0 || j == 0 || A[i - 1][j - 1] != 'x';
//         let frontRight = i == 0 || j == N - 1 || A[i - 1][j + 1] != 'x';
//         let left = j == 0 || A[i][j - 1] != 'x';
//         let right = j == N - 1 || A[i][j + 1] != 'x';
//         return frontLeft && frontRight && left && right;
//     };
//     let dfs = (u = 0, v = 0, cnt = 0) => {
//         ans = Math.max(ans, cnt);
//         for (let i = u; i < M; ++i) {
//             for (let j = v; j < N; ++j) {
//                 if (ok(i, j)) {
//                     A[i][j] = 'x';
//                     dfs(i, j, cnt + 1);
//                     A[i][j] = '.';
//                 }
//             }
//             v = 0;
//         }
//         return ans;
//     };
//     return dfs();
// };

/*

go()
    for each current row, create a list of all seating arrangements based on the previous row
        ans = max(ans, # seated students + go(cur seating arrangement))

getSeats()

    returns all possible seating arrangements

*/

let maxStudents = A => {
    let M = A.length,
        N = A[0].length;
    let getSeats = (seats, i, j, pre, cur = 0) => {
        if (j == N) {
            seats.push(cur);
            return;
        }
        // with j-th seat
        let frontL = () => i == 0 || j == 0     || (pre & 1 << (j - 1)) == 0;
        let frontR = () => i == 0 || j == N - 1 || (pre & 1 << (j + 1)) == 0;
        let L = () => j == 0     || (cur & 1 << (j - 1)) == 0;
        let R = () => j == N - 1 || (cur & 1 << (j + 1)) == 0;
        if (A[i][j] != '#' && frontL() && frontR() && L() && R()) {
            cur |= 1 << j;
            getSeats(seats, i, j + 1, pre, cur);
            cur ^= 1 << j;
        }
        // without j-th seat
        getSeats(seats, i, j + 1, pre, cur);
    };
    let bits = x => x.toString(2).split('').filter(c => c == '1').length;
    let go = (i = 0, pre = 0, memo = [...Array(M + 1)].map(row => Array(1 << N).fill(-1)), seats = [], ans = 0) => {
        if (memo[i][pre] > -1)
            return memo[i][pre];
        if (i == M)
            return memo[i][pre] = 0;
        getSeats(seats, i, 0, pre);
        for (let cur of seats)
            ans = Math.max(ans, bits(cur) + go(i + 1, cur, memo));
        return memo[i][pre] = ans;
    };
    return go();
};
let ans = maxStudents([
    ['#','.','#','#','.','#'],
    ['.','#','#','#','#','.'],
    ['#','.','#','#','.','#']
]);
console.log(ans);