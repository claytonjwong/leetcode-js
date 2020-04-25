/*
 * 475. Heaters
 *
 * Q: https://leetcode.com/problems/heaters/
 * A: https://leetcode.com/problems/heaters/discuss/595623/Javascript-and-C%2B%2B-solutions
 */

let findRadius = (home, heat, max = 0) => {
    home.sort((a, b) => a - b);
    heat.sort((a, b) => a - b);
    let M = home.length,
        N = heat.length;
    let i = 0,
        L = 0,
        R = 1;
    for (let i = 0; i < M;) {
        let min = Infinity;
        if (home[i] <= heat[L]) {     // case 1: 🏠i <-- 🔥L
            min = heat[L] - home[i];
        } else if (R < N) {
            if (home[i] <= heat[R]) { // case 2: 🔥L --> 🏠i <-- 🔥R
                min = Math.min(
                    home[i] - heat[L],
                    heat[R] - home[i]
                );
            } else {                  // case 3: 🔥L 🔥R --> 🏠i
                ++L, ++R; continue;
            }
        } else {                      // case 4: 🔥L --> 🏠i  (R == N, so there is no 🔥R)
            min = home[i] - heat[L];
        }
        max = Math.max(max, min);
        ++i;
    }
    return max;
};
console.log(findRadius([1,2,3],[2]));
console.log(findRadius([1,2,3,4],[1,4]));
console.log(findRadius([1,2,3,4,5,6,7,8,9],[3,4]));
let houses = [
    282475249,
    622650073,
    984943658,
    144108930,
    470211272,
    101027544,
    457850878,
    458777923
];
let heaters = [
    823564440,
    115438165,
    784484492,
    74243042,
    114807987,
    137522503,
    441282327,
    16531729,
    823378840,
    143542612
];
console.log(findRadius(houses.sort((a, b) => a - b), heaters.sort((a, b) => a - b)));