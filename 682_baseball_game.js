/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = (ops) => {
  var A = [];
  for (let op of ops) {
    var N = A.length;
    if      (op == 'C') A.pop();
    else if (op == 'D') A.push(2 * A[N-1]);
    else if (op == '+') A.push(A[N-2] + A[N-1]);
    else                A.push(parseInt(op));
  }
  return A.reduce((a, b) => a + b, 0);
};

var ops = ["5","2","C","D","+"];
var ans = calPoints(ops);
console.log(ans);