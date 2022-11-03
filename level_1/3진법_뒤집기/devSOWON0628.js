function solution(n) {
    let ternary = n.toString(3).split("")
    let result = []
    for(let i = ternary.length-1 ; i >= 0 ; i--){
        result.push(ternary[i])
    }
    return parseInt(result.join(""),3);
}
