function solution(price, money, count) {
    let pay = 0;
    for(let i = 1 ; i <= count ; i++){
        pay+=price*i
    }
    return money-pay < 0 ? Math.abs(money-pay) : 0
}
