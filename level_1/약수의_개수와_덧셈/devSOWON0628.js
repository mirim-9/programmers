function solution(left, right) {
    let result = 0
    for(let i = left ; i <= right ; i++){
        if(measureCount(i)%2==0){
            result+=i
        }else{
            result-=i 
        }
    }
    return result;
}

// 매개변수 num의 약수의 개수 return
function measureCount(num){
    let resultCount = 1 // 모든 약수는 무조건 1 이상임 
    for(let i = 2 ; i<= num ; i++){
        if(num%i==0){
            resultCount++
        }
    }
    return resultCount
}
