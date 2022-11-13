function solution(arr, divisor) {
    let answer = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % divisor == 0){
            answer.push(arr[i])
        }
    }
    if(answer.length == 0){
        return [-1]
    }else{
        answer = answer.sort((a,b)=>{
            if(a>b){
                return 1
            }else if(a<b){
                return -1
            }else{
                return 1
            }
        })
    }
    
    return answer;
}
