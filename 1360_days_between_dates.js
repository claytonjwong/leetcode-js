/*
 * 1360. Number of Days Between Two Dates
 *
 * Q: https://leetcode.com/problems/number-of-days-between-two-dates/
 * A: https://leetcode.com/problems/number-of-days-between-two-dates/discuss/517586/Javascript-and-C%2B%2B-solutions
 */

let daysBetweenDates = (a, b) => {
    let leapYears = (y, m) => {
        if (m <= 2) --y; // don't count current year if month is Jan/Feb
        let f = Math.floor;
        return f(y / 400) + f(y / 4) - f(y / 100);
    };
    let monthDays = [0, 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    for (let i = 1; i < monthDays.length; ++i)
        monthDays[i] += monthDays[i - 1];
    let days = (y, m, d) => (y * 365) + leapYears(y, m) + monthDays[m] + d;
    let p = days(...a.split('-').map(Number)),
        q = days(...b.split('-').map(Number));
    return Math.abs(p - q);
};
let ans = daysBetweenDates('2019-06-30', '2019-06-29');
console.log(ans);