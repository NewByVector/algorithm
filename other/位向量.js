//位向量

class VectorBit {
    constructor (maxVal) {
        this.BITSPERWORD = 32;
        this.SHIFT = 5;
        this.MASK = 0x1F;
        this.maxVal = maxVal;
        this.x = new Int32Array(Math.ceil(maxVal / this.BITSPERWORD));
        this.N = 0;
    }
    set (i) {
        this.x[i >> this.SHIFT] |= (1 << (i & this.MASK));
    }

    clr (i) {
        this.x[i >> this.SHIFT] &= ~(1 << (i & this.MASK));
    }

    test (i) {
        return this.x[i >> this.SHIFT] & (1 << (i & this.MASK));
    }

    insert (i) {
        if (this.test(i)) {
            return;
        }
        this.set(i);
        this.N++;
    }

    report () {
        let res = [];
        for (let i = 0; i < this.maxVal; i++) {
            if (this.test(i)) {
                res.push(i);
            }
        }
        console.log(res);
    }
}

const v = new VectorBit(400);
v.insert(2);
v.insert(100);
v.insert(40);
v.insert(99);

v.report();
