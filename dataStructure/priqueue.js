//优先队列
class priqueue {
    constructor () {
        this.n = 0;
        //优先队列从1开始存储数据
        this.x = [];
    }

    swap (i, j) {
        const t = this.x[i];
        this.x[i] = this.x[j]; 
        this.x[j] = t;
    }

    siftup (n) {
        let p;
        for (let i = n; i > 1 && this.x[p = Math.floor(i / 2)] > this.x[i]; i = p) {
            this.swap(p, i);
        }
    }

    siftdown (n) {
        let c;
        for (let i = 1; (c = i * 2) <= n; i = c) {
            if (c + 1 <= n && this.x[c + 1] < this.x[c]) {
                c++;
            }
            if (this.x[i] <= this.x[c]) {
                break;
            }
            this.swap(c, i);
        }
    }

    insert (t) {
        this.x[++this.n] = t;
        this.siftup(this.n);
    }

    extractmin () {
        const t = this.x[1];
        this.x[1] = this.x[this.n--];
        this.siftdown(this.n);
        return t;
    }
}

const q = new priqueue();
q.insert(1);
q.insert(8);
q.insert(3);
q.insert(4);
q.insert(2);
q.insert(123);
q.insert(99);
q.insert(0);

console.log(q.extractmin());
console.log(q.extractmin());
console.log(q.extractmin());
console.log(q.extractmin());
console.log(q.extractmin());
console.log(q.extractmin());
console.log(q.extractmin());
console.log(q.extractmin());
