function solution(surveyList, choices) {
    const score = [3, 2, 1, 0, 1, 2, 3]
    const alphabet = ["R", "T", "C", "F", "J", "M", "A", "N"]
    let resultMap = new Map();
    resultMap.set("R", 0)
    resultMap.set("T", 0)
    resultMap.set("C", 0)
    resultMap.set("F", 0)
    resultMap.set("J", 0)
    resultMap.set("M", 0)
    resultMap.set("A", 0)
    resultMap.set("N", 0)
    
    for(let i = 0 ; i < surveyList.length ; i++){
        if(choices[i]-1 < 3){
            resultMap.set(surveyList[i][0], resultMap.get(surveyList[i][0])+score[choices[i]-1])
        }else{
            resultMap.set(surveyList[i][1], resultMap.get(surveyList[i][1])+score[choices[i]-1])
        }
    }
    let answer = '';
    for(let i = 0 ; i < 8 ; i+=2){
        if(resultMap.get(alphabet[i]) < resultMap.get(alphabet[i+1])){
            answer+=alphabet[i+1]
        }else{
            answer+=alphabet[i]
        }
    }    
    return answer;
}
