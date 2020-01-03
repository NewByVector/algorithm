//堆排序
//非稳定排序
//时间复杂度O(nlogn)
const Heap = {
    show(a) {
        console.log(a);
    },
    less(v, w) {
        return v < w;
    },
    exch(a, i, j) {
        let t = a[i];
        a[i] = a[j];
        a[j] = t;
    },
    isSorted(a) {
        for (let i = 1; i < a.length; i++) {
            if (this.less(a[i], a[i - 1])) {
                console.log('sorted failed');
                return false;
            }
        }
        console.log('sorted success');
        return true;
    },
    sort(a) {
        var N = a.length;
        a.unshift(0); //推排序从1开始
        for (let i = 2; i <= N; i++) {
            this.siftup(a, i);
        }
        for (let i = N; i >= 2; i--) {
            this.exch(a, 1, i);
            this.siftdown(a, i - 1);
        }
    },
    siftup(a, n) {
        let p;
        for (let i = n; i > 1 && a[p = Math.floor(i / 2)] < a[i]; i = p) {
            this.exch(a, p, i);
        }
    },
    siftdown(a, n) {
        let c;
        for (let i = 1;
            (c = i * 2) <= n; i = c) {
            if (c + 1 <= n && a[c + 1] > a[c]) {
                c++;
            }
            if (a[i] >= a[c]) {
                break;
            }
            this.exch(a, c, i);
        }
    },
    main() {
        let a = [];
        for (let i = 0; i < 1000000; i++) {
            a[i] = Math.random();
        }
        this.sort(a);
        this.isSorted(a);
    }
};

Heap.main();
