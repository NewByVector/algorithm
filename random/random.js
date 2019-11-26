//在序列0 1 2 3 ... n-1中随机选择m个数字，按照顺序输出

function bigrandom() {
    return Math.floor(Math.random() * 100000);
}

function randint(a, b) {
    return a + Math.floor(Math.random() * (b - a + 1));
}

//选取0的概率是m/n
//选取1的概率(选取0的结果已知条件下)m/(n-1) 或者 (m-1)/(n-1)
function genRandom1(m, n) {
    for (let i = 0; i < n; i++) {
        if (bigrandom() % (n - i) < m) {
            console.log(i);
            m--;
        }
    }
}

//利用set集合去重
function genRandom2 (m, n) {
    let s = new Set();
    while(s.size < m) {
        let r = bigrandom() % n;
        s.add(r);
    }
    //进行排序
    let arr = [...s];
    arr.sort((a, b) => a - b);
    for (let i = 0, len = arr.length; i < len; i++) {
        console.log(arr[i]);
    }
}

//将前m个数随机打乱
function genRandom3 (m, n) {
    let a = [];
    for (let i = 0; i < n; i++) {
        a[i] = i;
    }
    for (let i = 0; i < m; i++) {
        let j = randint(i, n - 1);
        let t = a[i];
        a[i] = a[j];
        a[j] = t;
    }
    let arr = a.slice(0, m);
    arr.sort((a, b) => a - b);
    for (let i = 0, len = m; i < len; i++) {
        console.log(arr[i]);
    }
}

genRandom3(3, 10);