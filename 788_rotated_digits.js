/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = (N, ans=0) => {
    rotate = {
        '0':'0', '1':'1', '8':'8', '2':'5', '5':'2', '6':'9', '9':'6'
    };
    for (let num=1; num <= N; ++num) {
        var pre = num.toString().split(), cur = [];
        var valid = true;
        for (let digit of pre) {
            if (!rotate[digit]) {
                valid = false;
                break;
            }
            cur.push(rotate[digit]);
        }
        if (valid && pre.toString() != cur.toString())
            ++ans;
    }
    return ans;
};

var ans = rotatedDigits(10);
console.log(ans);