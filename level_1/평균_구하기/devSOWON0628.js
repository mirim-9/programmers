function solution(arr) {
    // result는 모든값의 합
    let result = arr.reduce((a, b) => a + b, 0);
    return arr.reduce((a, b) => a + b, 0)/arr.length;
}
