//冒泡排序
const Bubble = {
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
        const len = a.length;
        for (let i = 1; i < len; i++) {
            for (let j = 0; j < len - i; j++) {
                if (this.less(a[j + 1], a[j])) {
                    this.exch(a, j, j + 1);
                }
            }
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