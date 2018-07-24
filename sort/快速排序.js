//快速排序
//非稳定排序
//时间复杂度O(nlogn)
const Quick = {
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
        this.quickSort(a, 0, a.length - 1);
    },
    quickSort (a, left, right){
        if (right <= left) {
            return;
        }
        let j = this.partition(a, left, right);
        this.quickSort(a, left, j - 1);
        this.quickSort(a, j + 1, right);
    },
    partition (a, left, right) {
        let v = a[left];  //切分元素选第一个
        let i = left;
        let j = right + 1;
        while (true) {
            //从左边开始找到比v大的元素
            while (this.less(a[++i], v)) {
                if (i == right) {
                    break;
                }
            }
            //从右边开始找比v小的元素
            while (this.less(v, a[--j])) {
                if (j == left) {
                    break;
                }
            }
            if (i >= j) {
                break;
            }
            this.exch(a, i, j);
        }
        this.exch(a, left, j);
        return j;
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

Quick.main();