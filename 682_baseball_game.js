/*
 * 682. Baseball Game
 *
 * Q: https://leetcode.com/problems/baseball-game/
 * A: https://leetcode.com/problems/baseball-game/discuss/107929/C%2B%2B-and-Javascript-solutions
 */

let calPoints = (ops, s = []) => {
  for (op of ops) {
      let N = s.length;
      if (op == '+')
          s.push(s[N - 2] + s[N - 1]);
      else if (op == 'D')
          s.push(2 * s[N - 1]);
      else if (op == 'C')
          s.pop();
      else
          s.push(Number(op));
  }
  return _.sum(s)
};
