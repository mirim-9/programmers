function solution(n) {
    var answer = [];
    let nArray = n.toString().split("").map((x)=>(Number(x)))
    for(let i = nArray.length-1 ; i >= 0 ; i--){
        answer.push(nArray[i])
    }
    return answer;
}
