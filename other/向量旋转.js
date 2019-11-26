//将向量a旋转m长度
//比如[1,2,3,4,5]旋转2个长度 => [3,4,5,1,2]

const rotate = {
    gcd (x, y) {
        if (x < y) {
            [x, y] = [y, x];
        }
        const m = x % y;
        if (m === 0) {
            return y;
        } else {
            return this.gcd(y, m);
        }
    },
    swap (a, start, end, len) {
        for (let i = 0; i < len; i++) {
            let t = a[end + i];
            a[end + i] = a[start + i];
            a[start + i] = t;
        }
    },
    reverse (a, start, end) {
        const ci = Math.floor((end - start + 1) / 2);
        for (let i = 0; i < ci; i++) {
            let t = a[start + i];
            a[start + i] = a[end - i];
            a[end - i] = t;
        }
    },
    rotate1 (a, m) {
        const len = a.length;
        if (len <= m) {
            return a;
        }
        const ci = this.gcd(len, m);
        for (let i = 0; i < ci; i++) {
            let t = a[i];
            let j = i;
            while (true) {
                let k = (j + m) % len;
                if (k === i) {
                    break;
                }
                a[j] = a[k];
                j = k;
            }
            a[j] = t;
        }
    },
    rotate2 (a, m) {
        let i = m;
        let j = a.length - m;
        while(i != j) {
            if (i > j) {
                this.swap(a, m - i, m, j);
                i -= j;
            } else {
                this.swap(a, m - i, m + j - i, i);
                j -= i;
            }
        }
        this.swap(a, m - i, m, i);
    },
    rotate3 (a, m) {
        const len = a.length;
        this.reverse(a, 0, m - 1);
        this.reverse(a, m, len - 1);
        this.reverse(a, 0, len - 1);
    },
    main () {
        let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.rotate3(a, 7);
        console.log(a);
    }
};
rotate.main();