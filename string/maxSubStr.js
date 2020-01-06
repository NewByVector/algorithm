//最长重复子字符串
function comlen(s1, s2) {
    let i = 0;
    while (s1[i] && s1[i] === s2[i]) {
        i++;
    }
    return i;
}

function maxSubStr(str) {
    if (str === '') {
        return '';
    }
    let a = [];
    let maxLen = 0;
    let maxIndex = 0;
    const len = str.length;
    //后缀数组
    for (let i = 0; i < len; i++) {
        a[i] = str.slice(i);
    }
    //排序
    a.sort((a1, a2) => a1.localeCompare(a2));
    //扫描相邻元素
    for (let j = 0; j < len - 1; j++) {
        const max = comlen(a[j], a[j + 1]);
        if (max > maxLen) {
            maxLen = max;
            maxIndex = j;
        }
    }
    return a[maxIndex].slice(0, maxLen);
}
