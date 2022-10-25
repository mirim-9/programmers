function solution(n) {
    let answer = 1
    let sum = 0
    for(let i = 0 ; i < n-1 ; i++ ){
        sum = 0
        for(let j=i+1 ; j < n ; j++){
            sum +=j
            if(sum > n){
                break
            }
            if(sum == n){
                answer++
                break
            }
        }
    }
    return answer;
}
