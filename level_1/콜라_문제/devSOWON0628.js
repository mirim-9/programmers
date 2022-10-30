function solution(a, b, n) {
    let bottleCount = 0
    while(true){
        let resultBottle = returnBottle(a,b,n)
        if(n < a){
            break;
        }else{
            bottleCount+=resultBottle[0]
            n = resultBottle[0]+resultBottle[1]
        }
    }
    return bottleCount;
}

function returnBottle(a, b, n){
    if(n < a) {
        return 0
    }else{
        return [Math.floor( n / a ) * b , n % a]
    }
}
