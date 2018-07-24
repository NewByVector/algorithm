//堆排序
//非稳定排序
//时间复杂度O(nlogn)
const Heap = {
    show (a) {
        console.log(a);
    },
    less (v, w) {
        return v < w;
    },
    exch (a, i, j) {
        let t = a[i];
        a[i] = a[j];
        a[j] = t;
    },
    isSorted (a) {
        for (let i = 1; i < a.length; i++) {
            if (this.less(a[i], a[i - 1])) {
                console.log('sorted failed');
                return false;
            }
        }
        console.log('sorted success');
        return true;
    },
    sort (a) {
        var N = a.length;
        a.unshift(0);  //推排序从1开始
        for (var k = Math.floor(N / 2); k >=1; k--) {
            this.sink(a, k, N);
        }
        while(N > 1) {
            this.exch(a, 1, N--);
            this.sink(a, 1, N);
        }
        a.shift();
    },
    sink (a, k, N){
        while(2 * k <= N) {
            var j = 2 * k;
            if (j < N && this.less(a[j], a[j + 1])) j++;
            if (!this.less(a[k], a[j])) break;
            this.exch(a, k, j);
            k = j;
        }
    },
    main () {
        let a = [];
        for (let i = 0; i < 100; i++) {
            a[i] = Math.random();
        }
        this.sort(a);
        this.isSorted(a);
        this.show(a);
    }
};

Heap.main();