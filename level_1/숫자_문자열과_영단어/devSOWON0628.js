function solution(s) {
    let engList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let i = 0 ; i < engList.length ; i++){
        s = s.replace(new RegExp(engList[i], 'g'), i)        
    }
    return Number(s);
}
