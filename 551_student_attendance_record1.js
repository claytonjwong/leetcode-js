/*
 * 551. Student Attendance Record I
 *
 * Q: https://leetcode.com/problems/student-attendance-record-i/
 * A: https://leetcode.com/problems/student-attendance-record-i/discuss/596959/Javascript-and-C%2B%2B-solutions
 */

let checkRecord = S => S.split('').filter(c => c == 'A').length <= 1 && !S.includes('LLL');