/*
 * 431. Encode N-ary Tree to Binary Tree
 *
 * Q: https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/
 * A: https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/discuss/920789/Kt-Js-Py3-Cpp-Recursive-Copy
 */

class Codec {
    encode(parent) {
        if (!parent)
            return null;
		let copy = new TreeNode(parent.val);
        let next = null;
        for (let child of parent.children)
            if (next)
                next.right = this.encode(child), next = next.right;
            else
                next = copy.left = this.encode(child);
        return copy;
    }
    decode(parent) {
		if (!parent)
            return null;
        let copy = new Node(parent.val, []);
        let next = parent.left;
        while (next)
            copy.children.push(this.decode(next)), next = next.right;
        return copy;
    }
}
