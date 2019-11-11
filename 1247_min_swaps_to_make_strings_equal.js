/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
let minimumSwap = (A, B) => {
    let cnt = target => [...A].filter(c => c == target).length +
                        [...B].filter(c => c == target).length;
    let x = cnt('x'),
        y = cnt('y');
    if (x % 2 || y % 2)
        return -1;
    let a = 0, // count of A/B mismatches where 'x' exists in A
        b = 0; // count of A/B mismatches where 'x' exists in B
    for (let i=0; i < A.length; ++i) {
        if (A[i] == B[i])
            continue;
        a += A[i] == 'x';
        b += B[i] == 'x';
    }
    let f = Math.floor;
    return f(a / 2) + f(b / 2) + ((a % 2) + (b % 2));
};
let ans = minimumSwap('xxyyxyxyxx',
                      'xyyxyxxxyx');
console.log(ans);