function solution(d, budget) {
    const amountList = d.sort((a, b) => a - b)
    let answer = 0
    for(let amount of amountList){
        if(budget - amount >= 0){
            answer++
            budget-=amount
        }
    }
    return answer;
}
