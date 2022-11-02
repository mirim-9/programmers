function solution(x) {
    let sum = (x.toString().split("").map((x) => (Number(x)))).reduce(function(a, b){
        return a+b
    })
    return x%sum==0
}
