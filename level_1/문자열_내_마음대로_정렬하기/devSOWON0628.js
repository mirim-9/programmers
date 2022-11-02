function solution(strings, n) {
    let result = strings.sort((a,b)=>{
        if(a[n] > b[n]){
            return 1
        }else if(a[n] < b [n]){
            return -1
        }else{
            if(a.toString(2)>b.toString(2)){
                return 1
            }else{
                return -1
            }
        }
    })
    return result;
}
