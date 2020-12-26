/*
 * 1700. Number of Students Unable to Eat Lunch
 *
 * Q: https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
 * A: https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/discuss/987305/Kt-Js-Py3-Cpp-Do-we-HAVE-what-we-NEED
 */

let countStudents = (need, have, m = new Map()) => {
    need.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    while (have.length && 0 < m.get(have[0])) {
        if (have[0] != need[0]) {
            need.push(need.shift());
            continue;
        }
        let x = have[0];
        m.set(x, -1 + m.get(x));
        have.shift();
        need.shift();
    }
    return need.length;
};
