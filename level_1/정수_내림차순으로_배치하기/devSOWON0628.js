function solution(n) {
    return Number((n.toString().split("")).sort(function(a,b){
        return b-a
    }).join(""))
}
