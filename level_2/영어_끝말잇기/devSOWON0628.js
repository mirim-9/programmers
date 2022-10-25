function solution(n, words) {
    let wordList = new Array()
    wordList.push(words[0])
    let wrongIndex = 0
    for(let i = 1 ; i < words.length ; i++){
        if(wordList.includes(words[i]) || wordList[wordList.length - 1].substr(-1) != words[i].substring(0, 1)){
            wrongIndex = i
            break
        }else{
            wordList.push(words[i])
        }
    }
    
    if(wrongIndex == 0){
        return [0, 0]
    }

    const resultY = Math.floor((wrongIndex)/n)+1
    return [ wrongIndex%n+1, resultY ]
}
