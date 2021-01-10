/*
 * 1720. Decode XORed Array
 *
 * Q: https://leetcode.com/problems/decode-xored-array/
 * A: https://leetcode.com/problems/decode-xored-array/discuss/1009766/Kt-Js-Py3-Cpp-XOR-Last
 */

let decode = (A, K, ans = [K]) => {
    for (let x of A)
        ans.push(x ^ ans[ans.length - 1]);
    return ans;
};
