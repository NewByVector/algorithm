//基于有序数组的二分查找
class BinarySearchST {
    constructor() {
        this.keys = [];
        this.values = [];
        this.N = 0;
    }
    compareTo(v1, v2) {
        return v1.charCodeAt(0) - v2.charCodeAt(0);
    }
    get (key) {
        if (this.N === 0) {
            return null;
        }
        let i = this.rank(key);
        if (i < this.N && this.compareTo(this.keys[i], key) === 0) {
            return this.values[i];
        } else {
            return null;
        }
    }
    put (key, value) {
        let i = this.rank(key);
        if (i < this.N && this.compareTo(this.keys[i], key) === 0) {
            this.values[i] = value;
            return;
        }
        for (let j = this.N; j > i; j++) {
            this.keys[j] = this.keys[j - 1];
            this.values[j] = this.values[j - 1];
        }
        this.keys[i] = key;
        this.values[i] = value;
        this.N++; 
    }
    rank (key) {
        let lo = 0;
        let hi = this.N - 1;
        while(lo <= hi) {
            let mid = lo + Math.floor((hi - lo) / 2);
            let cmp = this.compareTo(key, this.keys[mid]);
            if (cmp < 0) {
                hi = mid - 1;
            } else if (cmp > 0) {
                lo = mid + 1;
            } else {
                return mid;
            }
        }
        return lo;
    }
}

//测试
let st = new BinarySearchST();
st.put('A', 1);
st.put('B', 2);
st.put('C', 3);
st.put('A', 4);
st.get('A');