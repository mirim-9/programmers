function solution(n) {
    let nDeciamlOneCount = n.toString(2).toString().split("1").length-1
    
    let temp = n
    while(true){
        temp++
        if(Number(temp).toString(2).toString().split("1").length-1 == nDeciamlOneCount){
            break
        }
    }
    return temp;
}
