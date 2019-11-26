//求一个向量中子向量的最大和

function max(a, b) {
    return Math.max(a, b);
}

//方法1
//分治思想
function maxSum1(a, l, r) {
    if (l > r) {
        //向量无数据
        return 0;
    }
    if (l == r) {
        //向量只有一项
        return max(a[l], 0);
    }
    let m = Math.floor((l + r) / 2);
    //查找m左侧包括m边界的最大和
    let lmax = sum = 0;
    for (let i = m; i >= l; i--) {
        sum += a[i];
        lmax = max(sum, lmax);
    }
    let rmax = sum = 0;
    //查找右侧包括m边界的最大和
    for (let i = m + 1; i < r; i++) {
        sum += a[i];
        rmax = max(rmax, sum);
    }

    return max(lmax + rmax, maxSum(a, l, m), maxSum(a, m + 1, r));
}

//方法2
function maxSum2(a, l, r) {
    let tempMax = 0;
    let maxSum = 0;
    for (let i = 0, len = a.length; i < len; i++) {
        tempMax = max(tempMax + a[i], 0);
        maxSum = max(maxSum, tempMax);
    }
    return maxSum;
}

let arr = [31, -41, 59, 26, -53, 58, 97, -93, -23, 84];
console.log(maxSum2(arr, 0, arr.length - 1));