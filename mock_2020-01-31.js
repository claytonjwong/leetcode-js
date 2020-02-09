/*
let simplifyPath = path => {
    let P = path.split('/').filter(x => x.length > 0), stack = [];
    for (let dir of P) {
        if (dir == '.') {
            continue;
        } else if (dir == '..') {
            if (stack.length > 0)
                stack.pop();
        } else {
            stack.push(dir);
        }
    }
    if (stack.length == 0)
        return '/';
    stack.unshift('')
    return stack.join('/');
};
console.log(simplifyPath('/home/'));
console.log(simplifyPath('/../'));
console.log(simplifyPath('/home//foo'));
console.log(simplifyPath('/a/./b/../../c/'));
console.log(simplifyPath('/a/../../b/../c//.//'));
*/

/*
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
};

let closestValue = (root, T) => {
    let best = root.val;
    let abs = Math.abs;
    let go = root => {
        let diff = abs(root.val - T);
        if (abs(best - T) > diff)
            best = root.val;
        if (root.left) go(root.left);
        if (root.right) go(root.right);
    };
    go();
    return best;
};

let root = new TreeNode(1);
root.right = new TreeNode(2);
console.log(closestValue(root, 3.428571));
*/



/*
Your interview score of 7.35/10 beats 79% of all users.
Time Spent: 18 minutes 45 seconds
Time Allotted: 1 hour
*/

/*
let sortedSquares = A => {
    return S = [...A].map(x => x * x).sort((a, b) => a - b);
};
*/

/*
let customSortString = (S, T, ans = []) => {
    let m = [...Array(26)].map((row, i) => [i + 'a'.charCodeAt(0), 0, Infinity]); // char, cnt, order
    for (let c of T)
        ++m[c.charCodeAt(0) - 'a'.charCodeAt(0)][1];
    for (let i = 0; i < S.length; ++i)
        m[S[i].charCodeAt(0) - 'a'.charCodeAt(0)][2] = i;
    m.sort((a, b) => a[2] - b[2]);
    for (let [ch, cnt, _] of m) {
        while (cnt--)
            ans.push(String.fromCharCode(ch));
    }
    return ans.join('')
};

console.log(customSortString('cba', 'abcd'));
*/



