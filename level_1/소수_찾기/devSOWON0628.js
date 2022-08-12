function solution(n) {
    let answer = 0;
  // 1은소수가 아니기때문에 2부터 시작했음
    for(let i = 2 ; i <= n ; i++){
        if(isPrimeNumber(i)){
            answer++
        }
    }
    return answer;
}

function isPrimeNumber(num){
    if(num === 2) return true
    for(let i = 2 ; i <= Math.floor(Math.sqrt(num)) ; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
