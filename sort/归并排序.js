//归并排序
//稳定排序、
//时间复杂度O(nlogn)
const Merge = {
    show (a) {
        console.log(a);
    },
    less (v, w) {
        return v < w;
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
        this.mergeSort(a, 0, a.length - 1);
    },
    mergeSort (a, left, right){
        if (right <= left) {
            return;
        }
        let mid = left + Math.floor((right - left) / 2);
        this.mergeSort(a, left, mid);
        this.mergeSort(a, mid + 1, right);
        this.merge(a, left, mid, right);
    },
    merge (a, left, mid, right) {
        let i = left;
        let j = mid + 1;
        let aux = a.concat();
        for (let k = left; k <= right; k++) {
            if (i > mid) {
                a[k] = aux[j++];
            } else if (j > right) {
                a[k] = aux[i++];
            } else if (this.less(aux[j], aux[i])) {
                a[k] = aux[j++];
            } else {
                a[k] = aux[i++];
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

Merge.main();