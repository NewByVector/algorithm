//基于二叉树的查找
class Node {
    constructor (key, val, N) {
        this.key = key;  //键
        this.val = val;  //值
        this.N = N;  //以该节点为跟节点的子树中节点总数
    }
}
class BST {
    constructor () {
        this.root = null;
    }
    compareTo (v1, v2) {
        return v1.localeCompare(v2);
    }
    size () {
        return this.nodeSize(this.root);
    }
    nodeSize (node) {
        if (node == null) {
            return 0;
        } else {
            return node.N;
        }
    }
    get (key) {
        return this.getByNode(this.root, key);
    }
    getByNode (node, key) {
        if (node === null) {
            return null;
        }
        let cmp = this.compareTo(key, node.key);
        if (cmp < 0) {
            return this.getByNode(node.left, key);
        } else if (cmp > 0) {
            return this.getByNode(node.right, key);
        } else {
            return node.val;
        }
    }
    put (key, val) {
        this.root = this.putByNode(this.root, key, val);
    }
    putByNode (node, key, val) {
        if (node == null) {
            return new Node(key, val, 1);
        }
        let cmp = this.compareTo(key, node.key);
        if (cmp < 0) {
            node.left = this.putByNode(node.left, key, val);
        } else if (cmp > 0) {
            node.right = this.putByNode(node.right, key, val);
        } else {
            node.val = val;
        }
        node.N = this.nodeSize(node.left) + this.nodeSize(node.right) + 1;
        return node;
    }
}

//测试
let bst = new BST();
bst.put('S', 1);
bst.put('E', 2);
bst.put('A', 3);
bst.put('C', 4);
bst.put('R', 5);
bst.put('H', 6);
bst.put('M', 7);
bst.put('P', 8);
bst.put('X', 9);

bst.get('C');
bst.get('X');