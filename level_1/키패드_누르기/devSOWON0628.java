function solution(numbers, hand) {
    hand = hand == "left" ? "L" : "R"
    const keyPad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]]
    let currnetLeftIndex = [3, 0]
    let currentRightIndex = [3, 2]
    let answer = '';
    for(const num of numbers){
        for(let i = 0 ; i < keyPad.length ; i++){
            const resultIndexOf = keyPad[i].indexOf(num)
            if(resultIndexOf != -1){
                const currentIndex = [i, resultIndexOf]
                if(currentIndex[1] == 0){
                    currnetLeftIndex=currentIndex
                    answer+="L"
                }else if(currentIndex[1] == 2){
                    currentRightIndex=currentIndex
                    answer+="R"
                }else{
                    const leftCalc = Math.abs(currnetLeftIndex[0] - currentIndex[0]) + Math.abs(currnetLeftIndex[1] - currentIndex[1])
                    const rightCalc = Math.abs(currentRightIndex[0] - currentIndex[0]) + Math.abs(currentRightIndex[1] - currentIndex[1])
                    if(leftCalc > rightCalc){
                        currentRightIndex=currentIndex
                        answer+="R"
                    }else if(leftCalc < rightCalc){
                        currnetLeftIndex=currentIndex
                        answer+="L"
                    }else{
                        console.log('결정',answer)
                        if(hand == "L"){
                            currnetLeftIndex=currentIndex
                            answer+="L"
                        }else{
                            currentRightIndex=currentIndex
                            answer+="R"
                        }
                    }
                }
                
            }
            
        }
        
    }
    
    
    return answer;
}
