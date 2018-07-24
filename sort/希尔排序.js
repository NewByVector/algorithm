//希尔排序
//非稳定排序
//时间复杂度O(nlogn)
const Shell = {
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
        let N = a.length;
        let h = 1;

        while( h < Math.floor(N / 3)) {
            h = h * 3 + 1;  //递增序列 1 4 13 40 121 364 1093 ...
        }

        while (h >= 1) {
            for (let i = h; i < N; i++) {
                for (let j = i; j >= h && this.less(a[j], a[j - h]); j -=h) {
                    this.exch(a, j, j - h);
                }
            }
            h = Math.floor(h / 3);
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