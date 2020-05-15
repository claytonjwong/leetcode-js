/*
 * 937. Reorder Data in Log Files
 *
 * Q: https://leetcode.com/problems/reorder-data-in-log-files/
 * A: https://leetcode.com/problems/reorder-data-in-log-files/discuss/633431/Javascript-and-C%2B%2B-solutions
 */
let reorderLogFiles = A => {
    let [L, D] = _.partition(A, log => { // letters, digits
        let i = log.indexOf(' ');
        return log[i + 1].charCodeAt(0) >= 97; // 'a'
    });
    L.sort((a, b) => {
        let i = a.indexOf(' '),
            j = b.indexOf(' ');
        return a.substring(i) == b.substring(j) ? a.substring(0, i).localeCompare(b.substring(0, j)) : a.substring(i).localeCompare(b.substring(j));
    })
    return L.concat(D);
};