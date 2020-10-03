/*
 * 1604. Alert Using Same Key-Card Three or More Times in a One Hour Period
 *
 * Q: https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/
 * A: https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/discuss/876799/Javascript-Python3-C%2B%2B-Map-%2B-Queue
 */

let alertNames = (names, times, m = new Map(), alerts = new Set()) => {
    let minutes = time => Number(time.split(':')[0] * 60) + Number(time.split(':')[1]);
    _.zip(names, times).forEach(([ name, time ]) => m.set(name, (m.get(name) || []).concat(minutes(time))));
    for (let [name, times] of [...m.entries()]) {
        let q = [];
        for (let time of times.sort((a, b) => a - b)) {
            while (q.length && q[0] + 60 < time)
                q.shift();
            q.push(time);
            if (3 <= q.length) {
                alerts.add(name);
                break;
            }
        }
    }
    return [...alerts].sort((a, b) => a.localeCompare(b));
};
