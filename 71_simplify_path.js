/*
 * 71. Simplify Path
 *
 * Q1: https://leetcode.com/problems/simplify-path/
 * A1: https://leetcode.com/problems/simplify-path/discuss/549428/Javascript-and-C%2B%2B-solutions
 */

let simplifyPath = (path, stack = []) => {
    let A = path.split('/').filter(x => x.length > 0);
    for (let dir of A)
        if (dir != '.' && dir != '..')
            stack.push(dir);
        else if (dir == '..' && stack.length > 0)
            stack.pop();
    return '/' + stack.join('/');
};