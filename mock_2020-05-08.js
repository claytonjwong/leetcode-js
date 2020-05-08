//
// Question 1
//
let compare = (A, target, ans = []) => {
    let hash = (s, m = new Map()) => {
      s.split('').forEach((c, i) => m.set(c, (m.get(c) || []).concat(i)));
      return [...m].map(a => a[1].join(',')).sort((a, b) => a.localeCompare(b)).join(':');
    };
    let T = hash(target); // 🎯
    A.forEach(s => {
      if (hash(s) == target)
          ans.push(s);
    });
    return ans;
};


//
// Question 2
//
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

let makeTree = head => {
  let go = (head, i, j) => {
    let k = Math.floor((i + j) / 2),
        steps = k - i;
    let cur = head,
        pre = head;
    while (steps--)
      cur = cur.next;
    let root = new TreeNode(cur.val);
    root.left = i <= k - 1 ? go(pre, i, k - 1) : null;
    root.right = k + 1 <= j ? go(cur.next, k + 1, j) : null;
    return root;
  };
  let N = 0; for (let cur = head; cur; cur = cur.next, ++N);
  return head ? go(head, 0, N - 1) : null;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next.next = new ListNode(7);
head.next.next.next.next.next.next.next = new ListNode(8);
let root = makeTree(head);


//
// Question 3
//
let hasSeqSum = (A, T) => {
    let N = A.length;
    let i = 0,
        j = 0,
        sum = 0;
    while (j < N) {
        if (sum < T) sum += A[j++]; // expand window
        if (sum > T) sum -= A[i++]; // shrink window
        if (sum == T) // 🎯
            return true;
    }
    return false;
};

console.log(hasSeqSum([1, 3, 1, 4, 23], 8)); // true
console.log(hasSeqSum([1, 3, 1, 4, 23], 7)); // false

console.log(hasSeqSum([1, 1, 1], 3)); // true
console.log(hasSeqSum([1, 1, 1], 2)); // true
console.log(hasSeqSum([1, 1, 1], 1)); // true