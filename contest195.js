/*
 * https://leetcode.com/contest/weekly-contest-195/ranking/26/
 *
 * Rank          Name           Score    Finish Time    Q1 (3)	      Q2 (4)     Q3 (6)    Q4 (7)
 * 626 / 8068    claytonjwong   7        0:52:46        0:32:56 *3	  0:37:46
 */

let isPathCrossing = (A, i = 0, j = 0, seen = new Set([`0,0`])) => {
    for (let c of A) {
        if (c == 'N') --i; if (c == 'W') --j; // -1 for 👆 North or 👈 West
        if (c == 'S') ++i; if (c == 'E') ++j; // +1 for 👇 South or 👉 East
        if (seen.has(`${i},${j}`)) // path seen? 👀
            return true;
        seen.add(`${i},${j}`);
    }
    return false; // path not seen 👀
};

let canArrange = (A, K) => !(A.reduce((a, b) => a + b) % K);