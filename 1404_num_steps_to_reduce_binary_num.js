/*
 * 1404. Number of Steps to Reduce a Number in Binary Representation to One
 *
 * Q: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/
 * A: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/discuss/564286/Javascript-and-C%2B%2B-solutions
 */

let numSteps = (s, steps = 0) => {
    let A = s.split('').map(Number);
    let div = () => A.pop();
    let inc = () => {
        let N = A.length, i = N - 1, carry = 1;
        A[i] = 0; // 1 + 1 = 0 and carry = 1
        while (--i >= 0 && carry)
            if (A[i])
                A[i] = 0; // 1 + 1 = 0 and carry = 1
            else
                A[i] = 1, // 0 + 1 = 1 and carry = 0
                carry = 0;
        if (carry) A.unshift(1);
    }
    while (A.length > 1) {
        if (A[A.length - 1] == 0)
            div();
        else
            inc();
        ++steps;
    }
    return steps;
};