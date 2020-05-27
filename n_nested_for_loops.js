/*
 * Brute-Force: N nested for-loops
 */

// verbose
let go = (n, s = []) => {
    if (!n) {
        console.log(s.join(''));
        return;
    }
    for (let i = 0; i < 10; ++i) {
        s.push(i);
        go(n - 1, s);
        s.pop();
    }
};

// concise
let go = (n, s = []) => {
    if (!n) {
        console.log(s.join(''));
        return;
    }
    for (let i = 0; i < 10; ++i)
        go(n - 1, s.concat(i));
}

// for (let i = 0; i < 10; ++i)
//     for (let j = 0; j < 10; ++j)
//         for (let k = 0; k < 10; ++k)
//             console.log(`${i}${j}${k}`);
go(3);