/*
 * 690. Employee Importance
 *
 * Q: https://leetcode.com/problems/employee-importance/
 * A: https://leetcode.com/problems/employee-importance/discuss/599340/Javascript-and-C%2B%2B-solutions
 */

let GetImportance = (E, id, m = {}) => {
    E.forEach((emp, i) => m[emp.id] = i);
    let go = (i = m[id]) => {
        let sum = E[i].importance;
        for (let j of E[i].subordinates)
            sum += go(m[j]);
        return sum;
    };
    return go();
};