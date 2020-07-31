/*
 * 1496. Path Crossing
 *
 * Q: https://leetcode.com/problems/path-crossing/
 * A: https://leetcode.com/problems/path-crossing/discuss/709194/Javascript-and-C%2B%2B-solutions
 */

let isPathCrossing = (A, i = 0, j = 0, seen = new Set([`0,0`])) => {
    for (let c of A) {
        if (c == 'N') --i; if (c == 'W') --j; // -1 for 👆 North or 👈 West
        if (c == 'S') ++i; if (c == 'E') ++j; // +1 for 👇 South or 👉 East
        if (seen.has(`${i},${j}`)) // 🚫 path seen 👀
            return true;
        seen.add(`${i},${j}`);
    }
    return false;                  // ✅ path *not* seen 👀
};
