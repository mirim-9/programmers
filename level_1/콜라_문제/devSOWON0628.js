function solution(a, b, n) {
    let bottleCount = 0
    while(n >= a){
        let resultBottle = Math.floor(n/a)*b
        bottleCount+=resultBottle
        n=resultBottle+(n%a)
    }
    return bottleCount;
}
