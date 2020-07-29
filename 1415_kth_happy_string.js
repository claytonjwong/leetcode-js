/*
 * 1415. The k-th Lexicographical String of All Happy Strings of Length n
 *
 * Q: https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/
 * A: https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/discuss/589380/Javascript-and-C%2B%2B-solutions
 */

let getHappyString = (N, K, ans = '') => {
    let go = (i = 0, path = []) => {
        if (!K)
            return;
        if (i == N) {
            if (!--K)
                ans = path.join(''); // 🎯 K-th happy string
            return;
        }
        for (let c of ['a', 'b', 'c'])
            if (!path.length || c != path[path.length - 1])
                go(i + 1, path.concat(c)); // 🚀 DFS explore path ⭐️ with implicit path forward/back-tracking 👀
    };
    go();
    return ans;
};
