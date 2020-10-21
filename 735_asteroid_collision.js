/*
 * 735. Asteroid Collision
 *
 * Q: https://leetcode.com/problems/asteroid-collision/
 * A: https://leetcode.com/problems/asteroid-collision/discuss/109683/Kt-Js-Py3-Cpp-Simulate-Collisions
 */

let asteroidCollision = (pre, ok = true, abs = Math.abs) => {
    do {
        ok = true;
        let cur = [];
        for (let i = 0; i < pre.length; ++i) {
            // ✅ case 1: no collision
            if (!cur.length || cur[cur.length - 1] < 0 || (0 <= cur[cur.length - 1] && 0 <= pre[i])) {
                cur.push(pre[i]);
                continue;
            }
            // 🚫 case 2: 💥 collision
            ok = false;
            let last = cur.pop();
            if (abs(last) != abs(pre[i]))
                cur.push(abs(last) < abs(pre[i]) ? pre[i] : last);
        }
        [pre, cur] = [cur, pre];
    } while (!ok);
    return pre;
};
