function solution(progresses, speeds) {
    let needDays = progresses.map((progress, index)=>{
        return Math.ceil((100-progress)/speeds[index])
    })
    let answer = [];
    let deployCount = 1    
    let deployDay = needDays.shift()
    while(needDays.length != 0){
        let today = needDays.shift()
        if(today<=deployDay){
            deployCount++
        }else{
            answer.push(deployCount)
            deployDay = today
            deployCount = 1
        }
    }
    // 남은 배포
    answer.push(deployCount)
    return answer;
}
