//基于无序链表的顺序查找
class Node {
    constructor (key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next;
    } 
}
class SequentialSearchST {
    constructor() {
        this.first = null;
    }
    equals(v1, v2) {
        return v1 === v2;
    }
    get (key) {
        for (let x = this.first; x != null; x = x.next) {
            if (this.equals(key, x.key)) {
                return x.value;
            }
        }
        return null;
    }
    put (key, value) {
        for (let x = this.first; x != null; x = x.next) {
            if (this.equals(key, x.key)) {
                x.value = value;
                return;
            }
        }
        this.first = new Node(key, value, this.first);
    }
}

//测试
let st = new SequentialSearchST();
st.put('A', 1);
st.put('B', 2);
st.put('C', 3);
st.put('A', 4);
st.get('A');