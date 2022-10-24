function solution(s) {
    let count = 1;
    let zeroCount = 0;
    while(true){
        zeroCount+=s.split('0').length - 1
        s=calc(s)
        if(s == 1){
           break;
        }else{
           count++
        }
    }
    return [count, zeroCount];
}

function calc(s){
    let zeroReplace = s.replace(/0/gi, "");
    return zeroReplace.length.toString(2)
}
