/*
 * 605. Can Place Flowers
 *
 * Q: https://leetcode.com/problems/can-place-flowers/
 * A: https://leetcode.com/problems/can-place-flowers/discuss/103899/Kt-Js-Py3-Cpp-Greedy-Linear-Scan
 */

let canPlaceFlowers = (A, K) => {
    let N = A.length;
    if (!K) return true;
    if (!N) return false;
    if (N == 1) return !A[0] && K == 1;
    let plant = i => { A[i] = 1, --K };
    if (!A[0] & !A[1])
        plant(0);                           // 🌸 👈 left-most position 0
    for (let i = 1; i + 1 < N; ++i)
        if (!A[i - 1] & !A[i] & !A[i + 1])
            plant(i);                       // 👉 🌸 👈 middle positions 1..N - 2
    if (!A[N - 2] & !A[N - 1])
        plant(N - 1);                       // 👉 🌸 right-most position N - 1
    return K <= 0;
};
