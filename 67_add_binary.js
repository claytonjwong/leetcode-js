 /*
  * 67. Add Binary
  *
  * Q: https://leetcode.com/problems/add-binary/
  * A: https://leetcode.com/problems/add-binary/discuss/606766/Javascript-and-C%2B%2B-solutions
  */
 let addBinary = (a, b, carry = 0, ans = []) => {
    let M = a.length,
        N = b.length;
    let A = a.split('').reverse(),
        B = b.split('').reverse();
    for (let i = 0; i < Math.max(M, N); ++i) {
        let x = Number(i < M && A[i] == '1')
              + Number(i < N && B[i] == '1')
              + carry;
        ans.push(x & 1);
        carry = Number(x > 1);
    }
    if (carry)
        ans.push(1);
    return ans.reverse().join('');
};