function solution(n) {
    let f = [1, 1]
    for(let i = 2 ; i <= n ; i++){
        f[i] = (f[i-1] + f[i-2]) % 1234567
    }
    return f[f.length-1];
}
