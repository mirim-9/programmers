function solution(s) {
    let sList = s.split(" ")
    sList.sort((a, b) => a - b);
    return sList[0]+" "+sList[sList.length-1]
}
