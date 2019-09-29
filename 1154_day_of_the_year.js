/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const [y, m, d] = date.split("-").map(Number);
    const isLeapYear = (m > 2) && (y % 4 == 0 || y % 400 == 0) && (y % 100 != 0);
    return (isLeapYear ? 1 : 0 ) + days.slice(0, m-1).reduce((a, b) => a + b, 0) + d; // previous months' days + current month's days
};

const ans = dayOfYear("2004-03-01");
console.log(ans);