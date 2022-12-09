function solution(n, k) {
    let serviceDrink = Math.floor(n / 10)
    return n*12000 + (k-serviceDrink)*2000;
}
