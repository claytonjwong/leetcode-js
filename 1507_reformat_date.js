/*
 * 1507. Reformat Date
 *
 * Q: https://leetcode.com/problems/reformat-date/
 * A: https://leetcode.com/problems/reformat-date/discuss/730585/Javascript-and-C%2B%2B-solutions
 */
let reformatDate = date => new Date(date.replace('th', '').replace('st', '').replace('nd', '').replace('rd', '')).toISOString().slice(0, 10);

let reformatDate = date => {
    let [d, m, y] = date.split(' ');
    d = d.slice(0, d.length - 2);
    if (d.length == 1)
        d = '0' + d;
	if (m == 'Jan') m = '01';
	if (m == 'Feb') m = '02';
	if (m == 'Mar') m = '03';
	if (m == 'Apr') m = '04';
	if (m == 'May') m = '05';
	if (m == 'Jun') m = '06';
	if (m == 'Jul') m = '07';
	if (m == 'Aug') m = '08';
	if (m == 'Sep') m = '09';
	if (m == 'Oct') m = '10';
	if (m == 'Nov') m = '11';
	if (m == 'Dec') m = '12';
    return [y, m, d].join('-');
};