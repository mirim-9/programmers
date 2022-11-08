function solution(n) {
    let resultNum = Math.sqrt(n)
    return Number.isInteger(resultNum) ? (resultNum+1) * (resultNum+1) : -1;
}
