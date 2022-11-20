function solution(n) {
    // 피보나치 수열의 첫번째(index:0), 두번째(index:1)의 값은 1이다.
    let f = [1, 1]
    for(let i = 2 ; i < n ; i++){
        f[i] = (f[i-1] + f[i-2]) % 1234567
    }
    return f[f.length-1]
}

