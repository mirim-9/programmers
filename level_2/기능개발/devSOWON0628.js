function solution(progresses, speeds) {
    let result = []
    let day = 0
    let deployFlag = false
    let deployCount = 0
    let length = 0
    let removeValues = []
    while(progresses.length!=0){
        day++
        deployFlag = false
        length = progresses.length
        removeValues = []
        deployCount = 0
        for(let i = 0 ; i < length ; i++){
            if(progresses[i] + speeds[i]*day >= 100){
                deployCount++
                removeValues.push(progresses[i])
                deployFlag = true
            }else{
                break;
            }
        }
        if(deployFlag){
            for(let value of removeValues){
                let index = progresses.indexOf(value)
                progresses.splice(index, 1)
                speeds.splice(index, 1)
            }           
            result.push(deployCount)            
        }
    }
    
    return result;
}
